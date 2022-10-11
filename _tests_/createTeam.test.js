const CreateTeam = require('../lib/createTeam');
const inquirer = require('inquirer');

jest.mock('inquirer')

describe("CreateTeam", () => {
    it("should create an empty object", () => {
        //arrange
        const team = new CreateTeam;
        //const x = {}
        //act
        //assert
        expect(team.team).toEqual({})
    })
    // describe("createManager", () => {
    //     it('should call inquirer with ', () => {
    //         // Arrange

    //         // Act
    //         // Assert
    //         expect(employee1.name).toBe("John");
    //     })
    // })
})