import UserModel, { FIELD_PASSWORD_HASH } from '../models/user';
import RefreshToken from '../models/refresh-token';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import ramda from 'ramda';
import jwt from 'jsonwebtoken';
import { promisify } from 'util'
import config from '../config/secret.json'

const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;

async function create(user) {
    const passwordHash = await bcrypt.hash(user.password, 10);
    const createdUser = await UserModel.create({
        ...user,
        firstName: 'Puppy',
        lastName: (Math.round(Math.random() * 100)).toString(),
        passwordHash
    })
    return createdUser;
}

async function authenticate(body, ipAddress) {
    let createdUser = await UserModel.findOne({
        where: {
            username: body.username
        }
    });
    if (createdUser) {
        const isMatched = await bcrypt.compare(body.password, createdUser.passwordHash);
        if (!isMatched) {
            throw new Error('Username or password is not correct.');
        }
    } else {
        createdUser = await create(body);
    }
    const accessToken = await generateJwtToken(createdUser);
    const refreshToken = await generateRefreshToken(createdUser);
    const refreshTokenEntity = await RefreshToken.create({
        expired: new Date( Date.now() + ONE_YEAR).toISOString(),
        tokenByIp: ipAddress,
        token: refreshToken,
        isActive: true
    });

    createdUser.addRefreshToken(refreshTokenEntity);

    return {
        ...ramda.omit([FIELD_PASSWORD_HASH]),
        accessToken,
        refreshToken,
    }
}

async function generateJwtToken(user) {
    return jwt.sign(
        { sub: user.id, id: user.id },
        config.secret,
        {
            expiresIn: '5m',
            algorithm: 'HS256'
        }
    );
}

async function generateRefreshToken() {
    const buffer = crypto.randomBytes(48);
    return buffer.toString('base64');
}

async function findAll() {
    return UserModel.findAll({ limit: 10 });
}

async function getProfile(userId) {
    const user = await UserModel.findByPk(userId);
    return user;
}

async function refreshToken(token) {
    const existRefreshTokenEntity = await RefreshToken.findOne({
        where:{
            token: token,
            isActive: true
        }
    });
    if(!existRefreshTokenEntity){
        throw new Error('Invalid refresh token.')
    }
    const user = await UserModel.findByPk(existRefreshTokenEntity.getDataValue('UserId'));
    const accessToken = await generateJwtToken(user);
    return {
        accessToken
    }
}

export default {
    authenticate,
    findAll,
    getProfile,
    refreshToken
}
