const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
    User.getAll((err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.getUserById = (req, res) => {
    User.getById(req.params.id, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.createUser = (req, res) => {
    const userData = [
        req.body.name, req.body.surname, req.body.email, req.body.login, req.body.password, req.body.permission || "user"
    ];
    User.addUser(userData, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.updateUser = (req, res) => {
    const userData = [
        req.body.name, req.body.surname, req.body.email, req.body.login, req.body.password, req.body.permission
    ];
    User.updateUser(req.params.id, userData, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.deleteUser = (req, res) => {
    User.deleteUser(req.params.id, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};
