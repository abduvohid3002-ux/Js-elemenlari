// Assignment operators:

// = chap operandga o'ng operandni qiymatini tayinlaydi || a = b
// += chap operandni o'ng operandga qo'shib, natijani chap operandga tayinlaydi || a += b
// -= chap operandni o'ng operanddan ayrib, natijani chap operandga tayinlaydi || a -= b
// *= chap operandni o'ng operandga ko'paytirib, natijani chap operandga tayinlaydi || a *= b
// /= chap operandni o'ng operandga bo'lib, natijani chap operandga tayinlaydi || a /= b
// %= chap operandni o'ng operandga bo'lib, natijaning qolg'ini chap operandga tayinlaydi || a %= b

// let a = 6, b = 4, c = 3;

// console. log(a); // 6
// a += b;
// console. log(a); // 10
// a -= c;
// console. log(a); // 7
// a *= b;
// console. log(a); // 28
// a /= c;
// console. log(a); // 9.(3)
// a %= b;
// console. log(a); // 1.(3)
// ===================================

// ===================================
// String bu belgilar ketma ketligidan tashkil topgan ma'lumot turidir.

// let ism = "Abduvohid";
// console. log(ism);

// let familiya = 'Toshpo\'latov'
// console. log(familiya);

// -----------------------------------

// Birlashtirish

// let ism = 'Abduvohid';
// let familiya = 'Toshpo\'latov'
// let message = 'Salom ' + ism + ' ' + familiya;
// console. log(message); 
// console. log(ism + " " + familiya);

// ------------------------------------

// Template literals

// ES6 template literals ko'rinishida string yaratish imkonini qo'shishdi:

// let ism = 'Abduvohid';
// let message = `Salom ${ism}!`;
// console. log(message);
// ====================================

// ====================================
// Mantiqiy opertorlar || Boolean logic

// Mantiqiy operatorlar "and", "or" va "not" qiymatlardan tashkil topgan.

// ------------------------------------
// and operatorida agar barcha qiymatlar truelardan tashkil topgan bo'lsa natijaviy qiymat true bo'ladi, aks holda 
// false qiymatini qabul qiladi.
// and = &&;
// or = ||;
// not = !;

// let a = false;
// let b = false;
// let c = true;
// let d = true;
// console. log(a && b);
// console. log(a && c);
// console. log(d && b);
// console. log(c && d);

// console. log(a || b);
// console. log(a || c);
// console. log(d || b);
// console. log(c || d);

// console. log(!a);
// console. log(!b);
// console. log(!c);
// console. log(!d);
// =====================================

// =====================================
// Turni (type) o'zgartirish
// conversion to number:

// const yosh = "23";
// console. log(Number(yosh) + 1);

// -------------------------------------

// conversion to string:

// const yil = 2026;
// console. log(String(yil) + '-yil');

// -------------------------------------

// Type coercion
// Type coercion - Js da operator turli xil qiymatlar ustida amallar bajarayotganimizda, 
// ulardan birining avtomatik boshqa turga o'tishiga aytiladi.

// Auto string coercion:
// console. log("Salom! mening yoshim " + 20 + " da");

// Auto number coercion:
// console. log("31" - "15" - 1);
