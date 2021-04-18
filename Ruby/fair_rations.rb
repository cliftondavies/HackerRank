# https://www.hackerrank.com/challenges/fair-rations/problem?isFullScreen=true

def fairRations(b)
  minimum_loaves = 0
  
  b.each_with_index do |loaves, i|
    break if i == b.size - 1
    if (loaves.odd? && b[i + 1].even? && i != b.size - 2) ||
       (loaves.odd? && b[i + 1].odd?)
      b[i] += 1
      b[i + 1] += 1
      minimum_loaves += 2
    end
  end
  
  b.all?(&:even?) ? minimum_loaves : 'NO'
end
