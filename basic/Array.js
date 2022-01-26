//todo:Khai báo mảng rỗng
const numberList = [];

const numberList = [1, 2, 3]; //a list of numbers
const wordList = ['Easy', 'Frontend']; // a list of strings
const flagList = [true, false, false]; // a list of boolean

//* a list of students
const studentList = [
    { id: 1, name: 'Van A' },
    { id: 2, name: 'Thi B' },
    { id: 3, name: 'Van C' },
]

//todo:Mảng 2 chiều
const board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);

console.log(board[0][1]);
console.log(board[1][2]);



//todo:Giới thiệu Array object
//*Array.isArray():dùng để kiểm tra xem thử có phải là mảng hay không

//todo:Nhóm hàm kiểm tra phần tử có tồn tại không
//every(callbackFn):Kiểm tra tất cả phần tử thỏa điều kiện
//some(callbackFn):Kiểm tra có một phần tử thỏa điều kiện
//indexOf(searchElement):Tìm vị trí đầu tiên của phần tử searchElement
//lastIndexOf(searchElement):Tìm vị trí cuối cùng của phần tử searchElement
//includes(searchElement):Kiểm tra có chứa phần tử searchElement không
//find(callbackFn):Tìm phần tử đầu tiên thỏa điều kiện
//findIndex(callbackFn):Tìm vị trí của phần tử đầu tiên thỏa điều kiện

//*check if all numbers is even
const boolean = [1, 2, 3].every((x) => x % 2 === 0); //false
const boolean1 = [2, 4, 6].every((x) => x % 2 === 0); //true
console.log(boolean);
console.log(boolean1);

//*check if exist one number is even
const boolean = [1, 2, 4].some((x) => x % 2 === 0); //true
const boolean1 = [1, 3, 5].some((x) => x % 2 === 0); //false
console.log(boolean);
console.log(boolean1);

//*indexOf && lastIndexOf
const indexOf = ['easy', 'frontend', 'easy'].indexOf('frontend'); //1
const lastIndexOf = ['easy', 'frontend', 'easy'].lastIndexOf('easy'); //2
console.log(indexOf);
console.log(lastIndexOf);

//*find && findIndex
const find = ['easy', 'frontend', 'easy'].find((x) => x.length > 4); //frontend
const findIndex = ['easy', 'frontend', 'easy'].findIndex(x => x.length > 4); //1
console.log(find);
console.log(findIndex);

//todo:Nhóm hàm thêm xóa phần tử
//push(element0,...,elementN):Thêm vào cuối mảng
//pop():Xóa cuối mảng
//shift():Xóa đầu mảng
//unshift(element0,...,elementN):Thêm đầu mảng
//splice(start,deleteCount,item1,...,item2):Xóa thêm giữa mảng

//*Add new items at the end
const numberList = [1, 2, 3];
numberList.push(4, 5);
console.log(numberList); //[1,2,3,4,5]

//*Remove items at the end
const numberList = [1, 2, 3];
const lastNumber = numberList.pop();
console.log(numberList, lastNumber); //[1,2],3

//*Add new items at the beginning
const numberList = [1, 2, 3];
numberList.unshift(0);
console.log(numberList); //[0,1,2,3]

//*Removeitems at the beginning
const numberList = [1, 2, 3];
const firstNumber = numberList.shift();
console.log(numberList, firstNumber); //[2,3],1

//*Add/remove items at the middle of an array
const numberList = [3, 5, 7];
numberList.splice(0, 0, 2, 4);
console.log(numberList); //[2,4,3,5,7]

//todo:Nhóm hàm hay sử dụng
//forEach(callbackFn):Duyệt mảng
//map(callbackFn):Biến đổi mảng
//filter(callbackFn):Lọc mảng theo điều kiện
//slice(start,end):Lấy mảng con
//reduce():Duyệt mảng và tính toán cho ra kết quả cuối cùng

//todo:1 số hàm khác
//fill(value,start,end):Fill value từ start tới end
//join():biến đổi mảng thành chuỗi
//concat():Nỗi mảng
//reverse():Đảo ngược mảng
//sort():Sắp xếp mảng

