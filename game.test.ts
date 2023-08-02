const { it, expect } = require("@jest/globals");
const { getPairs } = require('./utils')


it("should create different arrays because of random function", () => {
    const pairs = 3;
    const expected = getPairs(pairs);
    const expected2 = getPairs(pairs);
    expect(expected).not.toEqual(expected2);
});
