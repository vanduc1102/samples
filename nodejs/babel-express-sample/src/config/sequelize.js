import Sequelize from 'sequelize';
import path from 'path';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(path.resolve('./'),
        'database.sqlite')
});

sequelize.sync({ force: true });

export default sequelize;