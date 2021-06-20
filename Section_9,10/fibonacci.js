function fib(length, cur=0, array =[]) {
    if (cur === 0){
        array.push(0);
    }
    else if (cur === 1){
        array.push(1);
    }
    else{
        let newNumber = array[cur - 2] + array[ cur -1];
        array.push(newNumber)
    }

    if (cur === length - 1){
        return array
    }
    cur++;
    return fib(length, cur, array)
}

const number = Number(prompt("Enter the range upto which you want Fibonacci number"))
console.log(fib(number));