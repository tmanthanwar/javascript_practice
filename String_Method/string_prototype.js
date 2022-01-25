function employee(name,bornyear,designation){
   this.name=name;
   this.bornyear=bornyear;
   this.designation=designation;
}

employee.prototype.salary = 1200;

var frnd= new employee()