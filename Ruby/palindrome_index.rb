# https://www.hackerrank.com/challenges/palindrome-index/problem

def palindromeIndex(s)
  l_index = 0
  r_index = s.size - 1
  attempt = 0
  char_index = []

  until l_index == r_index || l_index > r_index
    if s[l_index] != s[r_index] && attempt.zero?
      char_index << r_index
      r_index -= 1
      attempt += 1
    elsif !attempt.zero? && ((s[l_index] == s[r_index] && s[l_index + 1] != s[r_index - 1]) || (s[l_index] != s[r_index]))
      char_index.unshift(l_index)
      char_index.pop
      l_index += 1
      r_index += 1
      attempt = 0
    elsif s[l_index] == s[r_index]
      l_index += 1
      r_index -= 1
    end
    return -1 if char_index.size > 1
  end
  char_index.size == 1 ? char_index[0] : -1
end
