import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const RefreshToken = sequelize.define('RefreshToken', {
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    expired: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tokenByIp: {
        type: DataTypes.STRING,
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        default: true
    }
});

export default RefreshToken;