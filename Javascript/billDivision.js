// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
    let totalCharge = bill.reduce((a, c) => a + c, 0);
    let annaBill = (totalCharge - bill[k]) / 2;

    if(annaBill === b) {
        console.log("Bon Appetit");
    }
    else if(b === totalCharge/2) {
        console.log(b - annaBill);
    }
}
