//String
//todo:charAt(index): truyền vào vị trí và lấy ra giá trị
const name = 'Easy FrontEnd';
const name1 = name.charAt(7);
console.log(name1); //o

//todo:concat: noi chuoi
const firstName = "Tran Manh";
const lastName = "Cuong";
const name = firstName.concat(" ").concat(lastName);
const name1 = `${firstName} ${lastName}`;
console.log(name); //Tran Manh Cuong
console.log(name1); //Tran Manh Cuong

//target: muc tiêu pad:tap giay
//todo:padStart(targetLength,padString):Thêm vào đầu string
//*padEnd(targetLength,padString):Thêm vào cuối string
const name = 'Tran Manh Cuong';
const padStart = name.padStart(20, ' ');
const padEnd = name.padEnd(20, '*');
console.log(padStart); //     Tran Manh Cuong
console.log(padEnd); //Tran Manh Cuong*****

//repeat:lặp lại
//todo:repeat(count):nhân chuỗi hiện tại lên count lần
const date = '16';
const dateCount = date.repeat(3);
console.log(dateCount); //161616

//todo:trim(); bỏ 2 đầu khoảng trắng
//*trimStart():bỏ đầu khoảng trắng
//*trimEnd():bỏ cuối khoảng trắng
const name = '  Tran Manh Cuong         ';
const trim = name.trim();
const trimStart = name.trimStart();
const trimEnd = name.trimEnd();
console.log(trim); //'Tran Manh Cuong'
console.log(trimStart); //'Tran Manh Cuong      '
console.log(trimEnd); //'  Tran Manh Cuong'

//todo:Tìm kiếm chuỗi con
//*indexOf(searchValue):truyền vào giá trị trong chuỗi trả về vị trị đầu tiên
//*lastindexOf(searchValue):truyền vào giá trị trong chuỗi trả về vị trí cuối cùng
const name = 'Hello Po';
const indexOf = name.indexOf('o');
const lastIndexOf = name.lastIndexOf('o');
console.log(indexOf); //4
console.log(lastIndexOf); //7

//todo:Kiểm tra chứa chuỗi con
//*includes(searchValue):kiểm tra xem thử có chữa chuỗi mình với truyền vào ko
//*startsWith(searchString):kiểm tra xem có bắt đầu với chuỗi searchString
//*endsWith(searchString):kiểm tra xem có kết thúc bằng chuỗi searchString
const name = 'Easy and FrontEnd';
const includes = name.includes("and"); //true
const includes1 = name.includes("easy"); //false
const includes2 = name.includes("Easy"); //true
const includes3 = name.includes("FontEnd"); //false

const startsWith = name.startsWith('and'); //false
const startsWith1 = name.startsWith('Easy'); //true
const startsWith2 = name.startsWith('easy'); //false

const endsWith = name.endsWith('and'); //false
const endsWith1 = name.endsWith('FrontEnd'); //true
const endsWith2 = name.endsWith('fontEnd'); //false

console.log(includes);
console.log(includes1);
console.log(includes2);
console.log(includes3);
console.log(startsWith);
console.log(startsWith1);
console.log(startsWith2);
console.log(endsWith);
console.log(endsWith1);
console.log(endsWith2);

//todo:Làm việc với chuỗi con
//*slice có hỗ trợ số âm.Số âm thì được đếm ngược từ cuối chuỗi
//*subtring thì xem số âm là số 0 cho phép start > end 
//*slice(start,end)    subtring(start,end)
const name = 'Easy and FrontEnd';
const slice = name.slice(0, 4); //Easy
const slice1 = name.slice(2); //sy and FrontEnd
const slice3 = name.slice(-3); //End
const slice4 = name.slice(-3, -1); //En

const substring = name.substring(0, 4); //Easy
const substring1 = name.substring(2); //sy and FrontEnd

console.log(slice);
console.log(slice1);
console.log(slice3);
console.log(slice4);
console.log(substring);
console.log(substring1);


//todo:Tìm kiếm và thay thế chuỗi
//*replace(searchFor,replaceWith):Tìm kiếm và thay thế một searchFor bởi replaceWith
//*replaceAll(searchFor,replaceWith):Tìm kiếm và thay thế tất cả searchFor bởi replaceWith
const name = "Easy and FrontEnd";
const replace = name.replace(' ', '-');
console.log(replace); //Easy-and FrontEnd

const name = "Easy and FrontEnd";
const replaceAll = name.replaceAll(' ', '-');
console.log(replaceAll); //Easy-and-FrontEnd


//todo:Tìm hiểu split and join
//*split():string to array
//*join():array to string
const name = "Easy and FrontEnd";
const split = name.split(' ');
const split1 = name.split('a');
console.log(split); //['Easy', 'and' ,' FrontEnd']
console.log(split1); //['E', 'sy' , 'nd FrontEnd']
console.log(split.length) //3

const name = ['Easy', 'and', 'FrontEnd'];
const join = name.join();
const join1 = name.join('-');
console.log(join); //Easy,and,FrontEnd
console.log(join1); //Easy-and-FrontEnd


//capitalize:viết hoa
//rest:còn lại
//firstLetter:chữ cái đầu tiên
function capitalize(str) {
    if (str === '') return '';
    const firstLetter = str.charAt(0).toUpperCase();
    const rest = str.slice(1).toLowerCase();
    return `${firstLetter}${rest}`;
}
console.log(capitalize(''));
apitalize
console.log(capitalize('ABC')); //Abc
console.log(capitalize('Easy And FRONTend')); //Easy and frontend


function hasEmail(str) {
    return str.includes('@gmail.com');
}
console.log(hasEmail('abc@gmail.com')); //true
console.log(hasEmail('abc@gmail')); //false