//*vd: ban đầu mình muốn khởi tạo mảng 10 phần tử có giá trị là 0
console.log(Array(10).fill(0));



//todo:Array Destructuring
const numberList = [3, 5, 7];

//*old way
const first = numberList[0];
const second = numberList[1];
const third = numberList[2];
console.log(first); //3
console.log(second); //5
console.log(third); //7

//* similar but new way
const [first, second, third] = numberList
console.log(first); //3
console.log(second); //5
console.log(third); //7

//* or even direct array
const [first, second, third] = [3, 5, 7, 9, 11];
console.log(first); //3
console.log(second); //5
console.log(third); //7

//* rest operator (...)
const [first, second, third, ...rest] = [3, 5, 7, 9, 11];
console.log(first); //3
console.log(second); //5
console.log(third); //7
console.log(rest); //[9,11]



//todo:Clone array
//Array cũng là tham chiếu
const numberList = [1, 2, 3];
const anotherList = numberList;

anotherList[0] = 4;
console.log(numberList); //[4,2,3]
console.log(anotherList); //[4,2,3]

//Mình muốn thay dổi mà không ảnh hưởng đến mảng hiện tại thì clone nó ra
//rest: gom list ---> 1 array
//spread: 1 array ---> list
const numberList = [1, 2, 3];
const anotherList = [...numberList, 4, 5, 6];

anotherList[0] = 4;
console.log(numberList); //[1,2,3]
console.log(anotherList); //[4,2,3,4,5,6]



//todo:Duyệt các phần tử array
//* forEach
//không dùng được break
//thay đổi trực tiếp các giá trị mảng ban đầu
const numberList = [2, 4, 6];
numberList.forEach(x => console.log(x)); //2,4,6

//* for...of
const numberList = [2, 4, 6];
for (const number of numberList) {
    console.log(number) //2,4,6
}

//*Arrow function
//forEach(element) => {...})
//forEach({element,index}) => {...})
//*Callback function
//forEach(callbackFn)
//*Inline callback function
//forEach(function callbackFn(element){...})
//forEach(function callbackFn(element,index){...})

const numberList = [2, 4, 6];
// function log(a,b){
//     console.log('hello');
// }
// const log = (a,b) => {
//     console.log('hello');
// }

//Mỗi lần chạy nó sẽ gọi lại hàm
numberList.forEach((number, index) => {
    console.log(number, index)
})


//*Callback:là tham số của hàm có kiểu dữ liệu là hàm
function main(onFinish) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += i;
    }

    onFinish(sum);
}

function handleOnFinish(sum) {
    console.log('Sum is: ', sum);
}
main(handleOnFinish);

function findFirstEven(numberList, callbackFn) {
    if (!Array.isArray(numberList)) {
        return undefined;
    }
    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (callbackFn(number)) {
            return number;
        }
    }
    return undefined;
}

function isEven(number) {
    return number % 2 === 0;
}
//*inline function
console.log(findFirstEven([1, 2, 3, 4], isEven));
console.log(
    findFirstEven([1, 2, 3, 4], function(number) {
        return number % 2 === 0
    })
);
//*arrow function
console.log(findFirstEven([1, 2, 3, 4], (number) => number % 2 === 0));



//todo:biến đổi mảng map()
//Vì phương thức map() trả về một mảng mới nên nó không thay đổi mảng ban đầu
const numberList = [1, 3, 5, 7];
const map = numberList.map(x => x + 1); //[2,4,6,8]
console.log(map);

const wordList = ['easy', 'frontend'];
const map1 = wordList.map(x => x.length); //[4,8]
const map2 = wordList.map(x => `super-${x}`); //['super-easy','super-frontend']
console.log(map1);
console.log(map2);

function map(arr, mappingFn) {
    if (!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined;
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const newElement = mappingFn(element, i);
        newArray.push(newElement);
    }
    return newArray;
}
console.log(map([1, 2, 3], (x) => x + 1)); //[2,3,4]
console.log(map([1, 2, 3, 4], (x, idx) => (idx % 2 === 0 ? x + 1 : x * 2))); //[2,4,4,8]



