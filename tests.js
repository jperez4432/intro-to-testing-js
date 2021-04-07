// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
    it('should return "Hello, World!" when passed "true"', function () {
        expect(helloWorld(true)).toBe("Hello, World!");
    });
});

describe('addOne', function () {
    it('should be a defined function', function () {
        expect(typeof addOne).toBe("function");
    });
    it('should return a number when called', function () {
        expect(typeof addOne()).toBe("number");
    });
    it('should return the number 3 when passed the argument of the number 2', function () {
        expect(addOne(2)).toBe(3);
    });
    it('should return the number -43 when passed the argument  of the number -44', function () {
        expect(addOne(-44)).toBe(-43);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should be a string', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!" when passed "Jane"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when passed "Alex"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat" when passed "Pat"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return Hello, World! when passed "World"', function () {
    expect(sayHello()).toBe("Hello, World!")
    });
});