function hasEmail(str) {
    return str.indexOf('@gmail.com') >= 0;
}
console.log(hasEmail('abc@gmail.com')); //true
console.log(hasEmail('abc@gmail')); //false


function parameterize(str) {
    const lowerCaseStr = str.toLowerCase();
    return lowerCaseStr.replaceAll(' ', '-');
}
console.log(parameterize('Code JS Is Fun')); //code-js-is-fun


function parameterize(str) {
    const lowerCaseStr = str.toLowerCase();
    return lowerCaseStr.split(' ').join('-');
}
console.log(parameterize('Code JS Is Fun')); //code-js-is-fun


function truncate(text, maxlength) {
    if (text.length <= maxlength) return text;
    const shortStr = text.slice(0, maxlength - 1);
    return `${shortStr}\u2026`;
}
console.log(truncate('Easy', 4)); //Easy
console.log(truncate('Easy FrontEnd', 4)); //Eas...



//todo:Exercise
//Tìm và xóa các nguyên âm trong câu văn
function removeVowel(str) {
    if (str === '') return '';
    const check = str.replaceAll('u', '').replaceAll('e', '').replaceAll('o', '').replaceAll('a', '').replaceAll('i', '');
    return check.trim();
}
console.log(removeVowel('say hello')); //sy hll


function formatSeconds(seconds) {
    if (seconds < 0 || seconds > 60) return -1;
    let str = seconds.toString().length;
    let result = '';
    if (str === 1) {
        result = '\'0' + seconds + '\'';
    } else if (str === 2) {
        result = '\'' + seconds + '\'';
    }
    return result.trim();
}
console.log(formatSeconds(0));
console.log(formatSeconds(55));
console.log(formatSeconds(60));


function formatTime(seconds) {
    const SECONDS_PER_HOUR = 3600;
    const SECONDS_PER_MIN = 60;
    let result = '';
    if (seconds < 0 || seconds > 86400) return -1;
    let hh = (Math.trunc(seconds / SECONDS_PER_HOUR)).toString();
    let hh1 = Math.trunc(seconds % SECONDS_PER_HOUR);
    let mm = (Math.trunc(hh1 / SECONDS_PER_MIN)).toString();
    let ss = (Math.trunc(hh1 - (mm * SECONDS_PER_MIN))).toString();
    if (hh.length === 1) {
        hh = '0' + hh;
    }
    if (mm.length === 1) {
        mm = '0' + mm;
    }
    if (ss.length === 1) {
        ss = '0' + ss;
    }
    return result = hh + ':' + mm + ':' + ss;
}
console.log(formatTime(86400));
console.log(formatTime(16));
console.log(formatTime(3600));


function isSecureUrl(url) {
    const checkHttps = url.indexOf('https://');
    const checkWss = url.indexOf('wss://');
    if (checkHttps === 0 || checkWss === 0) {
        return true;
    }
    return false;
}
console.log(isSecureUrl('http://abc.com'));
console.log(isSecureUrl('https:ezfrontend.com'));
console.log(isSecureUrl('wss://abc.com'));
console.log(isSecureUrl('ws://abc.com'));


function isSecureUrl(url) {
    const checkHttps = url.startsWith('https://');
    return checkHttps;
}
console.log(isSecureUrl('http://abc.com'));
console.log(isSecureUrl('https://ezfrontend.com'));


function extractDomain(email) {
    if (email === '') return '\'' + '\'';
    const domain = email.split('@')[1];
    return domain;
}
console.log(extractDomain('alice@gmail.com'));
console.log(extractDomain('abob@abc.com'));
console.log(extractDomain(''));


function extractDomain(email) {
    if (email === '') return '\'' + '\'';
    const index = email.indexOf('@');
    const domain = email.slice(index + 1);
    return domain;
}
console.log(extractDomain('alice@gmail.com'));
console.log(extractDomain('abob@abc.com'));
console.log(extractDomain(''));


//Secret:mat ma
function findSecret(code) {
    if (code === code.toUpperCase()) return '\'' + '\'';
    let result = '';
    let length = code.length;
    for (let i = 0; i < length; i++) {
        if (code[i] === code[i].toLowerCase()) {
            result += code[i];
        }
    }
    return result;
}
console.log(findSecret('SUPERCODE'));
console.log(findSecret('SUPERhelloCODE'));
console.log(findSecret('eaABFHsyUEYSJfrontJSKJSHend'));



function getFullName(firstName = '', lastName = '') {
    let result = '';
    if (lastName === '' && firstName === '') {
        return '\'' + '\''
    } else if (lastName === '') {
        const handleFirstName0 = firstName.charAt(0).toUpperCase();
        const handleFirstName1 = firstName.slice(1).toLowerCase();
        result = `${handleFirstName0}${handleFirstName1}`;
    } else if (firstName === '') {
        const handleLastName0 = lastName.charAt(0).toUpperCase();
        const handleLastName1 = lastName.slice(1).toLowerCase();
        result = `${handleLastName0}${handleLastName1}`;
    } else {
        const handleFirstName0 = firstName.charAt(0).toUpperCase();
        const handleFirstName1 = firstName.slice(1).toLowerCase();
        const handleLastName0 = lastName.charAt(0).toUpperCase();
        const handleLastName1 = lastName.slice(1).toLowerCase();
        result = `${handleFirstName0}${handleFirstName1} ${handleLastName0}${handleLastName1}`
    }
    return result.trim();
}
console.log(getFullName('Alice'));
console.log(getFullName('Alice', ''));
console.log(getFullName('', 'Nguyen'));
console.log(getFullName('Bod', 'Tran'));
console.log(getFullName('join', 'pHAm'));