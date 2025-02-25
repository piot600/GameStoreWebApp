const db = require('../config/db');

const Game = {
    getAllGames: (callback) => {
        const sql = "SELECT * FROM game";
        db.query(sql,callback);
    },

    getGameById: (id, callback) => {
        const sql = "SELECT * FROM game WHERE gameID=?";
        db.query(sql, [id], callback);
    },

    addGame: (gameData, callback) => {
        const sql = "INSERT INTO game (title, price, release_date, type, age_limit, descr) VALUES (?)";
        db.query(sql, [gameData], callback);
    },

    updateGame: (id, gameData, callback) => {
        const sql = "UPDATE game set `title`=?, `price`=?, `release_date`=?, `type`=?, `age_limit`=?, `descr`=? WHERE gameID = ?";
        db.query(sql, [...gameData, id], callback);
    },

    deleteGame: (id, callback) => {
        const sql = "DELETE FROM game WHERE gameID = ?";
        db.query(sql, [id], callback);
    }
}

module.exports = Game;