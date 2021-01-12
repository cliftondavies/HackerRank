// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
    const hr = { '01': '13', '02': '14', '03': '15', '04': '16', '05': '17', '06': '18', '07': '19', '08': '20', '09': '21', '10': '22', '11': '23', '12': '00' };

    if ((s.startsWith('12') && s.includes('A')) || (!s.startsWith('12') && s.includes('P'))) {
        const r = s.replace(/\w{2}/, (h) => hr[h]);
        return r.slice(0, 8);
    }
    return s.slice(0, 8);
}
