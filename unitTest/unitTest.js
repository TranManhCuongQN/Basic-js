//*beforeAll chạy trước tất cả các hàm test
//beforeAll(() => console.log('1 - beforeAll'));
//*afterAll chạy sau tất cả các hàm test
//afterAll( () => console.log('1 - afterAll'));
//*beforeEach chạy trước 1 test case
//beforeEach( () => console.log('1 - beforeEach'));
//*afterEach chạy sau 1 test case
//afterEach( () => console.log('1 - afterEach'));
//test(' ', () => console.log('1 - test'));
//describe('Scoped / Nested block', () => {
//*beforeAll() chạy trước tất cả các test case trong describe
//beforeAll( () => console.log('2 - beforeAll'))
//*afterAll() chạy sau tất cả các test case trong describe 
//afterAll( () => console.log('2 - afterAll'));
//*beforeEach() chạy trước mọi test case trong describe
//beforeEach( () => console.log('2 - beforeEach'));
//*afterEach() chạy sau mọi test case trong describe
//afterEach( () => console.log('2 - afterEach'));
//test(' ', () => console.log('2 - test'));
//})


//*quy trình chạy
// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
//* Mình muốn chạy duy nhât 1 cái test case đó thôi thì thêm test.only

//*Kiểm tra object
// test('object assignment', () => {
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one: 1, two: 2});
// })