// import Employee
const Employee = require('../lib/Employee');

// describe orangizes all the tests on Employee
describe('Employee Class', () => {
    describe('initialization', () => {
        test('should create an object with a name, id, and email if provided valid arguments', () => {
            const employee = new Employee('George', 123, 'george@fakemail.com');
            expect(employee.name).toEqual('George');
            expect(employee.id).toEqual(123);
            expect(employee.email).toEqual('george@fakemail.com');
        });

        test('should throw an error if provided no arguments', () => {
            const cb = () => new Employee();
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if not provided an id', () => {
            const cb = () => new Employee('George');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if not provided an email', () => {
            const cb = () => new Employee('George', 123);
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if name is not a string', () => {
            const cb = () => new Employee(1987, 123, 'george@fakemail.com');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if email does not include @', () => {
            const cb = () => new Employee('George', 123, 'georgefakemail.com');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if email does not include .', () => {
            const cb = () => new Employee('George', 123, 'george@fakemail');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if email is not a string', () => {
            const cb = () => new Employee('George', 123, 1987);
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if id is not a number', () => {
            const cb = () => new Employee('George', 'two', 'george@fakemail.com');
            expect(cb).toThrowError('parameter');
        });

        test('should throw an error if id is less than zero', () => {
            const cb = () => new Employee('George', -123, 'george@fakemail.com');
            expect(cb).toThrowError('parameter');
        });
    });

    describe('getName', () => {
        test('should return the object name property as a string', () => {
            const employee = new Employee('George', 123, 'george@fakemail.com');
            expect(employee.getName()).toEqual('George');
        });
    });

    describe('getId', () => {
        test('should return the object id property as a string', () => {
            const employee = new Employee('George', 123, 'george@fakemail.com');
            expect(employee.getId()).toEqual(123);
        });
    });

    describe('getEmail', () => {
        test('should return the object email property as a string', () => {
            const employee = new Employee('George', 123, 'george@fakemail.com');
            expect(employee.getEmail()).toEqual('george@fakemail.com');
        });
    });

    describe('getRole', () => {
        test('should return Employee as a string', () => {
            const employee = new Employee('George', 123, 'george@fakemail.com');
            expect(employee.getRole()).toEqual('Employee');
        });
    });

});