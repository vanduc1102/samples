import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';
import RefreshToken from './refresh-token';

const FIELD_PASSWORD_HASH = 'passwordHash';

const User = sequelize.define('Users', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    [FIELD_PASSWORD_HASH]: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Users',
});

User.hasMany(RefreshToken);

export { FIELD_PASSWORD_HASH };
export default User;