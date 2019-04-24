const User = require("../model/user");
const daoCommon = require("./common/daoCommon");

class UserDao{
    constructor(){
        this.common - new daoCommon();
    }

    findAll(){
        let sqlRequest = "SELECT * FROM user";

        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for(const row of rows){
                users.push( new User(
                    row.id,
                    row.name,
                    row.description,
                    row.price,
                    row.img
                ));
            }
            return users;
        });
    }
}

module.exports = UserDao;