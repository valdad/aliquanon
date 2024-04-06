interface Employee {
  // Optional department property
  dept?: string;

  // Constructor to initialize the Employee object
  constructor(dept?: string) {
    this.dept = dept;
  }

  // Method to get the department name
  getDepartment(): string | undefined {
    return this.dept;
  }

  // Method to set the department name
  setDepartment(department: string): void {
    this.dept = department;
  }
}

// Usage
const employee = new Employee('Engineering');
console.log(employee.getDepartment()); // Output: Engineering
employee.setDepartment('Marketing');
console.log(employee.getDepartment()); // Output: Marketing
