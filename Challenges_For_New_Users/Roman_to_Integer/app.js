let romanToInt = (s) => {
    // convert array into numbers
    let newArray = [];
    let sum = 0;
    for(let i = 0; i < s.length; i++) {
        switch(s[i]) {
            case 'I':
                newArray[i] = 1;
                break;
            case 'V':
                newArray[i] = 5;
                break;
            case 'X':
                newArray[i] = 10;
                break;
            case 'L':
                newArray[i] = 50;
                break;
            case 'C':
                newArray[i] = 100;
                break;
            case 'D':
                newArray[i] = 500;
                break;
            case 'M':
                newArray[i] = 1000;
                break;
        }
    }
    // for loop goes through each index to count sum
    for(let i = 0; i < newArray.length; i++) {
        if(newArray[i] < newArray[i + 1]) {
            sum += newArray[i + 1] - newArray[i];
            i++;
        } else {
            sum += newArray[i];
        }
    }
    console.log(sum);
    return 0;
}

romanToInt('MCMXCIX');