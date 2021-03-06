let sqlite3 = require('sqlite3').verbose();
let DB_PATH = './db/LuxuryLiftsdatabase.db';


const db = new sqlite3.Database(DB_PATH,
    function(err){
        if(err){
            console.log(err);
            return
        }
        console.log("Conected to " + DB_PATH + " database");
        db.exec("PRAGMA foreign_key = ON;",
        function(err){
            if(err) {
                console.error("Pragma statement didn't work");
            } else{
                console.log("Foreign Key Enforcement is on.");
            }
        }
        );
    }
);
let init = function () {

    db.run('CREATE TABLE if not exists user (' +
        'id INTEGER PRIMARY KEY,' +
        'userName TEXT,' +
        'password TEXT,' +
        'firstName TEXT,' +
        'lastName TEXT,' +
        'DoB DATE,' +
        'email TEXT,' +
        'access NUMERIC' +
        'phone NUMERIC,' +
        'img BLOB,' +
        'price NUMERIC' +
        ')'
    );
    db.run('CREATE TABLE if not exists product (' +
        'id INTEGER PRIMARY KEY,' +
        'year YEAR,' +
        'color TEXT,' +
        'seats INTEGER,' +
        'price INTEGER,' +
        'description TEXT,' +
        'name TEXT,' +
        'img BLOB' +
        ')'
    );
    
    db.run('CREATE TABLE if not exists orders (' +
        'id INTEGER PRIMARY KEY,' + 
        'user_id INTEGER,' +
        'product_id INTEGER,' +
        'date DATE,' +
        'product_name TEXT,' +
        'order_name TEXT,' +
        'FOREIGN KEY(`product_id`) REFERENCES `product`(`id`),' +
        'FOREIGN KEY(`user_id`) REFERENCES `user`(`id`)' +
        ')'
    );
}


module.exports = {
    init: init,
    db: db
};