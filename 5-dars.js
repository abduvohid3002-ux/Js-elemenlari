// =======================================
// Amaliyot

// sayHello();

// function sayHello() {
//   console.log("Salom, Declaration!");
// }

// sayHello();

// sayHi();

// const sayHi = function() {
//   console.log("Salom, Expression!");
// };

// sayHi();

// ---------------------------------------

// function multiply(a, b) {
//     return a * b;
// }

// const multiply = function(a, b) {
//     return a * b;
// }

// const resultMultiply = multiply(3, 4);

// const divide = function(a, b) {
//     return a / b;
// }

// function divide(a, b) {
//     return a / b;
// }

// const resultDivide = divide(56, 7);

// function getAge(birthYear) {
//     return 2026 - birthYear;
// } 

// const getAge = function(birthYear){
//     return 2026 - birthYear;
// }

// const myAge = getAge(2004);

// console. log(resultMultiply);
// console. log(resultDivide);
// console. log(myAge);

// --------------------------------------

// const checkAction = function(number){
//     let qoldiq = number % 2;
//     let result = number / 2;
//     if (qoldiq == 1){
//         console. log("Bu son toq");
//     }
//     else{
//         console. log(result)
//     }
// }

// const checkAction = function(numb){ // const yordamida chechAction funcsiyasi yaratildi, function yordamida numb o'zgaruvchi qo'shildi
//   let qoldiq = numb % 2; // let yordamida qoldiq deb o'zgaruvchi yaratdik. qoldiq o'zgaruvchisiga numb qiymatini 2 ga bo'lib qoldig'ini yukladik
//   let result = numb / 2;
//   if(qoldiq == 1){
//     console.log("Bu son toq")
//   }
//   else(
//     console.log(`Natija: ${result}`)
//   )
// }

// const myResult = checkAction(261674831762);

// console. log(myResult);

// --------------------------------------

// const isLoggedIn = true;
// let welcomeMessage;

// if (isLoggedIn){

// }

// --------------------------------------
// const qandaydirFucntion = (function(a, b) {
//   return a * b;
// })(42, 26);

// console.log(qandaydirFucntion);

// --------------------------------------

// const isLoggedIn = false; 

// // 2. Funksiyani saqlash uchun bo'sh o'zgaruvchi yaratamiz
// let welcomeMessage;

// // 3. Shartli tekshiruv (Logic)
// if (isLoggedIn) {
//     // Agar foydalanuvchi kirgan bo'lsa, welcomeMessage'ga birinchi funksiyani yuklaymiz
//     welcomeMessage = function() {
//         console.log("Xush kelibsiz! Sizning shaxsiy kabinetingiz tayyor.");
//     };
// } else {
//     // Agar kirmagan bo'lsa, boshqa bir funksiyani yuklaymiz
//     welcomeMessage = function() {
//         console.log("Iltimos, avval tizimga kiring yoki ro'yxatdan o'ting.");
//     };
// }

// // 4. Funksiyani chaqiramiz
// welcomeMessage();

// const role = "admin";

// let showDashboard;

// switch (role){
//     case "admin":
//         showDashboard = function() {console. log("Barchasiga ruxsat bor")};
//         break;
//     case "user":
//         showDashboard = function() {console. log("Shaxsiy ma'lumotlariga huquqi bor")};
//         break;
//     default:
//         showDashboard = function() {console. log("Taqiqlangan")};
// };

// showDashboard();


// let showDashboard;

// const role = (showDashboard) => {
//     if (showDashboard == admin) {
//         console. log("Barcha ma'lumotlarni ko'rishingiz mumkin");
//     }

//     if else(showDashboard == user) {
//         console. log("Fqat o'")
//     }

//     else{
//         console. log()
//     }
// };
// ============================================
// Amaliyot yakuni
// ============================================
// Arrow function
// const kvadrat1 = (number1, number2) => {
//     return number1 * number2;
// }

// const kvadrat2 = number => {number * number};

// const kvadrat3 = () => {console. log("Kvadrat")};

// kvadrat3();
// ============================================

// ============================================
// Array

// const literalLanguage = ['js', 'java', 'python'];

// const newLanguage = new Array('js', 'java', 'python');

// const emptyArray = [];

// const numberArray = [1, 3, 9];

// const stringArray = ['salom', 'hayr', 'lol'];

// // Array items -------------------------------

// const mixedArray = [true, 'salom', 2, null];

// console. log(mixedArray);

// console. log(mixedArray[0]); // true

// console. log(mixedArray[1]); // salom

// console. log(mixedArray[2]); // 2

// console. log(mixedArray[3]); //  null

// ------------------------------------------

// const language = ['js', 'unshift'];

// language.push('go');

// console. log(language); // ['js', 'unshift', 'go']

// language.unshift('python');

// console. log(language); // ['python', 'js', 'unshift', 'go']

// -------------------------------------------

// const language = ['python', 'js', 'unshift', 'go'];

// language [1] = 'django';

// console. log(language); // ['python', 'django', 'unshift', 'go'];

// -------------------------------------------

// const language = ['python', 'js', 'unshift', 'go'];

// const delLanguage = language.pop(); // go is deleted

// console. log(language); // ['python', 'js', 'unshift']
// console. log(delLanguage); // go

// const language = ['python', 'js', 'unshift', 'go'];
// const delLanguage = language.shift();

// console. log(language); // ['js', 'unshift', 'go']
// console. log(delLanguage); // python

// -------------------------------------------

// const language = ['python', 'js', 'unshift', 'go'];

// console. log(language.length); // 4

// ===========================================

// ===========================================

// Array methods

// -------------------------------------------

// concat()

// const box1 = [1, 3, 5, 7, 9, 11, 13, 15, '10'];
// const box2 = [2, 4, 6, 8, 10, 12, 14, 16];

// const result = box1.concat(box2);
// console. log(result);
// console.log(box1);
// console.log(box2);

// -------------------------------------------

// indexOf()

// const indexNumber1 = box1.indexOf(9);
// const indexNumber2 = box1.indexOf(10);
// console. log(indexNumber1); // 4
// console. log(indexNumber2); // -1 == "undefined"
