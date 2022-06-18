function say(temp: string): string {
    let len = temp.length;
    let said: string = "";
    for (let i = 0; i < len; ) {
        var j = i + 1;
        while (j < len && temp[j] == temp[i]) {
            j += 1;
        }
        var k = j - i;
        said += k.toString();
        said += temp[i];
        i = j
    }
    return said;
}

function countAndSay(n: number): string {
    if (n == 1) {
        return "1";
    }
    
    var temp = countAndSay(n - 1);
    var ans = say(temp);
    return ans;
};