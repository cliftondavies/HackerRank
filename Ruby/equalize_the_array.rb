# https://www.hackerrank.com/challenges/equality-in-a-array/problem

def equalizeArray(arr)
  occurences = arr.reduce(Hash.new(0)) do |result, integer|
    result[integer] += 1
    result
  end
  arr.size - (occurences.max_by { |_k, v| v })[1]
end
