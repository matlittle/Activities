const Sequelize = require('sequelize');
const sequelize = new Sequelize('starwars', 'root', 'oblivion', {
    dialect: 'mysql'
});

const Char = sequelize.define('allcharacters', {
    id: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        autoIncrement: true,
        primaryKey: true 
    },
    routeName: { type: Sequelize.STRING, allowNull: false },
    name: { type: Sequelize.STRING, allowNull: false },
    role: { type: Sequelize.STRING, allowNull: false },
    age: { type: Sequelize.INTEGER, allowNull: false },
    forcePoints: { type: Sequelize.INTEGER, allowNull: false }
}, { timestamps: false });

Char.sync();

module.exports = Char;
