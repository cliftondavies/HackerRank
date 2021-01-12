// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
    if(x1 > x2 && v1 >= v2) {
        return "NO";
    } else if (x2 > x1 && v2 >= v1) {
        return "NO";
    }

    let kPos1 = x1;
    let kPos2 = x2;

    if(x1 < x2) {
        while(kPos1 < kPos2) {
            kPos1 += v1;
            kPos2 += v2;

            if(kPos1 === kPos2) {
                return "YES";
            }
        }
    } else if (x2 < x1) {
        while(kPos2 < kPos1) {
            kPos1 += v1;
            kPos2 += v2;

            if(kPos1 === kPos2) {
                return "YES";
            }
        }
    }
    return "NO";
}
