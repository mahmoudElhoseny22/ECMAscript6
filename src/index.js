//Template literals / Template Strings----------------
//(1) backtek ``  &  round bracket()
//(2) تم تغير عملية الربط فى الاصدار الاخير من خلال دولار ساين بدلا من الربط بال بالبلس
//  ex
// var name = "mahmoud";
// var age = "27" ;
// // var output = 'I\'\am '+name+' , and '+age+' years old';
// console.log(output);

// hgmodern version
// var name = "mahmoud";
// var age = 27;

// var outPut = `I'am ${name} , and I have ${age+2}  ... I'am ${age > 20 ? "too old" : "steill Young"}` ;

// console.log(outPut);

// ************************************************

// Var, Let and Const ----------------------------------
// ==========================
// // var is function scope
// ==========================

// function Person() {
//   var namex = "ahmed";
// }
// Person()
// console. log(namex)
// not block scope
// var nameScope = "ahned"
// var time = 5;
// if (time === 5){
//   var nameScope = "kareen"
// }
// console.log(nameScope)

// for(var i = 0; i <= 10; i++){

// }
// console.log(i)

// console.log(window)
// ================================
// // var  not support BlockScope
// ================================

// re-declared (إعادة تصريح )
// var myName = "ahmedAli" //re assign (إعادة إدخال)
// var myName = "ahmedMahmoud"
// var myName = "ahmed"
// console.log(myName);

// Hoising  (هي عملية ارسال البيانات لحين التعرف عليها داخل الذاكرة )

// Variable problems
// 1- var  not support BlockScope
//2-  does not support Scope  if  and for and while loop
//3- Take a place in the global ( ياخذ مكان فى السيستم وده بيعمل مشكلات كثير)
//4- Define more than one variable with the same name and it works normally  (تعريف اكثر من متغير بنفس الاسم ويشتغل عادي )

//=========== const = consten = يعني ثوابت =================
//defrant betwen let and const
//reject re-declard  //  reject re-declard (يعني مينفعش اعمل اكتر من متغير بنفس الاسم مع بعض ولكن عادي لو متغيرين بنفس الاسم مثلا فنكشن وواحد بره الفانكشن او متغير عادي وبنفس الاسم بتاع المتغير يكون فى الويندو اى جلوبل)
//enable re-assign  //  reject re-assign (معناها انى ادمر ةانشئ من جديد  )
// both support  function   //  block scope
// reject globally scoped
// ==========================
// re-declard (يعني اعمل متغير من اول وجديد )
// =========================
//************************************************************************************************************* */
//===================================
//Primitive Types vs Reference Types
//====================================
//(يعني البرمتف تايب ملهاش ميسود )
//Primitive type/prop: (immutabl types(غير قابلة للتعديل)) working: (pass by valu)
//undefined
//Boolean
//Number
//Strting
//Biglnt
//Symbol
// ===== ex ====
// let name = "mahmoud"
// name.push("s")
// console.log(name);

//reference type/ prop: (mutatbl type( قابلة للتعديل)) working: (pass by object)
//array, object, function, date
// ===== ex ====
// const name1 = ["mahmoud" , "ali"];
// name1 = ["mahmoud" , "ali"]; (اسمها ري اسيلن وده كده غلط مليون المية )(بمعني انى بعمل ديستروي (المتغير الاول )يعني بدمرها خالص من الميموري وبحط مكانها القيمة الجديدة )
// name.push("ali")
// name[0] = "mahmmoud"
// console.log(name)
// علشان ادخل قيمة للريفرنس هنا لكم انفذ الكود ده
// const name2 = object.assign([],name1);
// names.push("test")
// console.log(name2)
//***************************************************************************************** */

//=========================================
//Const & Objects (Array, Function & object) (استخدام ال const من الثلاثة دول )
//=========================================
//***************************************************** */
//=========================================
// Arrow function
//=========================================
//ex

// const myName = (parametr) => {
// }
// const myName = name or (name) =>{
//   console.log(name)
//    };

//********** (او بالشكل دة)***********/
// const myName = (name) =>{
//  return (name)
// };
// let x  = myName ("Ahmed")
// console.log(x);
//********** طالما هي ريتارن ممكن استخدم الشكل ده واشيل الكاري براكت واشيل كلمة ريتارن ***********/
// const myName = (name) => (name === "mahmoud" ? "hallo worlad" : "i dont no"); //or  name
// let x = myName("mahmoud");
// console.log(x);
// function person() {
// this.age = 0;

//   setInterval( growUp = () => {
//     var newAge = this.age++;
//     console.log(newAge)
//   },1000);
// }
// var growUp = new person();

//***************************************************** */

//=========================================
//Spread Operator (شغال مع الاراي ومع الاوبجكت)
//=========================================
//spread operator  {....}  [....] مهمته انه بيسحب نسخه بحيث انه كل نسخه لا تؤثر على التانية
//Array & object literals (safe clone / concat )
//ex
// const names1 = ["amhmoud", "ali"];
// // const names2 = Object.assign([], names1);
// const names2 = ["ahmed" , ...names1 , "zaki" ]
// console.log(names2);

//concat ex  array
// const array1 = ['a', 'b', 'c'];
// const array2 = ['a', 'b', 'c'];
// // const array3 = array1.concat(array2) (الاستخدام القديم)
// const array3 = [...array1 , ...array2 , "aa" , "dd"]
// console.log(array3)

//ex  object
// const obj1 = { name: "ahmed", age: 50 };
// const obj2 = { addres: "Giza" };
// const obj3 = { ...obj1, ...obj2, status: true };
// console.log(obj3);

//ex funcation call
//max & min

const number = [1, 2, 3, 4, 5, 6, 4];
const maxNum = Math.max(...number);
console.log(maxNum);

//ex funcation arguments
