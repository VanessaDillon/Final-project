const User = require("../model/user");
const daoCommon = require("./common/daoCommon");

class UserDao{
    constructor(){
        this.common = new daoCommon();
    }

    findAll(){
        let sqlRequest = "SELECT * FROM user";

        return this.common.findAll(sqlRequest).then(rows => {
            let user = [];
            for(const row of rows){
                user.push( new User(
                    row.id,
                    row.firstName,
                    row.lastName,
                    row.access,
                    row.img,
                    row.phone,
                    row.userName,
                    row.DoB,
                    row.password,
                    row.email,
                ));
            }
            return user;
        });
    }
}

module.exports = UserDao;