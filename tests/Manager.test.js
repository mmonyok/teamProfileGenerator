const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("officeNumber", () => {
        it("should return an object containing an 'officeNumber' property when called with the 'new' keyword.",
        () => {
            const obj = new Manager();

            expect('officeNumber' in obj).toEqual(true);
        });
    });
});