const Manager = require("../lib/Manager");

describe("Manager class", () => {
    it('There should be only one manager', () => {
        
    })
    describe("Manager properties", () => {
        it('Manager should have a name', () => {
            // Arrange
            const manager = new Manager ("John", "1089673", "email@here.com", "1337");
            // Act
            // Assert
            expect(manager.name).toBe("John");
        })
        it('Manager should have an id', () => {
            // Arrange
            const manager = new Manager ("John", "1089673", "email@here.com", "1337");
            // Act
            // Assert
            expect(manager.id).toBe("1089673");
        })
        it('Manager should have an email', () => {
            // Arrange
            const manager = new Manager ("John", "1089673", "email@here.com", "1337");
            // Act
            // Assert
            expect(manager.email).toBe("email@here.com");
        })
        it('Manager should have an office number', () => {
            //Arrange
            const manager = new Manager ("John", "1089673", "email@here.com", "1337");
            //Act
            //Assert
            expect(manager.officeNumber).toBe("1337");
        })
    })

    describe("Employee methods", () => {
        it('get the name of manager', () => {
            //Arrange
            const manager = new Manager ("John", "1089673", "email@here.com", "1337");
            //Act
            const name = manager.getName();
            //Assert
            expect(name).toBe('John');
        })

        it('get the ID of manager', () => {
            //Arrange
            const manager = new Manager ("John", "1089673", "email@here.com", "1337");
            //Act
            const id = manager.getId();
            //Assert
            expect(id).toBe('1089673');
        })

        it('get the email of manager', () => {
            //Arrange
            const manager = new Manager ("John", "1089673", "email@here.com", "1337");
            //Act
            const email = manager.getEmail();
            //Assert
            expect(email).toBe('email@here.com');
        })

        it('get the role of manager', () => {
            //Arrange
            const manager = new Manager ("John", "1089673", "email@here.com", "1337");
            //Act
            const role = manager.getRole();
            //Assert
            expect(role).toBe('Manager');
        })
    })
});