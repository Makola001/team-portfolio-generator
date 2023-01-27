// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitUsernm){
        super(name, id, email);
        this.gitUsernm = gitUsernm;
    }

    getGithub() {
        console.log(`${this.gitUsernm}`);
    }

    getRole(){
        console.log("Engineer");
    }
}

module.exports = Engineer