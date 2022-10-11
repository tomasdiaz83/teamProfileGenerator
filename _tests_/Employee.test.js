const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("Employee properties", () => {
        it('All employees should have a name', () => {
            // Arrange
            const employee1 = new Employee("John", "1089673", "email@here.com")
            // Act
            // Assert
            expect(employee1.name).toBe("John");
        })
        it('All employees should have an id', () => {
            // Arrange
            const employee1 = new Employee("John", "1089673", "email@here.com")
            // Act
            // Assert
            expect(employee1.id).toBe("1089673");
        })
        it('All employees should have an email', () => {
            // Arrange
            const employee1 = new Employee("John", "1089673", "email@here.com")
            // Act
            // Assert
            expect(employee1.email).toBe("email@here.com");
        })
    })

    describe("Employee methods", () => {
        it('get the name of each employee', () => {
            //Arrange
            const employee1 = new Employee("John", "1089673", "email@here.com")
            //Act
            const name = employee1.getName();
            //Assert
            expect(name).toBe('John');
        })

        it('get the ID of each employee', () => {
            //Arrange
            const employee1 = new Employee("John", "1089673", "email@here.com")
            //Act
            const id = employee1.getId();
            //Assert
            expect(id).toBe('1089673');
        })

        it('get the email of each employee', () => {
            //Arrange
            const employee1 = new Employee("John", "1089673", "email@here.com")
            //Act
            const email = employee1.getEmail();
            //Assert
            expect(email).toBe('email@here.com');
        })

        it('get the role of each employee', () => {
            //Arrange
            const employee1 = new Employee("John", "1089673", "email@here.com")
            //Act
            const role = employee1.getRole();
            //Assert
            expect(role).toBe('Employee');
        })
    })
});