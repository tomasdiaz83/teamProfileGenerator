import Intern from "../lib/Intern"

describe("Intern class", () => {
    describe("Intern properties", () => {
        it('Intern should have a name', () => {
            // Arrange
            const intern = new Intern ("John", "1089673", "email@here.com", "UT CodeCamp");
            // Act
            // Assert
            expect(intern.name).toBe("John");
        })
        it('Intern should have an id', () => {
            // Arrange
            const intern = new Intern ("John", "1089673", "email@here.com", "UT CodeCamp");
            // Act
            // Assert
            expect(intern.id).toBe("1089673");
        })
        it('Intern should have an email', () => {
            // Arrange
            const intern = new Intern ("John", "1089673", "email@here.com", "UT CodeCamp");
            // Act
            // Assert
            expect(intern.email).toBe("email@here.com");
        })
        it('Intern should have an office number', () => {
            //Arrange
            const intern = new Intern ("John", "1089673", "email@here.com", "UT CodeCamp");
            //Act
            //Assert
            expect(intern.school).toBe("UT CodeCamp");
        })
    })

    describe("Employee methods", () => {
        it('get the name of intern', () => {
            //Arrange
            const intern = new Intern ("John", "1089673", "email@here.com", "UT CodeCamp");
            //Act
            const name = intern.getName();
            //Assert
            expect(name).toBe('John');
        })

        it('get the ID of intern', () => {
            //Arrange
            const intern = new Intern ("John", "1089673", "email@here.com", "UT CodeCamp");
            //Act
            const id = intern.getId();
            //Assert
            expect(id).toBe('1089673');
        })

        it('get the email of intern', () => {
            //Arrange
            const intern = new Intern ("John", "1089673", "email@here.com", "UT CodeCamp");
            //Act
            const email = intern.getEmail();
            //Assert
            expect(email).toBe('email@here.com');
        })

        it('get the role of intern', () => {
            //Arrange
            const intern = new Intern ("John", "1089673", "email@here.com", "UT CodeCamp");
            //Act
            const role = intern.getRole();
            //Assert
            expect(role).toBe('Intern');
        })

        it('get the school of intern', () => {
            //Arrange
            const intern = new Intern ("John", "1089673", "email@here.com", "UT CodeCamp");
            //Act
            const school = intern.getSchool();
            //Assert
            expect(school).toBe("UT CodeCamp");
        })
    })
});