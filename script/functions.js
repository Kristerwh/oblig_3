function isLeapYear(number) {
    return number % 4 === 0 && number % 100 !== 0 || number % 400 === 0;
}

module.exports = {isLeapYear : isLeapYear};