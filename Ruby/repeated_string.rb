# https://www.hackerrank.com/challenges/repeated-string/problem

def repeatedString(s, n)
    a = s.split("").count("a") # get number of a's in original string
    ec = a * (n / s.length) # number of a's up to the closest multiple of s.length to n
    b = n - (s.length * (n / s.length)) # remaining string characters to make up n
    ac = s[0..b].split("").count("a") if b == 0 # additional characters
    ac = s[0..b-1].split("").count("a") if b > 0 # additional characters

    return s.length == 1 ? ec : ec + ac
end