//todo:lọc mảng theo điều kiện filter()
//Vì phương thức filter() trả về một mảng mới
const numberList = [1, 3, 5, 2, 7];
const filter = numberList.filter(x => x % 2 === 0);
const filter1 = numberList.filter(x => x <= 10 && x % 5 === 0);
console.log(filter); //[2]
console.log(filter1); //[5]

function filter(arr, callbackFn) {
    if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (callbackFn(element, i)) {
            newArray.push(element);
        }
    }
    return newArray;
}
console.log(filter([1, 2, 3, 4, 5], (x) => x > 3)); //[4.5]
console.log(filter([2, 2, 4, 4, 5], (x, idx) => x % 2 === 0 && idx % 2 === 1)); //[2,4]



//todo:Sắp xếp mảng với hàm sort()
//sort(compareFn) sẽ trả về mảng sau khi sort (mảng hiện tại không phải mảng mới)
//Phương thức sort() thay đổi vị trí của các phần tử trong mảng ban đầu và trả về chính mảng đó.
//Nếu là null/undefined thì auto cho xuống cuối mảng,null đứng trước tới undefined
//Nếu hàm compareFn không được cung cấp các phần tử sẽ được chuyển veefd strings để thực hiện so sánh
//Nếu compareFn(a,b) 
//KQ trả về < 0 a đứng trước b
//KQ trả về = 0 a và b như nhau
//KQ trả về > 0 a đứng sau b

const numberList = [2, 5, 3, 1];
numberList.sort();
console.log(numberList) //[1,2,3,5]

function compareFn(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    return -1;
}
const numberList = [2, 1, 3];
numberList.sort(compareFn);
console.log(numberList) //[1,2,3]



//todo:Duyệt mảng và tính toán với hàm reduce()
//Dùng hàm reduce() khi có nhu cầu duyệt qua từng phần tử và tính toán ra một kết quả cuối cùng
//Reduce thường được dùng nhiều cho việc tính toán, nó trả về một giá trị.

const numberList = [2, 4, 6];
const reduce = numberList.reduce((sum, number) => sum + number, 0)
console.log(reduce); //12

function reduce(arr, callbackFn, initialValue) {
    if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
        throw new Error('Invalid parameters');
    }
    if (arr.length === 0) {
        if (initialValue === undefined) {
            throw new Error('Should have initialValue when arr is empty');
        }
        return initialValue;
    }
    const hasInitialValue = initialValue !== undefined;
    const startIndex = hasInitialValue ? 0 : 1;
    let accumulator = hasInitialValue ? initialValue : arr[0];

    for (let i = startIndex; i < arr.length; i++) {
        const newAccumulator = callbackFn(accumulator, arr[i], i);
        accumulator = newAccumulator;
    }
    return accumulator;
}

function calcSum(prevSum, number) {
    return prevSum + number;
}
console.log(reduce([2, 4, 6], calcSum, 0)); //12
console.log(reduce(
    [2, 4, 6],
    function(prevSum, number) {
        return prevSum + number;
    },
    0
)); //12
console.log(reduce([2, 4, 6], (prevSum, number) => prevSum + number, 0)) //12



//todo:Array.from được dùng để convert giá trị kiểu Array
//Array.from(arrayLike,mapFunction);
//arrayLike: giá trị muốn chuyển
//mapFunction(item,index): function sẽ chạy qua toàn bộ phần tử

const someNumbers = { '0': 10, '1': 15, length: 2 }
const from = Array.from(someNumbers, value => value * 2);
console.log(from); //[20,30]

//*Khỏi tạo một dãy số
function range(end) {
    return Array.from({ length: end }, (_, index) => index);
}
console.log(range(4)); //[0,1,2,3]

//*Tạo một array không trùng lặp
function unique(arr) {
    return Array.from(new Set(arr))
}
console.log(unique([1, 1, 2, 3, 3])); //[1,2,3]




//todo:Exercise
function findMaxEach(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) {
        return undefined;
    }
    let max = numberList[0];
    numberList.forEach((number) => {
        if (number > max) {
            max = number;
        }
    })
    return max;
}
console.log(findMaxEach([2, 3, 5, 11])); //11

