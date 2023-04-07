var Employee = /** @class */ (function () {
    function Employee(fname, mname, lname) {
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
    }
    Employee.prototype.getMname = function () {
        return this.mname;
    };
    return Employee;
}());
var e1 = new Employee1('a', 'b', 'c');
console.log(e1.getName());
var Employee = /** @class */ (function () {
    //constructor(){
    // this.empno=101;
    // this.ename="abc";
    // this.sal=10000;
    // this.attendance=18;
    //}//
    function Employee(empno, ename, sal, attendance) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendance = attendance;
    }
    Employee.prototype.getEmpno = function () {
        return this.empno = 420;
    };
    Employee.prototype.getEname = function () {
        return this.ename;
    };
    Employee.prototype.getSal = function () {
        return this.sal;
    };
    Employee.prototype.getattendance = function () {
        return this.attendance;
    };
    Employee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendance);
    };
    return Employee;
}());
/*var emp=new Employee();
var emp1=new Employee();
emp1.empno=102;
var emp2=new Employee();
emp2.empno=103;
emp.print();
emp1.print();
emp2.print();)*/
var emp = new Employee(1, 'abc', 3000, 20);
var emp1 = new Employee(2, 'bbc', 2000, 30);
var emp2 = new Employee(3, 'cde', 3500, 25);
emp.print();
emp1.print();
emp2.print();
