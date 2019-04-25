class User {
    constructor(id, userName, password, firstName, lastName, DoB, phone, email, img, access) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.DoB = DoB;
        this.phone = phone;
        this.email = email;
        this.img = img;
        this.access = access;
        
    }
}

module.exports = User;