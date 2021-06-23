const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Class Creation", () => {
        it("should create a new object from the Engineer class",
            () => {

                // Act
                const obj = new Engineer('Melody', 17, 'monyokwebdev@gmail.com', 'mmonyok');

                // Assert
                expect(obj).toBeInstanceOf(Engineer);
            });
    });

    describe("Properties", () => {
        it("should return an object containing a 'name' property when called with the 'new' keyword.",
            () => {
                // Act
                const obj = new Engineer('Melody', 17, 'monyokwebdev@gmail.com', 'mmonyok');

                // Assert
                expect(obj).toHaveProperty('name');
            });

        it("should return an object containing an 'id' property when called with the 'new' keyword.",
            () => {
                // Act
                const obj = new Engineer('Melody', 17, 'monyokwebdev@gmail.com', 'mmonyok');

                // Assert
                expect(obj).toHaveProperty('id');
            });

        it("should return an object containing an 'email' property when called with the 'new' keyword.",
            () => {
                // Act
                const obj = new Engineer('Melody', 17, 'monyokwebdev@gmail.com', 'mmonyok');

                // Assert
                expect(obj).toHaveProperty('email');
            });

        it("should return an object containing a 'github' property when called with the 'new' keyword.",
            () => {
                // Act
                const obj = new Engineer('Melody', 17, 'monyokwebdev@gmail.com', 'mmonyok');

                // Assert
                expect(obj).toHaveProperty('github');
            });
    });

    describe("Fields", () => {
        it("should take the parameters entered and the first parameter should equal the first constructor field.", () => {
            // Act
            const obj = new Engineer('Melody', 17, 'monyokwebdev@gmail.com', 'mmonyok');

            // Assert
            expect(obj.name).toBe("Melody");
        });

        it("should take the parameters entered and the second parameter should equal the second constructor field.", () => {
            // Act
            const obj = new Engineer('Melody', 17, 'monyokwebdev@gmail.com', 'mmonyok');

            // Assert
            expect(obj.id).toBe(17);
        });

        it("should take the parameters entered and the third parameter should equal the third constructor field.", () => {
            // Act
            const obj = new Engineer('Melody', 17, 'monyokwebdev@gmail.com', 'mmonyok');

            // Assert
            expect(obj.email).toBe("monyokwebdev@gmail.com");
        });

        it("should take the parameters entered and the fourth parameter should equal the fourth constructor field.", () => {
            // Act
            const obj = new Engineer('Melody', 17, 'monyokwebdev@gmail.com', 'mmonyok');

            // Assert
            expect(obj.github).toBe("mmonyok");
        });
    });

    describe("Methods", () => {
        it("should have the getName function return the Engineer's name when called.", () => {
            // Arrange
            const obj = new Engineer('Melody', 17, 'monyokwebdev@gmail.com', 'mmonyok');

            // Act
            const test = `Hello, my name is ${obj.getName()}.`;

            // Assert
            expect(obj.getName()).toBe(obj.name);
        });

        it("should have the getId function return the Engineer's ID when called.", () => {
            // Arrange
            const obj = new Engineer('Melody', 17, 'monyokwebdev@gmail.com', 'mmonyok');

            // Act
            const test = `Hello, my ID is ${obj.getId()}.`;

            // Assert
            expect(obj.getId()).toBe(obj.id);
        });

        it("should have the getEmail function return the Engineer's email when called.", () => {
            // Arrange
            const obj = new Engineer('Melody', 17, 'monyokwebdev@gmail.com', 'mmonyok');

            // Act
            const test = `Hello, my email is ${obj.getEmail()}.`;

            // Assert
            expect(obj.getEmail()).toBe(obj.email);
        });

        it("should have the getRole function return the Engineer's role when called.", () => {
            // Arrange
            const obj = new Engineer('Melody', 17, 'monyokwebdev@gmail.com', 'mmonyok');

            // Act
            const test = `Hello, my role is ${obj.getRole()}.`;

            // Assert
            expect(obj.getRole()).toBe('Engineer');
        });

        it("should have the getGithub function return the Engineer's GitHub username when called.", () => {
            // Arrange
            const obj = new Engineer('Melody', 17, 'monyokwebdev@gmail.com', 'mmonyok');

            // Act
            const test = `Hello, my GitHub username is ${obj.getGithub()}.`;

            // Assert
            expect(obj.getGithub()).toBe(obj.github);
        });
    });
});