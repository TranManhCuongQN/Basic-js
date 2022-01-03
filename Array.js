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