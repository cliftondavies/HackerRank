# https://www.hackerrank.com/challenges/the-time-in-words/problem

def timeInWords(h, m)
  minute = (m == 01 || m == 59) ? 'minute' : 'minutes'
  minute = '' if m == 15 || m == 30 || m == 45
  
  if m == 00
    "#{hours[h]} o' clock"
  elsif m <= 30
    "#{minutes[m.to_s]} #{minute} past #{hours[h]}".sub(/\s{2,}/, ' ')
  else
    new_m = 60 - m
    "#{minutes[new_m.to_s]} #{minute} to #{hours[h + 1]}".sub(/\s{2,}/, ' ')
  end
end

def hours
  {
    1 => 'one', 2 => 'two', 3 => 'three', 4 => 'four', 5 => 'five',
    6 => 'six', 7 => 'seven', 8 => 'eight', 9 => 'nine', 10 => 'ten',
    11 => 'eleven', 12 => 'twelve', 13 => 'one'
  }
end

def minutes
  {
    '1' => 'one', '2' => 'two', '3' => 'three', '4' => 'four', '5' => 'five',
    '6' => 'six', '7' => 'seven', '8' => 'eight', '9' => 'nine', '10' => 'ten',
    '11' => 'eleven', '12' => 'twelve', '13' => 'thirteen', '14' => 'fourteen', '15' => 'quarter', '16' => 'sixteen', '17' => 'seventeen', '18' => 'eighteen', '19' => 'nineteen', '20' => 'twenty', '21' => 'twenty one', '22' => 'twenty two', '23' => 'twenty three', '24' => 'twenty four', '25' => 'twenty five', '26' => 'twenty six', '27' => 'twenty seven', '28' => 'twenty eight', '29' => 'twenty nine', '30' => 'half'
  }
end
