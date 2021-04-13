// import Employee
const Employee = require('../lib/Employee');

// describe orangizes all the tests on Employee
describe('Employee Class', () => {
    describe('initialization', () => {
        test('should create an object with a name, id, and email if provided valid arguments', () => {
            const employee = new Employee('Kelly', 219, 'klvaden@gmail.com');
            expect(employee.name).toEqual('Kelly');
            expect(employee.id).toEqual(219);
            expect(employee.email).toEqual('klvaden@gmail.com');
        });

        test('should throw an error if provided no arguments', () => {
        });

        test('should throw an error if not provided a name', () => {
        });

        test('should throw an error if not provided an id', () => {
        });

        test('should throw an error if not provided an email', () => {
        });

        test('should throw an error if name is not a string', () => {
        });

        test('should throw an error if email is not a string', () => {
        });

        test('should throw an error if id is not a number', () => {
        });

        test('should throw an error if id is less than zero', () => {
        });
    });

    describe('getName', () => {
        test('should return the object name property as a string', () => {
        });
    });

    describe('getId', () => {
        test('should return the object id property as a string', () => {
        });
    });

    describe('getEmail', () => {
        test('should return the object email property as a string', () => {
        });
    });

    describe('getRole', () => {
        test('should return Employee as a string', () => {
        });
    });

});