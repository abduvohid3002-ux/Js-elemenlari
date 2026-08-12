// const chegaraTop = (max, min, number) => {
//     if (number < min || number > max){
//         return `Bu ${number} soni ${min} va ${max} orasida emas`;
//     }

//     return `Bu ${number} soni ${min} va ${max} orasida`;
// }

// const minRange = 1;
// const maxRange = 30;
// const giveNumber = 3;

// console.log(chegaraTop(maxRange, minRange, giveNumber));

// const sneakers = [ 
//     {name: "Samsung", price: 90},
//     {name: "Nike Air", price: 120},
//     {name: "Adidas Ultra", price: 350},
//     {name: "Pume Suede", price: 250},
//     {name: "Jordan 1", price: 600}
// ]; // O'zgaruvchilar yaratildi

// const minPrice = 100; // minimal narx belgilandi
// const maxPrice = 500;   // maximal narx belgilandi

// for (let i = 0; i < sneakers.length; i++) { // for ochildi va har bir elementni tekshirib chiqish uchun shart berildi
//     if (sneakers[i].price >= minPrice && sneakers[i].price <= maxPrice) { // if yordamida belgilangan chegaradagi sonlarni qabul qilish haqida mantiq yozildi.
//         // bunda i tartib raqamidagi elementning narxini olinadi va belgilangan minimal narxdan kattaligini tekshiriladi
//         // keyin belgilangan maximal narxdan kichkinaligin tekshiriladi, agar shartlarga mos bo'lsa consolega chiqariladi.
//         console.log(sneakers[i].name + " - " +sneakers[i].price);
// }};

// let memory = 0;
// const history = [];


// const calculate = (number1, number2, oper) => {
//     let result;

//     if (oper === '/' && number2 === 0){
//         return "Xato: Sonni nolga bo'lib bo'lmaydi";
//     }

//     switch(oper) {
//         case '+':
//             result = number1 + number2;
//             break;
//         case '-':
//             result = number1 - number2;
//             break;
//         case '*':
//             result = number1 * number2;
//             break;
//         case '/':
//             result = number1 / number2;
//             break;
//         case '^':
//             result = number1 ** number2;
//             break;
//         case '%':
//             result = number1 % number2;
//             break;
//         default:
//             return `Aniqlanmagan amaliyot`;
//         }

//     history.push(`${number1} ${oper} ${number2} = ${result}`);
//     memory += result;

//     return result;
// };

// const memoryAdd = (value) => {
//     memory += value;
// };

// const memoryClear = () => {
//     memory = 0;
// };

// const getMemory = () => {
//     return memory;
// };

// const getHistory = () => {
//     return history;
// };


// console.log(calculate(5, 3, '^'));  // 125 (5 ning kubi)
// console.log(calculate(500, 10, '%')); // 50 (500 ning 10 foizi)
// console.log(calculate(10, 5, '+'));  // 15

// // Keling, natijalardan birini xotiraga saqlaymiz
// memoryAdd(125); 
// console.log(getMemory()); // "Xotiradagi son: 125"

// console.log("--- Qilingan amallar tarixi ---");
// console.log(history);