//*reduce
function findMaxReduce(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) {
        return undefined;
    }
    // let max = numberList[0];
    // numberList.forEach((number) => {
    //     if(number>max){
    //         max=number;
    //     }
    // })
    return numberList.reduce((max, number) => (number > max ? number : max));
}
console.log(findMaxReduce([2, 3, 5, 11])); //11


function findLongesWordEach(wordList) {
    if (!Array.isArray(wordList) || wordList.length === 0) return undefined;
    let longesWord = wordList[0];
    wordList.forEach((currentWord) => {
        if (currentWord.length > longesWord.length) {
            longesWord = currentWord;
        }
    })
    return longesWord;
}
console.log(findLongesWordEach(['Easy', 'and', 'FrontEnd'])); //frontend

//*reduce
function findLongesWordReduce(wordList) {
    if (!Array.isArray(wordList) || wordList.length === 0) return undefined;
    return wordList.reduce((longesWord, currentWord) =>
        currentWord.length > longesWord.length ? currentWord : longesWord
    )

}
console.log(findLongesWordReduce(['Easy', 'and', 'FrontEnd'])) //frontend


function createArrayInRange(a, b) {
    if (a < -100 || b < -100 || b < a || a > 100 || b > 100) {
        return -1;
    }
    const array = [];
    for (let i = a; i <= b; i++) {
        array.push(i);
    }
    return array;
}
console.log(createArrayInRange(1, 5));
console.log(createArrayInRange(-2, 1));
console.log(createArrayInRange(5, 4));

//*Array.from
function createArrayInRangeFrom(a, b) {
    if (a < -100 || b < -100 || b < a || a > 100 || b > 100) {
        return -1;
    }
    const array = Array.from({ length: (b - a) + 1 }, (v, i) => i + a)
    return array;
}
console.log(createArrayInRangeFrom(1, 5));
console.log(createArrayInRangeFrom(-2, 1));


function isPrime(n) {
    let count = 0;
    if (!Number.isInteger(n) || n < 2 || n >= 1000) {
        return false;
    }
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count === 1) {
        return true;
    } else {
        return false;
    }
}
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(4));
console.log(isPrime(6));


function getDivisorList(n) {
    if (n < 1 || n > 1000 || !Number.isInteger(n)) {
        return -1;
    }
    let divisorList = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisorList.push(i);
        }
    }
    return divisorList;
}
console.log(getDivisorList(1));
console.log(getDivisorList(10));
console.log(getDivisorList(12));

//*Array.from and Array.filter
function getDivisorList(n) {
    if (n < 1 || n > 1000 || !Number.isInteger(n)) {
        return -1;
    }
    let newArray = Array.from({ length: n }, (v, i) => v = i + 1);
    let result = newArray.filter((v, i) => n % v === 0)
    return result;
}
console.log(getDivisorList(1));
console.log(getDivisorList(10));
console.log(getDivisorList(12));

//*Array.from && forEach && sort
function getDivisorList(n) {
    if (n < 1 || n > 1000 || !Number.isInteger(n)) {
        return -1;
    }
    let result = [];
    let newArray = Array.from({ length: Math.sqrt(n) }, (v, i) => v = i + 1);
    newArray.forEach(isDivisor)

    function isDivisor(i) {
        if (Math.sqrt(n) === i) return result.push(i);
        if (n % i === 0) return result.push(i, n / i);
    }
    return result.sort((a, b) => a - b);
}
console.log(getDivisorList(1));
console.log(getDivisorList(10));
console.log(getDivisorList(12));





function isPerfectNumber(n) {
    if (n <= 1 || n >= 1000 || !Number.isInteger(n)) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i < n - 1; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    if (sum === n) {
        return true;
    }
    return false;
}
console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber('6'));
console.log(isPerfectNumber(5));

function transformNumbers(numberList) {
    const l = numberList.length;
    if (l === 0) {
        return [];
    }
    let newArray = [];
    for (let i = 0; i < l; i++) {
        if (i === 0 && l === 1) {
            const elementHead = numberList[i];
            newArray.push(elementHead);
            break;
        }
        if (i === 0) {
            const elementHead = numberList[i + 1];
            newArray.push(elementHead);
        } else if (i === l - 1) {
            const elementLast = numberList[l - 2];
            newArray.push(elementLast);
        } else {
            const element = numberList[i - 1] + numberList[i + 1];
            newArray.push(element);
        }

    }
    return newArray;
}
console.log(transformNumbers([]));
console.log(transformNumbers([1]));
console.log(transformNumbers([5, 10]));
console.log(transformNumbers([2, 4, 6, 8]));
console.log(transformNumbers([2, 4, 6, 8, 10, 11, 12, 15]));

