import userServices from '../services/user'

async function authenticate(user, ipAddress) {
    return userServices.authenticate(user, ipAddress);
}

async function findAll() {
    return userServices.findAll()
}

async function getProfile(userId){
    return userServices.getProfile(userId)
}

async function refreshToken(token){
    return userServices.refreshToken(token);
}

export default {
    authenticate,
    findAll,
    getProfile,
    refreshToken
}