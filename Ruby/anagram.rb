# https://www.hackerrank.com/challenges/anagram/problem

def anagram(s)
    changes = 0
    if s.length % 2 == 0 # check if string can be divided into 2 equal halves
        s1 = s[0...s.length/2].chars # first half of string
        s2 = s[s.length/2..-1].chars # second half of string

        s1.each do |c|
            character = s2.index(c)
            character ? s2.delete_at(s2.index(c)) : changes += 1
        end
    else
        return -1
    end
    changes
end
