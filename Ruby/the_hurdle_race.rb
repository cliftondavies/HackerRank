# https://www.hackerrank.com/challenges/the-hurdle-race/problem

def hurdleRace(k, height)
  # problem domain = arrays
  # inputs = height the character can jump and heights of hurdles
  # store/track = max hurdle height
  # process/algorithm: check max_hurdle_height against jump height. return 0 if jump height > max_hurdle_height. return max_hurdle_height - jump height if otherwise.
  # output = doses of the potion the character take
  max_hurdle_height = height.max
  return 0 if k >= max_hurdle_height
  max_hurdle_height - k
end
