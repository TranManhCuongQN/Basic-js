const student = {
    id: 1,
    name: 'Van A',
    name: 'Van B', // trường hợp cùng key thì nó ưu tiên cái key sau 
    isHero: true,
    'key has space': 'super',

    sayHi() {
        console.log('Hello!');
    }
}


//Todo:Lấy value của key
console.log(student.name); //Van B
console.log(student["key has space"]); //Super
console.log(student.isHero); //true
console.log(student.sayHi()); //Hello!  undefined:vì trong hàm ko trả về gì hết

const key = 'key has space';
console.log(student.key); //undefined vì trong object không có key nào tên key hết nên nó trả về undefined
console.log(student[key]); //super khi dùng ngoặc vuông truyền vào 1 biến sẽ lấy giá trị của cái key này là gì
// giá trị của cái key này là 'key has space' tương đương nó lấy cái key này trong object


//Todo:Thêm key cho object 
//Lưu ý:Mặc dù ở đây dùng const ko phải là let
//const ko thể thay đổi đc mà let thay đổi đc nhưng trường hợp này const vẫn thay đổi đc 
//vì const ở đây là student ko đc gắn lại 1 giá trị mới nếu mà lấy student gắn 1 object mới thì báo lỗi
//còn update các thuộc tính bên trong object ko sao
const student = {
        id: 1,
        name: 'Van A',
        isHero: true,
    }
    //*update value of a key
student.name = 'Van B';

//*simply set new key for object
student.age = 18;
student['mark'] = 10;
console.log(student.name); //Van B
console.log(student.age); //18
console.log(student.mark); //10


//Todo:Xóa 1 key
const student = {
        id: 1,
        name: 'Van A',
        isHero: true,
    }
    //*Remove "name" key
delete student.name;
console.log(student);


//todo:Tham trị và tham chiếu
//Tham trị:áp dụng cho những dữ liệu đơn giản | lưu giá trị luôn không tham chiếu đi đâu hết | (Primitive Type/Value Type)
//vd:boolean,number,string,null,undefined,symbol
//Tham chiếu:áp dụng cho dữ liệu phức tạp | chứa địa chỉ thôi khi cần tương tác sẽ dựa vào cái địa chỉ đi đến vùng nhớ nơi 
//giữ giá trị này để lấy ra cho bạn | (Reference Type)
//vd:object,array,function


//todo:Phép gán với object
//primitive type
const a = 5;
let b = a;
b = 10;
console.log(a); //5
//reference type
const student1 = { name: 'Easy Frontend', };
const student2 = student1;
student2.name = 'Hau Nguyen';
console.log(student1.name); //Hau Nguyen


//todo:So sánh object thường là so sánh bằng không so sánh < | >
//object khi so sánh nó sẽ đem địa chỉ ra so sánh nếu 2 object cùng 1 địa chỉ thì true !thì false
const student1 = { name: 'Easy Frontend', };
const student2 = student1;
console.log(student1 === student2); //true

//định nghĩa 2 object khác nhau mặc dù bên trong object giống nhau cách lưu sẽ lưu các địa chỉ khác
const student1 = { name: 'Easy Frontend', };
const student2 = { name: 'Easy Frontend', };
console.log(student1 === student2); //false


//todo:Pass by value và Pass by reference
function changePrimitive(name, age) {
    name = 'Easy Frontend';
    age = 18;
}

let name = 'Easy';
let age = 17;
// khi mình truyền vào hàm dạng Primitive thì nó sẽ copy name và age ko đụng đến name và age ở ngoài
// khi thay đổi bên trong hàm ra ngoài log lại giá trị name và age ko thay đổi vì nó tạo ra biến mới name và age
changePrimitive(name, age);

console.log(name); //'Easy'
console.log(age); //17


function changeReference(student) {
    student.name = 'Easy Frontend';
    student.age = 18;
}
const student = {
    name: 'Easy',
    age: 17,
}
changeReference(student);

console.log(student.name); //'Easy Frontend'
console.log(student.age); //18


//todo:property value shorthand
const student = {
    name, //name:name,
    age, //age:age,
}


//todo:object destructuring
const student = {
    name: 'Easy Frontend',
    age: 18
}

//* old way
const name = student.name;
const age = student.age;

//* new way
const { name, age } = student;


//todo:Kiểm tra key có trong object không
const student = {
    name: 'Easy Frontend',
    age: 18,
}
console.log('name' in student); //true
console.log('isHero' in student); //false
console.log('age' in student); //true


//todo:Clone object
const student = {
    name: 'Easy Frontend',
    age: 18,
}

const moreProps = {
    isHero: true,
    gender: 'male',
}

//*V1:using Object.assign()
const cloneStudent = Object.assign({}, student, moreProps);
console.log(cloneStudent);

//*V2:using spread operator
//... lấy tất cả các key các property
const cloneStudent2 = {
    ...student,
    ...moreProps,
}
console.log(cloneStudent2);


//todo:Deep clone object
const student = {
    name: 'Easy Frontend',
    age: 18,

    mark: {
        math: 10,
        english: 7,
    }
}
const cloneStudent = {
    ...student,
}
cloneStudent.mark.math = 1;
console.log(student.mark.math); //1

//* solution ,clone nested levels if any
const cloneStudent = {
    ...student,
    mark: {
        ...student.mark,
    }
}
cloneStudent.mark.math = 1;
console.log(cloneStudent.mark.math) //10


//todo:Duyệt key của object
const student = {
    id: 1,
    name: 'Van A',
    isHero: true,
}

const keyList = Object.keys(student);
console.log(keyList[0]) //[ 'id', 'name' , 'isHero'];
    //* Khi muốn duyệt cái key trong object thì dùng for in
for (let key in student) {
    console.log('key: ' + key);
    console.log('value: ' + student[key]);
}



//todo:Exercise
//*Viết hàm clone object nhưng không dùng spread operator
const studentA = {
    name: 'Bob',
    math: 9
}

function cloneObject(obj) {
    const studentC = {};
    const keys = Object.keys(obj);
    for (const k of keys) {
        studentC[k] = obj[k];
    }
    return studentC;
}
const studentB = cloneObject(studentA);
console.log(studentA === studentB);
console.log(studentB.name);
console.log(studentB.math);
console.log(cloneObject(studentA));


//*So sánh 2 object
function isEqual(obj1, obj2) {
    const key1 = Object.keys(obj1).length;
    const key2 = Object.keys(obj2).length;
    const key = Object.keys(obj1);
    let count = 0;
    if (key1 === 0 && key2 === 0) {
        return true;
    }
    if (key1 === key2) {
        for (let k of key) {
            if (obj1[k] === obj2[k]) {
                count++;
            }
            if (count === key1) {
                return true;
            }
        }
    }
    return false;
}
console.log(isEqual({}, {}));
console.log(isEqual({ name: 'Bob' }, {}));
console.log(isEqual({}, { name: 'Bob' }));
console.log(isEqual({ name: 'Bob' }, { name: 'Alice' }));
console.log(isEqual({ name: 'Bob', age: 18 }, { name: 'Bob', age: 20 }));
console.log(isEqual({ name: 'Bob', age: 18, id: 2 }, { name: 'Bob', age: 18, id: 2 }));
console.log(isEqual({ name: 'Bob' }, { name: 'bob' }));