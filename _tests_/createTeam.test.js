// const CreateTeam = require('../lib/createTeam');
// const inquirer = require('inquirer');

// jest.mock('inquirer')

// describe("CreateTeam", () => {
//     it("should create an empty object", () => {
//         //arrange
//         const team = new CreateTeam;
//         //const x = {}
//         //act
//         //assert
//         expect(team.team).toEqual({})
//     })
//     describe("createManager", () => {
//         it('should add a Manager to the team object', () => {
//             // Arrange
//             const testTeam = new CreateTeam;
//             // Act
//             testTeam.createManager.inquirer.prompt.mockReturnValue(
//                 answers = {
//                     name : "John",
//                     id : "1089673",
//                     email : "test@testing.com",
//                     officeNumber : "2418"
//                 }
//             )
//             // Assert
//             expect(testTeam.team.manager).resolves("John");
//         })
//     })
// })