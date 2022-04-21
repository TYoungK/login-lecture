'use strict'

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const body = this.body;
        const {id, pwd} = await UserStorage.getUserInfo(body.id);

        if(id){
            if(id === body.id && pwd === body.pwd){
                return {success : true};
            }
            return {success : false, msg : '비밀번호 오류.'};
        }
        return {success : false, msg : '존재하지 않는 아이디.'};

    }

    async register(){
        const body = this.body;
        try{
            await UserStorage.addUser(body);
            return {success : true};
        }catch (err){
            return {success : false, msg : err};
        }
        
    }
}

module.exports = User;