//*forEach
function transformNumbers(numberList) {
    const l = numberList.length;
    if (l === 0) {
        return [];
    }
    let newArray = [];
    if (l === 1) {
        newArray.push(numberList[0]);
        return newArray;
    }
    numberList.forEach((v, i) => {
        if (i === 0) {
            const elementHead = numberList[i + 1];
            newArray.push(elementHead);
        } else if (i === l - 1) {
            const elementLast = numberList[l - 2];
            newArray.push(elementLast);
        } else {
            const element = numberList[i - 1] + numberList[i + 1];
            newArray.push(element);
        }
    })
    return newArray;
}
console.log(transformNumbers([]));
console.log(transformNumbers([1]));
console.log(transformNumbers([5, 10]));
console.log(transformNumbers([2, 4, 6, 8]));
console.log(transformNumbers([2, 4, 6, 8, 10, 11, 12, 15]));

//*map()
function transformNumbers(numberList) {
    const l = numberList.length;
    if (l === 0) {
        return [];
    }
    // if (l === 1) {
    //     newArray.push(numberList[0]);
    //     return newArray;
    // }
    let newArray = numberList.map((v, i) => {
        if (i === 0) {
            const elementHead = numberList[i + 1];
            return elementHead
        } else if (i === l - 1) {
            const elementLast = numberList[l - 2];
            return elementLast
        } else {
            const element = numberList[i - 1] + numberList[i + 1];
            return element
        }
    })
    return newArray;
}
console.log(transformNumbers([]));
console.log(transformNumbers([1]));
console.log(transformNumbers([5, 10]));
console.log(transformNumbers([2, 4, 6, 8]));
console.log(transformNumbers([2, 4, 6, 8, 10, 11, 12, 15]));

function isPrime(n) {
    let count = 0;
    if (!Number.isInteger(n) || n < 2 || n >= 1000) {
        return false;
    }
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count === 1) {
        return true;
    } else {
        return false;
    }
}

function hasPrime(numberList) {
    for (let i = 0; i < numberList.length; i++) {
        if (isPrime(numberList[i])) {
            return true;
        }
    }
    return false;
}
console.log(hasPrime([0, 1, 4, 6]));
console.log(hasPrime([1, 10, 12]))
console.log(hasPrime([2, 4, 6, 8]));
console.log(hasPrime([2, 3, 5, 4, 8]));

//*forEach
function isPrime(n) {
    let count = 0;
    if (!Number.isInteger(n) || n < 2 || n >= 1000) {
        return false;
    }
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count === 1) {
        return true;
    } else {
        return false;
    }
}

function hasPrime(numberList) {
    let boolean = false;
    numberList.forEach((v, i) => {
        if (isPrime(v)) {
            boolean = true;
        }
    })
    return boolean;
}
console.log(hasPrime([0, 1, 4, 6]));
console.log(hasPrime([1, 10, 12]))
console.log(hasPrime([2, 4, 6, 8]));
console.log(hasPrime([2, 3, 5, 4, 8]));

//*find()
function isPrime(n) {
    let count = 0;
    if (!Number.isInteger(n) || n < 2 || n >= 1000) {
        return false;
    }
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count === 1) {
        return true;
    } else {
        return false;
    }
}

function hasPrime(numberList) {
    const boolean = numberList.find(isPrime);
    if (typeof boolean === 'undefined') {
        return false;
    }
    return true;
}
console.log(hasPrime([0, 1, 4, 6]));
console.log(hasPrime([1, 10, 12]))
console.log(hasPrime([2, 4, 7, 8]));
console.log(hasPrime([2, 3, 5, 4, 8]));

//*findIndex
function isPrime(n) {
    let count = 0;
    if (!Number.isInteger(n) || n < 2 || n >= 1000) {
        return false;
    }
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count === 1) {
        return true;
    } else {
        return false;
    }
}

