function firstUniqChar(s: string): number {
  for (let i = 0; i < s.length; i++) {
    const curr:string = s[i];
    if(s.indexOf(curr) === s.lastIndexOf(curr)) {
      return i;
    } else {
      return -1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
        return i
    }
  }
  return -1
};

firstUniqChar("leetcode");