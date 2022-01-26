//Math
//ceil:trần nhà | floor:sàn nhà | round:vòng | 
//Math.ceil Math.Floor Math.round Math.trunc
//Math.ceil làm tròn lên số nguyên gần nhất | vd:1.1->2
//Math.Floor làm tròn xuống số nguyên gần nhất | vd:1.9->1
//Math.round làm tròn tới số nguyên gần nhất | vd:1.5->2 && 1.4->1
//Math.struc làm trong tới phần nguyên gần nhất | vd:1.9->1 && 1.2->1
let n=1.2;
let a=Math.trunc(n);
console.log(a);
console.log(typeof a);    //Number


//todo:Math.random [0,1)
//[0->n)
function randomNumber(n){
    if(n<=0)return -1;
    const random=Math.round(Math.random()*n);
    return random;
}
console.log(randomNumber(10));
console.log(randomNumber(10));
console.log(randomNumber(10));
console.log(randomNumber(10));
console.log(randomNumber(10));


//todo:Math.random [a,b]
function randomNumberInRange(a,b){
    if(a>=b)return -1;
    const random=Math.round(Math.random()*(b-a));
    return random+a;
}
console.log(randomNumberInRange(3,10));
console.log(randomNumberInRange(3,10));
console.log(randomNumberInRange(3,10));
console.log(randomNumberInRange(3,10));
console.log(randomNumberInRange(3,10));
console.log(randomNumberInRange(3,10));


//extract:Trích xuất
function extractTheOnes(n){
    if( typeof n !== "number" || n.toString().length!==3) return -1;
    return n%10;
}
console.log(extractTheOnes(123));
console.log(extractTheOnes(312));
console.log(extractTheOnes(321));
console.log(extractTheOnes(0));
console.log(extractTheOnes(1234));


function extractTheTens(n){
    if( typeof n !== "number" || n.toString().length!==3) return -1;
    return Math.trunc((n%100)/10);
}
console.log(extractTheTens(123));
console.log(extractTheTens(0));
console.log(extractTheTens(312));
console.log(extractTheTens(321));
console.log(extractTheTens(1234));


function extractTheHundreds(n){
    if( typeof n !== "number" || n.toString().length!==3) return -1;
    return Math.trunc(n/100);
}
console.log(extractTheHundreds("123"));
console.log(extractTheHundreds(0));
console.log(extractTheHundreds(312));
console.log(extractTheHundreds(221));
console.log(extractTheHundreds(1234));


function sumDigits(n){
    // if( typeof n=="number" || n.toString().length!==3) return -1;
    let sum=0;
    // while(n!=0){
    //     let a;
    //     a=n%10;
    //     sum=sum+a;
    //     n=Math.trunc(n/10);
    // }
    // return sum;

    if( typeof n !== "number" || n.toString().length!==3) return -1;
    let ones=n%10;
    let tens=Math.trunc((n%100)/10);
    let hundreds=Math.trunc(n/100);
    sum=ones+tens+hundreds;
    return sum;
}
console.log(sumDigits(123));
console.log(sumDigits("456"));


//passengersCount: số hành khách
function getTaxiCount(passengersCount){
    if(typeof passengersCount !== "number" || passengersCount <= 0 || Number.isInteger(passengersCount) === false) {
        // console.log("does not satisfy the requirement");
        return -1;
    }
    else{
    let taxiCount7=Math.trunc(passengersCount/7);
    let taxiCount4=Math.trunc(passengersCount%7);
    let taxiCount=0;
    if(taxiCount4>4 && taxiCount4<=7){
        taxiCount7++;
        taxiCount4=0;
    }
    else if(taxiCount4<=4 && taxiCount4>0){
        taxiCount4=1;
    }
    taxiCount=taxiCount4+taxiCount7;
    return taxiCount;
    // console.log(taxiCount7+" "+"car 7 seat ");
    // console.log(taxiCount4+" "+"car 4 seat ");
}
}
console.log(getTaxiCount(10));

//Tìm số lớn nhất  của một số nguyên dương
function getMaxDigit(n){
    if(Number.isInteger(n) === false || n >= 1000 || n < 0 ){
        return -1;
    }
    // let max=0;
    // while(n!=0){
    //     let a=n%10;
    //     if(a>max){
    //         max=a;
    //     }
    //     n=Math.trunc(n/10);
    // }
    let ones=n%10;
    let tens=Math.trunc((n%100)/10);
    let hundreds=Math.trunc(n/100);
    let max=ones;
    if(tens>max)max=tens;
    if(hundreds>max)max=hundreds;
    return max;
}
console.log(getMaxDigit(1000));
console.log(getMaxDigit(12));
console.log(getMaxDigit(123));
console.log(getMaxDigit(675));


//compare:đồí chiểu so sánh
//Symmetric:đối xứng
//Kiểm tra số có 3 chữ số có phải là số đối xứng hay không
function isSymmetricNumber(n){
    if(Number.isInteger(n) === true && n <999 && n >0 ){
        let ones=n%10;
        let tens=Math.trunc((n%100)/10);
        let hundreds=Math.trunc(n/100);
        if(ones===tens ||ones===hundreds || n.toString().length===1){
            return true;
        }
    }
    return false;
}
console.log(isSymmetricNumber(1));
console.log(isSymmetricNumber(12));
console.log(isSymmetricNumber(22));
console.log(isSymmetricNumber(33));
console.log(isSymmetricNumber(121));
console.log(isSymmetricNumber(123));
console.log(isSymmetricNumber(222));
console.log(isSymmetricNumber(353));
console.log(isSymmetricNumber(10001));
console.log(isSymmetricNumber(1.2));
console.log(isSymmetricNumber("22"));