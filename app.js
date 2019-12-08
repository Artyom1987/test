// // console.log ('hello wold');
// // var get_current_age = function(date) {
// //     return new Date().getFullYear() - date;
// //     };
// //     alert(get_current_age(1987));



// // let birth = new Date(1987, 1, 19); //дата рождения
// // let year = birth.getFullYear();
// // let today = new Date();
// // document.write( today.getFullYear() - year - (today.getTime() < birth.setFullYear(year)) )

// let now = new Date(); //Текущя дата
// let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
// let dob = new Date(1987, 1, 19); //Дата рождения
// let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
// let age; //Возраст

// //Возраст = текущий год - год рождения
// age = today.getFullYear() - dob.getFullYear();
// document.write (age);