// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    return grades.map(g => (g < 38) ? g : (g % 5 > 2) ? g + 5 - g % 5 : g);
}
