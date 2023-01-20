//1

function arr(array) {
    let res = array.sort((a, b) => a - b);
    return res.length > 1 ?  res[res.length - 1] - res[0] : 0;
}

console.log(arr([1, 2, 3, -4]));

//2


function maxLength(num, str) {
    return str.split(' ').filter(item => item.length > num); 
}

console.log(maxLength(3, 'hello my name is Maksym'));

//3

function solution(str1, str2) {
    let res = str1.slice(str1.length - str2.length);
    return res === str2;
}

console.log(solution('abc', 'bc'));


//4

function averages(arr) {
    let res = [];
        for (let i = 0; i < arr.length - 1; i++) {
            res.push((arr[i] + arr[i + 1]) / 2);
        }
    return res;
    // або return result = arr.map((num, i, array) => ((array[i] + array[i+1]) / 2)).slice(0, arr.length -1);
}

console.log(averages([1, 3, 5, 1, -10]));

//5

function countVovels(str) {
    let res = str.replace(/[qwrtpsdfghjklzxcvbnm]/gi, '');
    return res.length;
}

console.log(countVovels('Celebration'));


function removeABC(str) {
    let reg = /[abc]/gi;
    // return str.includes('a', 'b', 'c') ? str.replace(/[abc]/gi, '') : null;
    return reg.test(str) ? str.replace(/[abc]/gi, '') : null;
}

console.log(removeABC('This might be a bit hard'));

//6

function difference(arr1, arr2) {
    let res = [...new Set([...arr1, ...arr2])];
    return res.sort((a, b) => a - b).map(elem => elem.toString());
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));


//7 

function reverse (obj) {
    let res = Object.entries(obj);
    //let res = Object.entries(obj).map(([key, value]) => [value, key]);
   for (let i = 0; i < res.length; i++) {
        res[i].reverse();
   }
   return Object.fromEntries(res);
}

console.log(reverse({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"})); 

//8

function calculateDifference (obj, insurance) {
    let summ = 0;
    Object.keys(obj).forEach((key, i) => {
        summ += obj[key];
    })
    return summ > insurance ? summ - insurance : 0;
    
}

console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

//9

function doesBrickFit(a, b, c, w, h) {
    if (a <= w && c <= h) {
        return true;
    } else {
        return false;
    }
}

console.log(doesBrickFit(1, 1, 1, 1, 1));

//10 

function removeName(str) {
    return str.substring(str.lastIndexOf('/'), str.lastIndexOf(".")).slice(1);
   
    // або, якщо видалити з рядка ім'я файлу без розширення 
    //let name = str.substring(str.lastIndexOf('/'), str.lastIndexOf(".")).slice(1);
    //return str.replace(name, '');
}
console.log(removeName('c:/WebServers/home/testsite/www/myfile.txt'));

//11
function move(str1, str2) {
    let arr = str1.split(' ');
    let res = [];
    return res.concat(arr.slice(2), arr.slice(0, 2)).join(' ');
}

console.log(move('everyone love html and javascript','html and javascript everyone love'));

//12
function getDigits(a) {
    let b = [],
        c = [],
        arr= a.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i+1]) {
            b.push(arr[i]);
            c.push(arr[i+1]);
        }
        i++;
    }
    return [b, c];

}

console.log(getDigits([1, 3, 4, 5, 10, 18]));
//13
function sortString(str) {
   let emailRegEx = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
   let linkRegEx = /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/gi;
   let numberRegEx = /\d{3,}/g;
   let newString = str.toLowerCase();
   return newString[0][0].toUpperCase()+newString.slice(1).replace(emailRegEx, '[contacts forbidden]').replace(linkRegEx, '[links forbidden]').replace(numberRegEx, '');
}

console.log(sortString('hello, https://github.com/, my EMAIL is fefeefef@gmail.com and my number is 380675422345'));

//14

function closedBrackets(str){
    let arr = [],
        open = ['('],
        close = [')'];
    for (let i of str) {
        if(open.includes(i)) {
            arr.push(i);
        } else if (close.includes(i)) {
            let pair = open[0];
            if (arr[arr.length - 1] === pair) {
                arr.splice(-1,1);
            } else {;
                arr.push(i);
                break;
            }
        }
    }
    return (arr.length === 0);
}
console.log(closedBrackets('(hello) (my name)'));

//15
function generatePassword() {
    let length =  Math.floor(Math.random() * (13 - 6) + 6),
        numlength = Math.floor(Math.random() * (5 - 1) + 1),
        charset = "abcdefghijklmnopqrstuvwxyz",
        uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        digits = '1234567890',
        start = "",
        middle = '',
        end = '';
        str = '';
    for (let i = 0; i < length/2; i++) {
        start += charset.charAt(Math.floor(Math.random() * charset.length));
        middle += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    }
    for (let j = 0; j < numlength; j++) {
        end += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    str = start + middle + '_' + end;
    let result = str.split('');
    return result.sort(() => Math.random() - 0.5).join('');
}
console.log(generatePassword());



//16
function arraySort(array) {
    let arr1 = [];
    let arr2 = [];
    let sorted =  array.sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] < sorted[i + 1]) {
            arr1.push(sorted[i]);
            arr2.push(sorted[i+1]);
        }
        i++;
   }
   if (sorted.length % 2 != 0) {
    arr1.push(sorted[sorted.length - 1]);
   }
    return arr1.concat(arr2);
}

console.log(arraySort([1, 2, 3, 4, 5, 6, 8, 10, 11]));