function hasPrime(numberList) {
    const boolean = numberList.findIndex(isPrime);
    if (boolean === -1) {
        return false;
    }
    return true;
}
console.log(hasPrime([0, 1, 4, 6]));
console.log(hasPrime([1, 7, 12]))
console.log(hasPrime([2, 4, 7, 8]));
console.log(hasPrime([2, 3, 5, 4, 8]));

//*some
function isPrime(n) {
    let count = 0;
    if (!Number.isInteger(n) || n < 2 || n >= 1000) {
        return false;
    }
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count === 1) {
        return true;
    } else {
        return false;
    }
}

function hasPrime(numberList) {
    const boolean = numberList.some(isPrime);
    return boolean;
}
console.log(hasPrime([2, 4, 7, 8]));
console.log(hasPrime([2, 3, 5, 4, 8]));
console.log(hasPrime([0, 1, 4, 6]));
console.log(hasPrime([1, 10, 12]))



function isPerfectNumber(n) {
    if (n <= 1 || n >= 1000 || !Number.isInteger(n)) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i < n - 1; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    if (sum === n) {
        return true;
    }
    return false;
}

function isAllPerfectNumbers(numberList) {
    if (numberList.length === 0) {
        return false;
    }
    let count = 0;
    for (let i = 0; i < numberList.length; i++) {
        if (isPerfectNumber(numberList[i])) {
            count++;
        }
    }
    if (count === numberList.length) {
        return true;
    }
    return false;
}
console.log(isAllPerfectNumbers([]));
console.log(isAllPerfectNumbers([1, 6]));
console.log(isAllPerfectNumbers([1, 2, 3]));
console.log(isAllPerfectNumbers([6]));
console.log(isAllPerfectNumbers([6, 28]));

//*reduce
function isPerfectNumber(n) {
    if (n <= 1 || n >= 1000 || !Number.isInteger(n)) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i < n - 1; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    if (sum === n) {
        return true;
    }
    return false;
}

function isAllPerfectNumbers(numberList) {
    if (numberList.length === 0) {
        return false;
    }
    let array = numberList.filter((v, i) => (isPerfectNumber(v)));
    if (array.length === 0) {
        return false;
    }
    let count = array.reduce((sum, v) => sum = sum + 1, 0);
    if (count === numberList.length) {
        return true;
    }
    return false;
}
console.log(isAllPerfectNumbers([]));
console.log(isAllPerfectNumbers([1, 6]));
console.log(isAllPerfectNumbers([1, 2, 3]));
console.log(isAllPerfectNumbers([6]));
console.log(isAllPerfectNumbers([6, 28]));

//*every
function isPerfectNumber(n) {
    if (n <= 1 || n >= 1000 || !Number.isInteger(n)) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i < n - 1; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    if (sum === n) {
        return true;
    }
    return false;
}

function isAllPerfectNumbers(numberList) {
    if (numberList.length === 0) {
        return false;
    }
    let result = numberList.every((v, i) => isPerfectNumber(v))
    return result;
}
console.log(isAllPerfectNumbers([]));
console.log(isAllPerfectNumbers([1, 6]));
console.log(isAllPerfectNumbers([6]));
console.log(isAllPerfectNumbers([6, 28]));
console.log(isAllPerfectNumbers([1, 2, 3]));



function calcAvfOfAllNumbers(numberList) {
    const length = numberList.length;
    if (!Array.isArray(numberList) || numberList.length === 0) {
        return 0;
    }
    let newArray = numberList.filter((v, i) => v % 2 === 0);
    const length1 = newArray.length;
    if (newArray.length === 0) {
        return 0;
    }
    let sum = newArray.reduce((sum, v) => sum = sum + v);
    let result = Math.round(sum / length1);
    return result;
}
console.log(calcAvfOfAllNumbers(1));
console.log(calcAvfOfAllNumbers([]));
console.log(calcAvfOfAllNumbers([1]));
console.log(calcAvfOfAllNumbers([1, 2]));
console.log(calcAvfOfAllNumbers([1, 2, 4]));
console.log(calcAvfOfAllNumbers([1, 2, 4, 8]));