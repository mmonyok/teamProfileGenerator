const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("test1", () => {
        it("should return an object containing a 'school' property when called with the 'new' keyword.",
        () => {
            const obj = new Intern();

            expect('school' in obj).toEqual(true);
        });
    });
});