// -------------------------------------------

// findIndex()

// const elements = [
//     { id: 356, name: 'Telegram' },
//     { id: 357, name: 'Instagram'},
//     { id: 358, name: 'Facebook'}
// ]

// const findTelegram = (element) => element.id === 356;
// const findInstagram = (element) => element.id === 357;
// const findFacebook = (element) => element.id === 358;

// const foundTelegram = elements.findIndex(findTelegram);
// const foundInstagram = elements.findIndex(findInstagram);
// const foundFacebook = elements.findIndex(findFacebook);

// console. log(foundTelegram);
// console. log(foundInstagram);
// console. log(foundFacebook);

// -------------------------------------------

// forEach()

// const numbers = [10, 20, 30];

// numbers.forEach(function(item, index) {
//     console.log(`${index + 1}-chi o'rindagi son: ${item}`);
// });

// const users = [ 'ali', 'vali', "xo'ja"];

// users.forEach(function(user) {
//     const capitalizedUser = user.charAt(0).toUpperCase() + user.slice(1); 
//     // const yordamida capitalizedUser o'zgaruvchisi e'lon qilindi. user parametri tanlab olindi. 
//     // user parametrini charAt kalit so'zi yordamida 0-indexda turgan harfini kesib olindi.
//     // toUpperCase kalitso'zi yordamida uni katta harf qilindi
//     // slice kalit so'zi yordamida biz bergan indexdan boshlab qolgan matnni qo'shib beradi.
//     console. log(capitalizedUser);
//     // capitalizedUser o'zgaruvchisini consolega chiqardik
// });

// const mySiblings = ['shaxnoza', 'shodiya', 'foziljon', 'abduvohid']

// mySiblings.forEach(function(mySibling){
//     const formattedName = mySibling.charAt(0).toUpperCase() + mySibling.slice(1);
    
//     console. log(formattedName);
// })

// const myFriends = ['n.akbarali', 'm.abubakr', 'a.saydullo', "a.ne'matullo"];

// myFriends.forEach(function(myFriend){
//     const formattedName = myFriend.charAt(0).toUpperCase() + myFriend.charAt(1) + myFriend.charAt(2).toUpperCase() + myFriend.slice(3);

//     console.log(formattedName);
    
// })
