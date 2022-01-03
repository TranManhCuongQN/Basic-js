// classify:phan loai
function classifyStudent(mark){
    let result;
    if(mark>8){
        result ="Excellence";
    }
    else if(mark>=7){
        result ="Good";
    }
    else if(mark>=4){
        result ="Not good";
    }
    else result ="Bad";
    return result;
}
console.log(classifyStudent(9));
console.log(classifyStudent(7));
console.log(classifyStudent(5));
console.log(classifyStudent(3));


//sum subtract multiple divide
//remainder


//****Number
// Number.toString
const n=20;
let b= n.toString();
console.log(typeof b);    // String
console.log(b);           //String
let c=n.toString(2);
console.log(typeof c);
console.log(c);           //binary
let d=n.toString(16);    
console.log(typeof d);    // String
console.log(d);           //hex
let f=n.toString(8);
console.log(typeof f);    //String
console.log(f);           //Octal
let e=n.toString(10);
console.log(typeof e);    //String
console.log(e);           //Decimal


//****toFixed() && toPrecision()
const n=123.525;       //Number
let a=n.toFixed();
console.log(a);        //124           //String
console.log(typeof a);
let b=n.toFixed(1); 
console.log(b);        //123.5
let c=n.toFixed(2);
console.log(c);        //123.53
let d=n.toFixed(3);
console.log(d);        //123.525
let e=n.toFixed(4);
console.log(e);       //123.5250
let f=n.toFixed(5);
console.log(f);       //123.52500


const n=123.525;          //Number
console.log(typeof n);
let a=n.toPrecision();
let c=n.toPrecision(1);   //100          //String
let d=n.toPrecision(2);   //120
let e=n.toPrecision(3);   //124
let f=n.toPrecision(4);   //123.5
let g=n.toPrecision(5);   //123.53
let l=n.toPrecision(6);   //123.525
let h=n.toPrecision(7);   //123.5250
console.log(a);
console.log(typeof a);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(l);
console.log(h);

//todo:Lưu ý:Khi so sánh 2 con số thực thì mình so sánh vs EPSILON
//hằng số  EPSILON là độ chêch lệch của 2 con số 
//Độ chêch lệch của 2 con số đó < EPSILON tạm coi 2 con số đó =
//Nếu mà độ chênh lệch của 2 số > EPSILON 2 con số đó !=
let epsilon=Number.EPSILON;
console.log(epsilon);


let strNumber='123';
console.log(typeof strNumber);      //string
let str='abc';
console.log(typeof str);            //string
let number=Number(strNumber);
let number1=Number(str);
console.log(typeof number);         //number
console.log(number);                //123
console.log(typeof number1);        //number
console.log(number1);              //NaN

//Number.NaN:Not a Number
//Number.NEGATIVE_INFINITY:âm vô cùng
//NUmber.POSITIVE_INFINITY:dương vô cùng
let strNumber='123';
let isNumber=Number.isNaN(strNumber);
console.log(isNumber);           //false


let strNumber='123.456';
let parseInt=Number.parseInt(strNumber);
let parseFloat=Number.parseFloat(strNumber);
console.log(parseInt);           //123
console.log(parseFloat);         //123.456

let strNumber='123.564abc';
let parseInt=Number.parseInt(strNumber);
let parseFloat=Number.parseFloat(strNumber);
console.log(parseInt);         //123
console.log(parseFloat);       //123.564


//todo:Các kiểu dữ liệu trong JS
//number 
//bigint
//string
//boolean
//null:không biết giá trị nó là giá trị nào cả
//undefined:cho những giá trị chưa được gán giá trị luôn vd:khai báo 1 cái biên chưa gán nó cho 1 giá trị khởi tạo nào
//symbol
//object


