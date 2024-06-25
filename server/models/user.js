'use strict';

import {Model} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        // associate here if needed
    };
    User.init({
        userId: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        age: DataTypes.SMALLINT,
        gender: {
            type: DataTypes.ENUM('male', 'female', 'non-binary'),
            allowNull: false
        },
        email: DataTypes.STRING,
        passwordDigest: DataTypes.STRING
    }, {
        sequelize,
        underscored: true,
        modelName: 'User',
    });
    return User;
}