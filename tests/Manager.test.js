const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Class Creation", () => {
        it("should create a new object from the Manager class",
            () => {
                // Arrange
                const name = "Melody";
                const id = 17;
                const email = "melody@gmail.com";
                const officeNumber = 666;

                // Act
                const obj = new Manager(name, id, email, officeNumber);

                // Assert
                expect(obj).toBeInstanceOf(Manager);
            });
    });

    describe("Properties", () => {
        it("should return an object containing a 'name' property when called with the 'new' keyword.",
            () => {
                // Arrange
                const name = "Melody";
                const id = 17;
                const email = "melody@gmail.com";
                const officeNumber = 666;

                // Act
                const obj = new Manager(name, id, email, officeNumber);

                // Assert
                expect(obj).toHaveProperty('name');
            });

        it("should return an object containing an 'id' property when called with the 'new' keyword.",
            () => {
                // Arrange
                const name = "Melody";
                const id = 17;
                const email = "melody@gmail.com";
                const officeNumber = 666;

                // Act
                const obj = new Manager(name, id, email, officeNumber);

                // Assert
                expect(obj).toHaveProperty('id');
            });

        it("should return an object containing an 'email' property when called with the 'new' keyword.",
            () => {
                // Arrange
                const name = "Melody";
                const id = 17;
                const email = "melody@gmail.com";
                const officeNumber = 666;

                // Act
                const obj = new Manager(name, id, email, officeNumber);

                // Assert
                expect(obj).toHaveProperty('email');
            });

        it("should return an object containing an 'officeNumberber' property when called with the 'new' keyword.",
            () => {
                // Arrange
                const name = "Melody";
                const id = 17;
                const email = "melody@gmail.com";
                const officeNumber = 666;

                // Act
                const obj = new Manager(name, id, email, officeNumber);

                // Assert
                expect(obj).toHaveProperty('officeNumber');
            });
    });

    describe("Fields", () => {
        it("should take the parameters entered and the first parameter should equal the first constructor field.", () => {
            // Arrange
            const name = "Melody";
            const id = 17;
            const email = "melody@gmail.com";
            const officeNumber = 666;

            // Act
            const obj = new Employee(name, id, email, officeNumber);

            // Assert
            expect(obj.name).toBe("Melody");
        });

        it("should take the parameters entered and the second parameter should equal the second constructor field.", () => {
            // Arrange
            const name = "Melody";
            const id = 17;
            const email = "melody@gmail.com";
            const officeNumber = 666;

            // Act
            const obj = new Employee(name, id, email, officeNumber);

            // Assert
            expect(obj.id).toBe(17);
        });

        it("should take the parameters entered and the third parameter should equal the third constructor field.", () => {
            // Arrange
            const name = "Melody";
            const id = 17;
            const email = "melody@gmail.com";
            const officeNumber = 666;

            // Act
            const obj = new Employee(name, id, email, officeNumber);

            // Assert
            expect(obj.email).toBe("melody@gmail.com");
        });

        it("should take the parameters entered and the third parameter should equal the third constructor field.", () => {
            // Arrange
            const name = "Melody";
            const id = 17;
            const email = "melody@gmail.com";
            const officeNumber = 666;

            // Act
            const obj = new Employee(name, id, email, officeNumber);

            // Assert
            expect(obj.officeNumber).toBe(666);
        });
    });

    describe("Methods", () => {
        it("should have the getName function return the Employee name when called.", () => {
            // Arrange
            const name = "Melody";
            const id = 17;
            const email = "melody@gmail.com";
            const obj = new Employee(name, id, email);

            // Act
            const test = `Hello, my name is ${obj.getName()}.`;

            // Assert
            expect(obj.getName()).toBe(obj.name);
        });

        it("should have the getId function return the Employee ID when called.", () => {
            // Arrange
            const name = "Melody";
            const id = 17;
            const email = "melody@gmail.com";
            const obj = new Employee(name, id, email);

            // Act
            const test = `Hello, my ID is ${obj.getId()}.`;

            // Assert
            expect(obj.getId()).toBe(obj.id);
        });

        it("should have the getEmail function return the Employee email when called.", () => {
            // Arrange
            const name = "Melody";
            const id = 17;
            const email = "melody@gmail.com";
            const obj = new Employee(name, id, email);

            // Act
            const test = `Hello, my email is ${obj.getEmail()}.`;

            // Assert
            expect(obj.getEmail()).toBe(obj.email);
        });

        it("should have the getRole function return the Employee role when called.", () => {
            // Arrange
            const name = "Melody";
            const id = 17;
            const email = "melody@gmail.com";
            const obj = new Employee(name, id, email);

            // Act
            const test = `Hello, my role is ${obj.getRole()}.`;

            // Assert
            expect(obj.getRole()).toBe('Employee');
        });

        it("should have the getOfficeNumber function return the Employee role when called.", () => {
            // Arrange
            const name = "Melody";
            const id = 17;
            const email = "melody@gmail.com";
            const obj = new Employee(name, id, email);

            // Act
            const test = `Hello, my role is ${obj.getRole()}.`;

            // Assert
            expect(obj.getRole()).toBe('Employee');
        });
    });
});