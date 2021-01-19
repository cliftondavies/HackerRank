// https://www.hackerrank.com/challenges/game-of-thrones/problem

function gameOfThrones(s) {
  const word = s.split('');
  const occurrences = word.reduce((occurrences, letter) => {
    occurrences[letter] = occurrences[letter] ? occurrences[letter] + 1 : 1;
    return occurrences;
  }, {});
  const oddOccurrences = Object.values(occurrences).filter(num => (num % 2) !== 0);
  return (oddOccurrences.length > 1) ? "NO" : "YES";
}
