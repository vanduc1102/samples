import userServices from '../services/user'

async function authenticate(user, ipAddress) {
    return userServices.authenticate(user, ipAddress);
}

async function findAll() {
    return userServices.findAll()
}

export default {
    authenticate,
    findAll
}