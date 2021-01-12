// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
    let A = Math.abs(x - z); //absolute distance of A from mouse
    let B = Math.abs(y - z); //absolute distance of B from mouse

    return (A > B) ? "Cat B" : (B > A) ? "Cat A" : "Mouse C";
}
