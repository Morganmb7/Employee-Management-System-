//base class
class employee {
    constructor (name,department){
        this.name =name
        this.department = department;
    }
    describe (){
        return `${this.name} works in ${this.department} department.`;
    }
}

//subclass manager
class manager extends employee {
    cosntructor (name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    describe() {
        return `${this.name} manages the ${this.department} department with a team of ${this.teamSize}`;
    }
}

//sample employees and manangers
const emp1 = new employee("Alice","HR");
const emp2 = new employee("Bob","Engineering");
const mgr1 = new manager("Charlie","Sales",5);
const mgr2 = new manager("Diana","Marketing",3);

//company class
class company {
    constructor (){
        this.employees = [];

    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
}
}
//instantiate company and add employees
const RushPowerLLC = new company();
RushPowerLLC.addEmployee(emp1);
RushPowerLLC.addEmployee(emp2);
RushPowerLLC.addEmployee(mgr1);
RushPowerLLC.addEmployee(mgr2);

RushPowerLLC.listEmployees();