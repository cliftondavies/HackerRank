# https://www.hackerrank.com/challenges/find-digits/problem

def findDigits(n)
  # problem domain: numeric
  # input: integer
  # store/track: digits
  # process/algorithm: divide integer by each digit. Add one to number of divisors if remainder equals 0. return number of divisors.
  # output: number of digits in n that are divisors of n
  digits = n.to_s.gsub('0', '').chars
  digits.inject(0) { |total, digit| n % digit.to_i == 0 ? total + 1 : total}
end
