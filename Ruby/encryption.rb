# https://www.hackerrank.com/challenges/encryption/problem

def encryption(s)
  length_root = Math.sqrt(s.size)
  rows = length_root.floor
  columns = length_root.ceil
  
  while rows * columns < s.size
    rows += 1
  end
  
  result = string_to_array(s, columns).transpose
  result.map { |array| array.join }.join(' ').gsub(/\s{2,}/, ' ')
end

def string_to_array(s, columns)
  i = 0
  j = columns - 1
  result = []
  
  while i < s.size
    if j < s.size
      result << s[i..j]
    else
      short_string = s[i..-1]
      result << short_string.ljust(columns, ' ')
    end
    i = j + 1
    j = j + columns
  end
  
  result.map { |string| string.split('') }
end
