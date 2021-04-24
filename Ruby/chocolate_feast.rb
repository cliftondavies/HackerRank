# https://www.hackerrank.com/challenges/chocolate-feast/problem

def chocolateFeast(n, c, m)
  total = n / c
  tradeable_wrappers = total
  free_chocolate = tradeable_wrappers / m
  extra_wrappers = tradeable_wrappers - (free_chocolate * m)
  
  while free_chocolate > 0
    total += free_chocolate
    tradeable_wrappers = free_chocolate + extra_wrappers
    free_chocolate = tradeable_wrappers / m
    extra_wrappers = tradeable_wrappers - (free_chocolate * m)
  end
  
  total
end
