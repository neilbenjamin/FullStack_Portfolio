//Manage - Capstone Project 3.

//SuperClass
class Employee {
  constructor(Name, Surname, Age, SalesTarget, targetReached = false) {
    //Attributes - Added an extra boolean
    this.Name = Name; //Initialising Attributes
    this.Surname = Surname; //Added Surname.
    this.Age = Age;
    this.SalesTarget = SalesTarget;
    this.targetReached = targetReached;
  }
  //Method - Included a superclass Method.
  //Target Reached - True
  get getTargetAchieved() {
    this.targetReached = true;
    if (this.targetReached) {
      return `Target achieved.`;
    }
  }

  //Target not reached - False
  get getTargetNotAchieved() {
    if (!this.targetReached) {
      return `Failed to make target. No bonus.`;
    }
  }
}

//SubClass1 - Salaried Employess
class SalariedEmployees extends Employee {
  //1st Sub Class to pair with parent class.
  constructor(
    Name,
    Surname,
    Age,
    SalesTarget,
    targetReached,
    basicSalary,
    employmentStatus,
    monthlySales,
    percentageIncrease
  ) {
    super(Name, Surname, Age, SalesTarget, targetReached); //Superclass Attributes
    this.basicSalary = basicSalary; //New attributes initialised.
    this.employmentStatus = employmentStatus;
    this.monthlySales = monthlySales;
    this.percentageIncrease = percentageIncrease;
    // this.newIncome = newIncome;
  }
  //Method to calculate Remuneration.
  fixedMonthlySummary() {
    //If target met
    if (this.monthlySales >= 100) {
      return `
    Name:              ${this.Name} 
    Surname:           ${this.Surname} 
    Age:               ${this.Age} 
    Employment Satus:  ${this.employmentStatus} 
    Fixed Income:      R ${this.basicSalary.toFixed(2)} 
    Target Reached:    ${this.getTargetAchieved}
    Income % Increase: ${this.percentageIncrease}%
    Updated Salary:    R ${(this.basicSalary =
      (parseFloat(this.percentageIncrease) / 100) *
        parseFloat(this.basicSalary) +
      parseFloat(this.basicSalary)).toFixed(2)}`; //I tried using the parseFloat() method all the time to
      //to avoid concatenation as well as the fixed() method to add 2 decimal spaces.
    } else {
      //If target not met
      return ` 
    Name:              ${this.Name} 
    Surname:           ${this.Surname} 
    Age:               ${this.Age} 
    Employment Satus:  ${this.employmentStatus} 
    Fixed Income:      R ${this.basicSalary.toFixed(2)} 
    Target Reached:    ${this.getTargetNotAchieved}`;
    }
  }
}

//SubClass 2 - Hourly Rate Workers
class HourlyPaidWorkers extends Employee {
  //2nd child class to pair with parent class.
  constructor(
    Name,
    Surname,
    Age,
    SalesTarget,
    targetReached,
    hourlyRate,
    hoursPerMonth,
    employmentStatus,
    monthlySales,
    percentageIncrease
  ) {
    super(Name, Surname, Age, SalesTarget, targetReached); //Superclass attributes
    this.hourlyRate = hourlyRate; //New attributes initialised.
    this.hoursPerMonth = hoursPerMonth;
    this.employmentStatus = employmentStatus;
    this.monthlySales = monthlySales;
    this.percentageIncrease = percentageIncrease;
  }
  //Methods
  hourlyMonthlySummary() {
    if (this.monthlySales >= 100) {
      return `
    Name:              ${this.Name} 
    Surname:           ${this.Surname} 
    Age:               ${this.Age} 
    Employment Satus:  ${this.employmentStatus} 
    Hourly Rate:       R ${this.hourlyRate.toFixed(2)}
    Hours Per Month:   ${this.hoursPerMonth}
    Salary Total:      R ${(this.hourlyRate * this.hoursPerMonth).toFixed(2)} 
    Target Reached:    ${this.getTargetAchieved}
    Hourly % Increase: ${this.percentageIncrease}%
    Updated Salary:    R ${(
      parseFloat(this.hourlyRate * 2) * parseFloat(this.hoursPerMonth)
    ).toFixed(2)}`;
    } else {
      return ` 
    Name:              ${this.Name} 
    Surname:           ${this.Surname} 
    Age:               ${this.Age} 
    Employment Satus:  ${this.employmentStatus} 
    Hourly Rate:       ${this.hourlyRate.toFixed(2)}
    Hours Per Month:   ${this.hoursPerMonth}
    Salary Total:      R ${(
      parseFloat(this.hourlyRate) * parseFloat(this.hoursPerMonth)
    ).toFixed(2)} 
    Target Reached:    ${this.getTargetNotAchieved}`;
    }
  }
}

