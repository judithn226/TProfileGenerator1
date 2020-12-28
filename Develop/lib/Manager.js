// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }

    // method getOfficeNumber() getRole() // Overridden to return 'Engineer'
    getOfficeNumber(){
        return this.officeNumber;
    }
    //override
    getRole(){
        return "Manager";
    }
}  
module.exports = Manager;