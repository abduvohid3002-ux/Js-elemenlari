// ==================================
// Operatorlar: Operand_1 operator Operand_2
// Arifmetik (arifmetic)
// Solishtirish (comparison)
// Tayinlash (assignment)
// Mantiqiy (logical)
// Uchlik (ternary)

// ----------------------------------

// Arifmetik opertorlar:

// + qo'shish || son1 + son2
// - ayrish || son1 - son2
// * ko'paytirish || son1 * son2
// / bo'lish || son1 / son2
// % qoldiqni topish || son1 % son2
// ++ 1 taga ko'paytirish || son1++ yoki ++son1
// -- 1 taga kamaytirish || son1-- yoki --son2

// let a = 7;
// let b = 7;

// console. log(a + b); // 14
// console. log(a - b); // 0
// console. log(a * b); // 49
// console. log(a / b); // 1
// console. log(a % b); // 0
// console. log(a++); // 7
// console. log(a); // 8
// console. log(++a); // 9
// console. log(a); // 9
// console. log(b--); // 7
// console. log(b); // 6
// console. log(--b); // 5
// console. log(b); // 5

// ----------------------------------

// Comparison operators:

// == Turini hisobga olmagan holda 2 operandni tengligini solishtirish
// === Turi va qiymati bo'yicha 2 operandni solishtirish
// != Ikki operandni notengligini solishtirish
// > Chap tarafsagi qiymat o'ngdagidan katta bo'lsa true qiymat qaytaradi, aks holda false
// < O'ng tarafdagi qiymat chapdagidan katta bo'lsa true qiymat qaytaradi, aks holda false
// >= Chap tarafdagi qiymat o'ngdagiga teng yoki katta bo'lsa true, yo'qsa false
// <= o'ng tarafdagi qiymat chapdagidan katta yoki teng bo'lsa true, yo'qsa false

// let a = 5, b = 6, c = "5";

// console. log(a == c);
// console. log(a === c);
// console. log(a != b); // console.log bu consolega biz bergan qiymatlarni chiqarishga yordam beradi. a bu o'zgaruvchi nomi va uning qiymati 5 ga teng. != bu biz bergan qiymatlarni bir biriga teng emasligini bildirib beradi. Agar qiymatlar teng bo'lmasa true natijasini beradi.
// console. log(a > b);
// console. log(a < b);
// console. log(a >= c);
// console. log(a <= c);

// -----------------------------------

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
