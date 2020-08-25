const User = require('../models/userModel');

exports.getUsers = (req, res) => {
    User.getUsers((users) => {
        res.status(200).json(users);
    });
};

exports.getUserDetail = (req, res) => {
    const id = req.params.id;
    User.getUserDetail(id, (user) => {
        res.status(200).json(user);
    })
};

exports.saveUser = (req, res) => {
    const userInformation = req.body;
    User.save(userInformation, () => {
        res.status(201).json({message: 'User successfully saved'});
    });
};

exports.updateUserDetail = (req, res) => {
    const id = req.params.id;
    const userData = req.body;
    User.updateUser(id, userData, () => {
        res.status(200).json({message: 'Successfullt updated'});
    });
};

