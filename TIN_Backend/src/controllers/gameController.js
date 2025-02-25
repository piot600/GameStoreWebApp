const Game = require('../models/gameModel');

exports.getAllGames = (req, res) => {
    Game.getAllGames((err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.getGameById = (req, res) => {
    Game.getGameById(req.params.id, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.addGame = (req, res) => {
    const gameData = [
        req.body.title,
        req.body.price,
        req.body.release_date,
        req.body.type,
        req.body.age_limit,
        req.body.descr
    ];
    Game.addGame(gameData, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.updateGame = (req, res) => {
    const gameData = [
        req.body.title,
        req.body.price,
        req.body.release_date,
        req.body.type,
        req.body.age_limit,
        req.body.descr
    ];
    Game.updateGame(req.params.id, gameData, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.deleteGame = (req, res) => {
    Game.deleteGame(req.params.id, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};
