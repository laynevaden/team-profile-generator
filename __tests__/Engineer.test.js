// import Engineer
const Engineer = require('../lib/Engineer');

// describe orangizes all the tests on Engineer
describe('Engineer Class', () => {
    describe('initialization', () => {
        test('should create an object with a name, id, email, and github username if provided valid arguments', () => {
            const engineer = new Engineer('George', 123, 'george@fakemail.com', 'george617');
            expect(engineer.name).toEqual('George');
            expect(engineer.id).toEqual(123);
            expect(engineer.email).toEqual('george@fakemail.com');
            expect(engineer.username).toEqual('george617');
        });

        test('should throw an error if provided no arguments', () => {
            const cb = () => new Engineer();
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if not provided an id', () => {
            const cb = () => new Engineer('George');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if not provided an email', () => {
            const cb = () => new Engineer('George', 123);
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if not provided a GitHub username', () => {
            const cb = () => new Engineer('George', 123, 'george@fakemail.com');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if name is not a string', () => {
            const cb = () => new Engineer(1987, 123, 'george@fakemail.com', 'george617');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if email does not include @', () => {
            const cb = () => new Engineer('George', 123, 'georgefakemail.com', 'george617');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if email does not include .', () => {
            const cb = () => new Engineer('George', 123, 'george@fakemail', 'george617');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if email is not a string', () => {
            const cb = () => new Engineer('George', 123, 1987, 'george617');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if id is not a number', () => {
            const cb = () => new Engineer('George', 'two', 'george@fakemail.com', 'george617');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if id is less than zero', () => {
            const cb = () => new Engineer('George', -123, 'george@fakemail.com', 'george617');
            expect(cb).toThrowError('parameter');
        });
    });

    describe('getName', () => {
        test('should return the object name property as a string', () => {
            const engineer = new Engineer('George', 123, 'george@fakemail.com', 'george617');
            expect(engineer.getName()).toEqual('George');
        });
    });

    describe('getId', () => {
        test('should return the object id property as a string', () => {
            const engineer = new Engineer('George', 123, 'george@fakemail.com', 'george617');
            expect(engineer.getId()).toEqual(123);
        });
    });

    describe('getEmail', () => {
        test('should return the object email property as a string', () => {
            const engineer = new Engineer('George', 123, 'george@fakemail.com', 'george617');
            expect(engineer.getEmail()).toEqual('george@fakemail.com');
        });
    });

    describe('getGithub', () => {
        test('should return the object GitHub username property as a string', () => {
            const engineer = new Engineer('George', 123, 'george@fakemail.com', 'george617');
            expect(engineer.getGithub()).toEqual('george617');
        });
    });

    describe('getRole', () => {
        test('should return Engineer as a string', () => {
            const engineer = new Engineer('George', 123, 'george@fakemail.com', 'george617');
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });

});