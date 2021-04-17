// import Manager
const Manager = require('../lib/Manager');

// describe orangizes all the tests on Manager
describe('Manager Class', () => {
    describe('initialization', () => {
        test('should create an object with a name, id, email, and phone number if provided valid arguments', () => {
            const Manager = new Manager('George', 123, 'george@fakemail.com', '617-123-4567');
            expect(Manager.name).toEqual('George');
            expect(Manager.id).toEqual(123);
            expect(Manager.email).toEqual('george@fakemail.com');
            expect(Manager.phone).toEqual('617-123-4567');
        });

        test('should throw an error if provided no arguments', () => {
            const cb = () => new Manager();
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if not provided an id', () => {
            const cb = () => new Manager('George');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if not provided an email', () => {
            const cb = () => new Manager('George', 123);
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if not provided a phone number', () => {
            const cb = () => new Manager('George', 123, 'george@fakemail.com');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if name is not a string', () => {
            const cb = () => new Manager(1987, 123, 'george@fakemail.com', '617-123-4567');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if email does not include @', () => {
            const cb = () => new Manager('George', 123, 'georgefakemail.com', '617-123-4567');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if email does not include .', () => {
            const cb = () => new Manager('George', 123, 'george@fakemail', '617-123-4567');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if email is not a string', () => {
            const cb = () => new Manager('George', 123, 1987, '617-123-4567');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if id is not a number', () => {
            const cb = () => new Manager('George', 'two', 'george@fakemail.com', '617-123-4567');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if id is less than zero', () => {
            const cb = () => new Manager('George', -123, 'george@fakemail.com', '617-123-4567');
            expect(cb).toThrowError('parameter');
        });
    });

    describe('getName', () => {
        test('should return the object name property as a string', () => {
            const Manager = new Manager('George', 123, 'george@fakemail.com', '617-123-4567');
            expect(Manager.getName()).toEqual('George');
        });
    });

    describe('getId', () => {
        test('should return the object id property as a string', () => {
            const Manager = new Manager('George', 123, 'george@fakemail.com', '617-123-4567');
            expect(Manager.getId()).toEqual(123);
        });
    });

    describe('getEmail', () => {
        test('should return the object email property as a string', () => {
            const Manager = new Manager('George', 123, 'george@fakemail.com', '617-123-4567');
            expect(Manager.getEmail()).toEqual('george@fakemail.com');
        });
    });

    describe('getPhone', () => {
        test('should return the object phone number property as a string', () => {
            const Manager = new Manager('George', 123, 'george@fakemail.com', '617-123-4567');
            expect(Manager.getPhone()).toEqual('617-123-4567');
        });
    });

    describe('getRole', () => {
        test('should return Manager as a string', () => {
            const Manager = new Manager('George', 123, 'george@fakemail.com', '617-123-4567');
            expect(Manager.getRole()).toEqual('Manager');
        });
    });

});