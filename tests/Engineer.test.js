const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("test1", () => {
        it("should return an object containing a 'github' property when called with the 'new' keyword.",
        () => {
            const obj = new Engineer();

            expect('github' in obj).toEqual(true);
        });
    });
});