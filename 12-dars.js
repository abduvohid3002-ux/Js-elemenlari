
// const cartElements = [ // cartElements deb array ochildi
//     { name: "Laptop", price: 1200, number: 7 },
//     { name: "Phone", price: 700, number: 14 },
//     { name: "Watch", price: 150, number: 29 } // ichiga3 ta object kiritildi
// ];

// const resultCart = cartElements.map(item => { //const yordamida resultCart o'zgaruvchisi yaratildi. cartElementlarini map yordamida aylanib chiqdik.
// //     // 1. Dastlabki hisob-kitob
//     const totalPrice = item.price * item.number; 


//     // 2. Aksiya shartlarini aniqlash (Chegirma %)
//     let discountPercent = 0;

//     if (item.number >= 20) {
//       discountPercent = 30;
//     } else if (item.number >= 10) {
//       discountPercent = 20;
//     } else if (item.number >= 5) {
//       discountPercent = 10;
//     }
    
//     const chegirma = (totalPrice * discountPercent) / 100;
//     const amountToPay = totalPrice - chegirma;

//     // 3. Keshbek shartlarini aniqlash
//     let keshbekAmount = 0;
//     if (item.price >= 1000) {
//         keshbekAmount = amountToPay * 0.2;
//     } else if (item.price >= 500) {
//         keshbekAmount = amountToPay * 0.1;
//     }

//     // 4. Yangi ob'ektni qaytarish
//     return {
//         ...item,
//         totalPrice,
//         chegirma,
//         "To'lashingiz lozim": amountToPay,
//         "Keshbekingiz": keshbekAmount > 0 ? keshbekAmount : "Sizda keshbek yo'q"
//     };
// })

// const totalBill = resultCart.reduce((sum, item) => {
//     // Har safar oldingi yig'indiga (sum) yangi mahsulot narxini qo'shamiz
//     return sum + item["To'lashingiz lozim"];
// }, 0); // 0 — bu bizning boshlang'ich nuqtamiz (hali hech narsa sotib olmagan paytimiz)

// console.log(`Hurmatli mijoz, jami to'lovingiz: $${totalBill}`);

// console.log(resultCart);
