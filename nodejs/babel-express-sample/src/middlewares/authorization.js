import jwt from 'express-jwt';
import {secret} from '../config/secret.json'

function authorize(roles = []) {
    if (typeof roles === 'string') {
        roles = [roles];
    }
    return [
        jwt({ secret, algorithms: ['HS256'] })
    ];
}

export default authorize;