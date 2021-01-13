# https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

def divisibleSumPairs(n, k, ar)
  # problem domain = integers and arrays
  # inputs: array length, divisor, array of n integers
  # store/track = index
  # process/algorithm = add each integer with all following integers, increment number of pairs if the total is divisible by k, return pairs when the end of the integer array is reached.
  # output = print the number of (i,j) pairs where i < j and a[i] + a[j] is evenly divisible by k
  # constraints = 2 <= n <= 100, 1 <= k <= 100, 1 <= ar[i] <= 100
  pairs = 0
  integers = ar.clone
  integers.each_with_index do |first_int, i|
    integers[i + 1..-1].each do |second_int|
      pairs += 1 if (first_int + second_int) % k == 0
    end
  end
  pairs
end
