const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Class Creation", () => {
        it("should create a new object from the Employee class",
            () => {
                // Act
                const obj = new Employee('Melody', 17, 'monyokwebdev@gmail.com');

                // Assert
                expect(obj).toBeInstanceOf(Employee);
            });
    });

    describe("Properties", () => {
        it("should return an object containing a 'name' property when called with the 'new' keyword.",
            () => {
                // Act
                const obj = new Employee('Melody', 17, 'monyokwebdev@gmail.com');

                // Assert
                expect(obj).toHaveProperty('name');
            });

        it("should return an object containing a 'id' property when called with the 'new' keyword.",
            () => {
                // Act
                const obj = new Employee('Melody', 17, 'monyokwebdev@gmail.com');

                // Assert
                expect(obj).toHaveProperty('id');
            });

        it("should return an object containing a 'email' property when called with the 'new' keyword.",
            () => {
                // Act
                const obj = new Employee('Melody', 17, 'monyokwebdev@gmail.com');

                // Assert
                expect(obj).toHaveProperty('email');
            });
    });

    describe("Fields", () => {
        it("should take the parameters entered and the first parameter should equal the first constructor field.", () => {
            // Act
            const obj = new Employee('Melody', 17, 'monyokwebdev@gmail.com');

            // Assert
            expect(obj.name).toBe("Melody");
        });

        it("should take the parameters entered and the second parameter should equal the second constructor field.", () => {
            // Act
            const obj = new Employee('Melody', 17, 'monyokwebdev@gmail.com');

            // Assert
            expect(obj.id).toBe(17);
        });

        it("should take the parameters entered and the third parameter should equal the third constructor field.", () => {
            // Act
            const obj = new Employee('Melody', 17, 'monyokwebdev@gmail.com');

            // Assert
            expect(obj.email).toBe("monyokwebdev@gmail.com");
        });
    });

    describe("Methods", () => {
        it("should have the getName function return the Employee's name when called.", () => {
            // Arrange
            const obj = new Employee('Melody', 17, 'monyokwebdev@gmail.com');

            // Act
            const test = `Hello, my name is ${obj.getName()}.`;

            // Assert
            expect(obj.getName()).toBe(obj.name);
        });

        it("should have the getId function return the Employee's ID when called.", () => {
            // Arrange
            const obj = new Employee('Melody', 17, 'monyokwebdev@gmail.com');

            // Act
            const test = `Hello, my ID is ${obj.getId()}.`;

            // Assert
            expect(obj.getId()).toBe(obj.id);
        });

        it("should have the getEmail function return the Employee's email when called.", () => {
            // Arrange
            const obj = new Employee('Melody', 17, 'monyokwebdev@gmail.com');

            // Act
            const test = `Hello, my email is ${obj.getEmail()}.`;

            // Assert
            expect(obj.getEmail()).toBe(obj.email);
        });

        it("should have the getRole function return the Employee's role when called.", () => {
            // Arrange
            const obj = new Employee('Melody', 17, 'monyokwebdev@gmail.com');

            // Act
            const test = `Hello, my role is ${obj.getRole()}.`;

            // Assert
            expect(obj.getRole()).toBe('Employee');
        });
    });
});