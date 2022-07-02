import { Sequelize } from "sequelize";
import db from '../config/Database.js';

// if you console log, you will see the datatypes
const {DataTypes} = Sequelize;

const Users = db.define('users', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    // in PostgreSQL even if you creating a table with a column with uppercase
    // for example createdAt it automatically making it lower-case
    createdAt: {
        field: 'createdat',
        type: DataTypes.DATE
    },
    // in PostgreSQL even if you creating a table with a column with uppercase
    // for example createdAt it automatically making it lower-case
    updatedAt: {
        field: 'updatedat',
        type: DataTypes.DATE
    }
}, {
    // you won't be able to change the table name
    freezeTableName: true
})

// Ziv recommanded to add to every row in every table the columns createdAt and updatedAt

export default Users;
