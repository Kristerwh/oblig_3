const calendar = require("../script/functions")

test("Dividable by 4, but not 100", () => {
    expect(calendar.isLeapYear(4)).toBe(true);
    expect(calendar.isLeapYear(8)).toBe(true);
    expect(calendar.isLeapYear(20)).toBe(true);
    expect(calendar.isLeapYear(40)).toBe(true);
    expect(calendar.isLeapYear(404)).toBe(true);
});
test("Dividable by 400", () => {
    expect(calendar.isLeapYear(400)).toBe(true);
    expect(calendar.isLeapYear(800)).toBe(true);
    expect(calendar.isLeapYear(1600)).toBe(true);
    expect(calendar.isLeapYear(2000)).toBe(true);
    expect(calendar.isLeapYear(4000)).toBe(true);
});

test("Not dividable by 4", () => {
    expect(calendar.isLeapYear(5)).toBe(false);
    expect(calendar.isLeapYear(9)).toBe(false);
    expect(calendar.isLeapYear(13)).toBe(false);
    expect(calendar.isLeapYear(999)).toBe(false);
    expect(calendar.isLeapYear(1999)).toBe(false);
});

test("Dividable by 100, but not 400", () => {
    expect(calendar.isLeapYear(100)).toBe(false);
    expect(calendar.isLeapYear(200)).toBe(false);
    expect(calendar.isLeapYear(300)).toBe(false);
    expect(calendar.isLeapYear(1700)).toBe(false);
    expect(calendar.isLeapYear(1800)).toBe(false);
});