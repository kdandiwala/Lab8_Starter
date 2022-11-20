// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber
test('isPhoneNumber - 1T', () => {
    expect(functions.isPhoneNumber('(636) 234-0060')).toBe(true);
});
test('isPhoneNumber - 2T', () => {
    expect(functions.isPhoneNumber('353-532-9234')).toBe(true);
});
test('isPhoneNumber - 3F', () => {
    expect(functions.isPhoneNumber('3B4-492-249F')).toBe(false);
});
test('isPhoneNumber - 4F', () => {
    expect(functions.isPhoneNumber('111111111111111')).toBe(false);
});

//isEmail
test('isEmail - 1T', () => {
    expect(functions.isEmail('kdandiwala@ucsd.edu')).toBe(true);
});
test('isEmail - 2T', () => {
    expect(functions.isEmail('tester@tester.gov')).toBe(true);
});
test('isEmail - 3F', () => {
    expect(functions.isEmail('tester@ucsd')).toBe(false);
});
test('isEmail - 4F', () => {
    expect(functions.isEmail('gmail.com@gmail.com')).toBe(false);
});

//isStrongPassword
test('isStrongPassword - 1T', () => {
    expect(functions.isStrongPassword('A1f_jep2iejr')).toBe(true);
});
test('isStrongPassword - 2T', () => {
    expect(functions.isStrongPassword('g_1_3_ddd_g99gd')).toBe(true);
});
test('isStrongPassword - 3F', () => {
    expect(functions.isStrongPassword('1Apddc44')).toBe(false);
});
test('isStrongPassword - 4F', () => {
    expect(functions.isStrongPassword('00')).toBe(false);
});

//isDate
test('isDate - 1T', () => {
    expect(functions.isDate('11/19/2022')).toBe(true);
});
test('isDate - 2T', () => {
    expect(functions.isDate('1/1/0001')).toBe(true);
});
test('isDate - 3F', () => {
    expect(functions.isDate('11-19-22')).toBe(false);
});
test('isDate - 4F', () => {
    expect(functions.isDate('November 19th, 2022')).toBe(false);
});

//isHexColor
test('isHexColor - 1T', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});
test('isHexColor - 2T', () => {
    expect(functions.isHexColor('#FF0000')).toBe(true);
});
test('isHexColor - 3F', () => {
    expect(functions.isHexColor('000FF')).toBe(false);
});
test('isHexColor - 4F', () => {
    expect(functions.isHexColor('TEST')).toBe(false);
});