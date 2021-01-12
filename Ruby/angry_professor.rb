# https://www.hackerrank.com/challenges/angry-professor/problem

def angryProfessor(k, a)
  # get number of students that are on time from 'a'
  # compare it with the attendance threshold 'k'
  # return 'NO', not cancelled, if number of students >= threshold
  # else return 'YES', class cancelled
  a.select { |time| time <= 0 }.size >= k ? 'NO' : 'YES'
end
