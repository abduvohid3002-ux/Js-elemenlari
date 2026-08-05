
// filter()
// const myFriends = ['n.akbarali', 'm.abubakr', 'a.saydullo', "a.ne'matullo"];

// const formattedNames = myFriends.map(
//     function(myFriend) {
//         return myFriend.charAt(0).toUpperCase() + myFriend.charAt(1) + myFriend.charAt(2).toUpperCase() + myFriend.slice(3);
//     }
// );

// const longNames = formattedNames.filter(
//   function(formattedName) {
//     return formattedName.length >= 10;
//   }
// )

// console.log(
//     longNames
// );

// Amaliyot -------------------------------------

// const cartElements = [
//     { name: "Laptop", price: 1200, number: 7},
//     { name: "Phone", price: 700, number: 14},
//     { name: "Watch", price: 150, number: 29}
// ];

// let updatedCartElements = cartElements.map(item => {
//     return {...item, totalPrice: item.price * item.number}
// });

// // console.log(updatedCartElements)

// let aksiya03 = updatedCartElements
//     .filter(function(aksiya1) {return aksiya1.number >= 20})
//     .map(function(aksiya2) {return {...aksiya2, chegirma: (aksiya2.totalPrice * 30) / 100}})
//     .map(function(aksiya3) {return {...aksiya3, "To'lashingiz lozim": aksiya3.totalPrice - aksiya3.chegirma}});

// let aksiya02 = updatedCartElements
//     .filter(function(aksiya1) {return aksiya1.number >= 10 && aksiya1.number < 20})
//     .map(function(aksiya2) {return {...aksiya2, chegirma: ((aksiya2.price * 20) / 100) * aksiya2.number}})
//     .map(function(aksiya3) {return {...aksiya3, "To'lashingiz lozim": aksiya3.totalPrice - aksiya3.chegirma}});

// let aksiya01 = updatedCartElements
//     .filter(function(aksiya1) {return aksiya1.number < 10 && aksiya1.number >= 5})
//     .map(function(aksiya2) {return {...aksiya2, chegirma: ((aksiya2.price * 10) / 100) * aksiya2.number}})
//     .map(function(aksiya3) {return {...aksiya3, "To'lashingiz lozim": aksiya3.totalPrice - aksiya3.chegirma}});

// const aksiyaCartElements = aksiya01.concat(aksiya02).concat(aksiya03);

// // console.log(aksiyaCartElements)

// let keshbek02 = aksiyaCartElements
//     .filter(function(keshbek1) {return keshbek1.price >= 1000})
//     .map(function(keshbek2) {return{...keshbek2, "Keshbekingiz": (keshbek2["To'lashingiz lozim"] * 0.2)}});

// let keshbek01 = aksiyaCartElements
//     .filter(function(keshbek1) {return keshbek1.price < 1000 && keshbek1.price >= 500})
//     .map(function(keshbek2) {return{...keshbek2, "Keshbekingiz": (keshbek2["To'lashingiz lozim"] * 0.1)}});

// let keshbek00 = aksiyaCartElements
//     .filter(function(keshbek1) {return keshbek1.price < 500})
//     .map(function(keshbek2) {return{...keshbek2, "Keshbekingiz": "Sizda keshbek yo'q"}})

// const resultCart = keshbek00.concat(keshbek01).concat(keshbek02);

// console. log(resultCart);
