// import Intern
const Intern = require('../lib/Intern');

// describe orangizes all the tests on Intern
describe('Intern Class', () => {
    describe('initialization', () => {
        test('should create an object with a name, id, email, and school if provided valid arguments', () => {
            const Intern = new Intern('George', 123, 'george@fakemail.com', 'Hogwarts');
            expect(Intern.name).toEqual('George');
            expect(Intern.id).toEqual(123);
            expect(Intern.email).toEqual('george@fakemail.com');
            expect(Intern.school).toEqual('Hogwarts');
        });

        test('should throw an error if provided no arguments', () => {
            const cb = () => new Intern();
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if not provided an id', () => {
            const cb = () => new Intern('George');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if not provided an email', () => {
            const cb = () => new Intern('George', 123);
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if not provided a school', () => {
            const cb = () => new Intern('George', 123, 'george@fakemail.com');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if name is not a string', () => {
            const cb = () => new Intern(1987, 123, 'george@fakemail.com', 'Hogwarts');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if email does not include @', () => {
            const cb = () => new Intern('George', 123, 'georgefakemail.com', 'Hogwarts');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if email does not include .', () => {
            const cb = () => new Intern('George', 123, 'george@fakemail', 'Hogwarts');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if email is not a string', () => {
            const cb = () => new Intern('George', 123, 1987, 'Hogwarts');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if id is not a number', () => {
            const cb = () => new Intern('George', 'two', 'george@fakemail.com', 'Hogwarts');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if id is less than zero', () => {
            const cb = () => new Intern('George', -123, 'george@fakemail.com', 'Hogwarts');
            expect(cb).toThrowError('parameter');
        });
    });

    describe('getName', () => {
        test('should return the object name property as a string', () => {
            const Intern = new Intern('George', 123, 'george@fakemail.com', 'Hogwarts');
            expect(Intern.getName()).toEqual('George');
        });
    });

    describe('getId', () => {
        test('should return the object id property as a string', () => {
            const Intern = new Intern('George', 123, 'george@fakemail.com', 'Hogwarts');
            expect(Intern.getId()).toEqual(123);
        });
    });

    describe('getEmail', () => {
        test('should return the object email property as a string', () => {
            const Intern = new Intern('George', 123, 'george@fakemail.com', 'Hogwarts');
            expect(Intern.getEmail()).toEqual('george@fakemail.com');
        });
    });

    describe('getSchool', () => {
        test('should return the object school property as a string', () => {
            const Intern = new Intern('George', 123, 'george@fakemail.com', 'Hogwarts');
            expect(Intern.getGitHub()).toEqual('Hogwarts');
        });
    });

    describe('getRole', () => {
        test('should return Intern as a string', () => {
            const Intern = new Intern('George', 123, 'george@fakemail.com', 'Hogwarts');
            expect(Intern.getRole()).toEqual('Intern');
        });
    });

});