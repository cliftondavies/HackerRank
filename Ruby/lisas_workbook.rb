# https://www.hackerrank.com/challenges/lisa-workbook/problem

def workbook(_n, k, arr)
  page_number = 1
  problem_number = 1
  special_problems = 0
  problems_per_page = 1
  
  arr.each do |no_of_problems|

    while problem_number <= no_of_problems
      if problems_per_page <= k
        special_problems += 1 if problem_number == page_number
        problem_number += 1
        problems_per_page += 1
      else
        page_number += 1
        problems_per_page = 1
      end
    end
    
    page_number += 1
    problem_number = 1
    problems_per_page = 1
  end
  
  special_problems
end
