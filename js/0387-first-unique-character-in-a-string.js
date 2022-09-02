function firstUniqChar(s) {
    for (var i = 0; i < s.length; i++) {
        var curr = s[i];
        if (s.indexOf(curr) === s.lastIndexOf(curr)) {
            return i;
        }
        else {
            return -1;
        }
    }
    for (var i = 0; i < s.length; i++) {
        if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
            return i;
        }
    }
    return -1;
}
;
firstUniqChar("leetcode");
