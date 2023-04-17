import Validator from '../Validator'

test.each([
    ['all is OK', 'Tes123t_N-ame', true],
    ['more than 3 numbers', 'Tes1234t_N-ame', false],
    ['number at the beginning', '1Tes134t_N-ame', false],
    ['number at the end', 'Tes134t_N-ame5', false],
    ['wrong character', 'Tes134t_N$-ame5', false],
])('Test: %s', (_, name, expected) => {
    const obj = new Validator(name)
    expect(obj.validateUsername()).toBe(expected)
})

test.each([
    ['convert number', 'Test Name', '8 (927) 000-00-00', '+79270000000'],
    ['convert number', 'Test Name', '+7 960 000 00 00', '+79600000000'],
    ['convert number', 'Test Name', '+86 000 000 0000', '+860000000000'],
])('Test: %s', (_, name, phoneNumber, expected) => {
    const obj = new Validator(name, phoneNumber)
    expect(obj.convertPhoneNumber()).toBe(expected)
})
