# https://www.hackerrank.com/challenges/find-the-median/problem

def findMedian(arr)
  # problem domain = numbers
  # input = a list of unsorted numbers with an odd number of elements
  # store/track = copy of array and midpoint
  # process/algorithm = sort list of numbers. return number at mid position
  # output = integer representing the median
  sorted_list = arr.clone.map(&:clone).sort
  midpoint = sorted_list.size / 2
  sorted_list[midpoint]
end
