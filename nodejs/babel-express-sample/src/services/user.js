import UserModel, { FIELD_PASSWORD_HASH } from '../models/user';
import bcrypt from 'bcryptjs';
import ramda from 'ramda';
import jwt from 'jsonwebtoken';
import config from '../config/secret.json'

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
    const refreshToken = await generateRefreshToken(createdUser, ipAddress);
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
        { expiresIn: '5m' }
    );
}

async function generateRefreshToken(user, ipAddress) {
    return bcrypt.hash(user.username + Date.now() + ipAddress, 10);
}

async function findAll() {
    return UserModel.findAll({ limit: 10 });
}

export default {
    authenticate,
    findAll
}
