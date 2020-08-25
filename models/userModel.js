const fs = require('fs');
const rootDir = require('../utils/path');

module.exports = class User {

    static path = rootDir + '/data/userInformation.json';

    static getUsers = (callback)=> {
        fs.readFile(User.path, "utf8", (error, fileContent) => {
            if(error || !fileContent){
                callback([]);
                return;
            }
            callback(JSON.parse(fileContent));
        })
    };

    static writeUsers(users, callback){
        fs.writeFile(User.path, JSON.stringify(users), (error) => {
            if(error) throw error;
            callback();
        });
    }

    static getUserDetail(id, callback){
        User.getUsers((users) => {
            const user = users.filter( (user) => user.id === +id);
            callback(user);
        })
    }

    static save(userInformation, callback){
        User.getUsers((users) => {
            users.push(userInformation);
            User.writeUsers(users, callback);
        })
    }

    static updateUser(id, newUserData, callback){
        User.getUsers((users) => {
            const updatedUsers = users.map( user => {
                if(user.id == +id) return newUserData;
                return user;
            });
            User.writeUsers(updatedUsers, callback);
        })
    }
};
