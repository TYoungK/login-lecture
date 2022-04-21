'use strict'
const users = {
    id : ['tyk','xordud','admin'],
    pwd : ['1234','1111','root'],
    name : ['택영김','택영','관리자'],
}
class UserStorage{

    static getUsers(...fields){
        
        const newUsers = fields.reduce((newUsers, field) => {
            
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    static getUserInfo(id){
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUsers, key) => {
            newUsers[key] = users[key][idx];
            return newUsers;
        },{});
        return userInfo;
    }

    static addUser(body){
        if(users.id.includes(body.id)){
            return false;
        }
        users.id.push(body.id);
        users.name.push(body.name);
        users.pwd.push(body.pwd);
        return true;
    }
}

module.exports = UserStorage