//Sub Class 3 - Hybrid Employee

class HybridEmployees extends Employee {
  constructor(
    Name,
    Surname,
    Age,
    SalesTarget,
    targetReached = false,
    basicSalary,
    hourlyRate,
    hoursPerMonth,
    employmentStatus,
    monthlySales,
    percentageIncrease
  ) {
    super(Name, Surname, Age, SalesTarget, targetReached);
    this.basicSalary = basicSalary;
    this.hourlyRate = hourlyRate;
    this.hoursPerMonth = hoursPerMonth;
    this.employmentStatus = employmentStatus;
    this.monthlySales = monthlySales;
    this.percentageIncrease = percentageIncrease;
  }
  //Method
  hybridPayMonthlySummary() {
    if (this.monthlySales >= 100) {
      const increasedHourlyRate =
        parseFloat(this.hourlyRate) +
        (parseFloat(this.percentageIncrease) / 100) *
          parseFloat(this.hourlyRate);
      return `
    Name:              ${this.Name} 
    Surname:           ${this.Surname} 
    Age:               ${this.Age} 
    Employment Satus:  ${this.employmentStatus} 
    Fixed Income:      R ${this.basicSalary.toFixed(2)}
    Hourly Rate:       ${this.hourlyRate.toFixed(2)}
    Hours Per Month:   ${this.hoursPerMonth}
    Hours Total:       R ${(
      parseFloat(this.hourlyRate) * parseFloat(this.hoursPerMonth)
    ).toFixed(2)} 
    Salary Total:      R ${(
      parseFloat(this.basicSalary.toFixed(2)) +
      parseFloat((this.hourlyRate * this.hoursPerMonth).toFixed(2))
    ).toFixed(2)}
    Target Reached:    ${this.getTargetAchieved}
    Hourly % Increase: ${this.percentageIncrease}%
    Updated Salary:    R ${(
      increasedHourlyRate * parseFloat(this.hoursPerMonth) +
      parseFloat(this.basicSalary.toFixed(2))
    ).toFixed(2)}`;
    } else {
      return `
    Name:              ${this.Name} 
    Surname:           ${this.Surname} 
    Age:               ${this.Age} 
    Employment Satus:  ${this.employmentStatus} 
    Fixed Income:      R ${this.basicSalary.toFixed(2)}
    Hourly Rate:       ${this.hourlyRate.toFixed(2)}
    Hours Per Month:   ${this.hoursPerMonth}
    Hours Total:       R ${(
      parseFloat(this.hourlyRate) * parseFloat(this.hoursPerMonth)
    ).toFixed(2)} 
    Salary Total:      R ${(
      parseFloat(this.basicSalary.toFixed(2)) +
      parseFloat((this.hourlyRate * this.hoursPerMonth).toFixed(2))
    ).toFixed(2)}
    Target Reached:    ${this.getTargetNotAchieved}`;
    }
  }
}

//Salaried Staff Class Instances or Objects thereof.
const newEmployee1 = new SalariedEmployees(
  "Ted",
  "Bundy",
  36,
  100,
  false,
  6000,
  "Employee - Salaried",
  100,
  10
);
const newEmployee2 = new SalariedEmployees(
  "Fred",
  "Flintstone",
  56,
  100,
  false,
  6000,
  "Employee - Salaried",
  70,
  10
);
//Printing output
console.table(newEmployee1.fixedMonthlySummary());
console.table(newEmployee2.fixedMonthlySummary());

//Hour Rate Staff Class Instances or Objects thereof
const employee3 = new HourlyPaidWorkers(
  "Jason",
  "Bourne",
  36,
  100,
  false,
  35,
  130,
  "Worker - Hourly Wage",
  100,
  50
);
const employee4 = new HourlyPaidWorkers(
  "Ramm",
  "Stein",
  48,
  100,
  false,
  35,
  120,
  "Worker - Hourly Wage",
  74,
  50
);
//Printing output
console.log(employee3.hourlyMonthlySummary());
console.log(employee4.hourlyMonthlySummary());

//Hybrid Employee Staff Class Instances or Objects thereof
const employee5 = new HybridEmployees(
  "Joe",
  "Bonamassa",
  43,
  100,
  false,
  5500,
  44,
  90,
  "Employee - Hybrid",
  100,
  20
);
const employee6 = new HybridEmployees(
  "Jack",
  "Black",
  56,
  100,
  false,
  7000,
  43,
  68,
  "Employee - Hybid",
  87,
  20
);
//Printing output
console.log(employee5.hybridPayMonthlySummary());
console.log(employee6.hybridPayMonthlySummary());
//End