import Engineer from "../lib/Engineer"

describe("Engineer class", () => {
    describe("Engineer properties", () => {
        it('Engineer should have a name', () => {
            // Arrange
            const engineer = new Engineer ("John", "1089673", "email@here.com", "tester83");
            // Act
            // Assert
            expect(engineer.name).toBe("John");
        })
        it('Engineer should have an id', () => {
            // Arrange
            const engineer = new Engineer ("John", "1089673", "email@here.com", "tester83");
            // Act
            // Assert
            expect(engineer.id).toBe("1089673");
        })
        it('Engineer should have an email', () => {
            // Arrange
            const engineer = new Engineer ("John", "1089673", "email@here.com", "tester83");
            // Act
            // Assert
            expect(engineer.email).toBe("email@here.com");
        })
        it('Engineer should have an office number', () => {
            //Arrange
            const engineer = new Engineer ("John", "1089673", "email@here.com", "tester83");
            //Act
            //Assert
            expect(engineer.gitHub).toBe("tester83");
        })
    })

    describe("Employee methods", () => {
        it('get the name of engineer', () => {
            //Arrange
            const engineer = new Engineer ("John", "1089673", "email@here.com", "tester83");
            //Act
            const name = engineer.getName();
            //Assert
            expect(name).toBe('John');
        })

        it('get the ID of engineer', () => {
            //Arrange
            const engineer = new Engineer ("John", "1089673", "email@here.com", "tester83");
            //Act
            const id = engineer.getId();
            //Assert
            expect(id).toBe('1089673');
        })

        it('get the email of engineer', () => {
            //Arrange
            const engineer = new Engineer ("John", "1089673", "email@here.com", "tester83");
            //Act
            const email = engineer.getEmail();
            //Assert
            expect(email).toBe('email@here.com');
        })

        it('get the role of engineer', () => {
            //Arrange
            const engineer = new Engineer ("John", "1089673", "email@here.com", "tester83");
            //Act
            const role = engineer.getRole();
            //Assert
            expect(role).toBe('Engineer');
        })

        it('get the gitHub of engineer', () => {
            //Arrange
            const engineer = new Engineer ("John", "1089673", "email@here.com", "tester83");
            //Act
            const gitHub = engineer.getGitHub();
            //Assert
            expect(gitHub).toBe("tester83");
        })
    })
});