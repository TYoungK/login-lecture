'use strict'
const fs = require('fs').promises;

class UserStorage{

    static getUsers(isAll, ...fields){
        return fs.readFile('./src/databases/users.json')
        .then(data => {
            const users = JSON.parse(data);
            if(isAll) return users;
            const userInfo = fields.reduce((newUsers, field) => {
                if (users.hasOwnProperty(field)){
                    newUsers[field] = users[field];
                }
                return newUsers;
            },{});
            return userInfo;
        })
        .catch(err => console.error());
    }

    static getUserInfo(id){
        return fs.readFile('./src/databases/users.json')
        .then(data => {
            const users = JSON.parse(data);
            const idx = users.id.indexOf(id);
            const userInfo = Object.keys(users).reduce((newUsers, key) => {
                newUsers[key] = users[key][idx];
                return newUsers;
            },{});
            return userInfo;
        })
        .catch(err => console.error());
    }

    static async addUser(body){
        const users = await this.getUsers(true);
        if(users.id.includes(body.id)) throw '아이디 존재';

        users.id.push(body.id);
        users.name.push(body.name);
        users.pwd.push(body.pwd);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return true;
    }
}

module.exports = UserStorage