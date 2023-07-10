 export function getMonth (n) {
    let m = ''
    if (Number.isInteger(n)) {
        if (n < 1 || n > 12) { m = 'enter month number 1 to 12' }
        if (n === 1) { m = 'january' };
        if (n === 2) { m = 'february' };
        if (n === 3) { m = 'march' };
        if (n === 4) { m = 'april' };
        if (n === 5) { m = 'may' };
        if (n === 6) { m = 'june' };
        if (n === 7) { m = 'july' };
        if (n === 8) { m = 'august' };
        if (n === 9) { m = 'september' };
        if (n === 10) { m = 'october' };
        if (n === 11) { m = 'november' };
        if (n === 12) { m = 'december' };
    }
    else {m = 'enter integer number 1 to 12'}
    console.log('month =', m)
    return m
}
//getMonth(55)

