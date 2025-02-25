const db = require('../config/db');

const User = {
    getAll: (callback) => {
        const sql = "SELECT * FROM user";
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = "SELECT * FROM user WHERE userID=?";
        db.query(sql, [id], callback);
    },

    addUser: (userData, callback) => {
        const sql = "INSERT INTO user (name, surname, email, login, password, permission) VALUES (?)";
        db.query(sql, [userData], callback);
    },

    updateUser: (id, userData, callback) => {
        const sql = "UPDATE user SET name=?, surname=?, email=?, login=?, password=?, permission=? WHERE userID=?";
        db.query(sql, [...userData, id], callback);
    },

    deleteUser: (id, callback) => {
        const sql = "DELETE FROM user WHERE userID=?"
        db.query(sql, [id], callback);
    }
};

module.exports = User;