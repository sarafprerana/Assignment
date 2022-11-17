

//Array Declaration
const Name1 = ["Ovi","Aarohi","Kavya"];
document.write(Name1);

//Array POP():-- remove last ele
const code1= ["Banana", "Orange", "Apple", "Mango"];
document.write(code1)
code1.pop();
document.write(code1);


//Array push()----add new element at the end of array
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits1);
fruits.push("Kiwi");
document.write(fruits1);


//Array shift() Method----remove 1st ele 
const st= ["Banana", "Orange", "Apple", "Mango"];
document.write(st);
fruits.shift();
document.write(st);


//Array splice() method 
const fruit = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruit);
fruits.splice(2, 1, "Lemon", "Kiwi");
document.write(fruit);

//2-----position 
//1-----how many ele remove

const company1 = {
  name: 'Patheya',
  address: 'Pune',
  city: 'Pune',
  state: 'Maharashtra',
  pincode: 411041,
  active: true
};
document.write('Company: ', company1);
document.write('Company Name: ', company1.name);


//Nested objects
const company = {
  name: 'Patheya',
  address: {
     mail: 'S.n. 16/2 Pune',
     email: 'connect@patheya.tech'
  },
  city: 'Pune',
  state: 'Maharashtra',
  pincode: 411041,
  active: true
};
document.write('Company Nested: ', company);
document.write('Company email: ', company.address.email);


// String Concat
let str = "Hello";
let str1 = "World!";
let str2= str.concat(" ",str1);
document.write(str2);


//string replaceAll() method
let test2=" my first web page";
let test3=test2.replaceAll("m","M");
document.write(test3);


// string trimStart / trimEnd() method
let code3 = "     Hello World!    ! ";
let text2 = code.trimEnd();
document.write(text2);


//string pdding(padStart/padEnd) method
let text = "3911";
var text1=text.padStart(10,"x");
document.write(text1);//.innerHTML = text.padStart(10,"x");


//string charAt() method
var t = "HELLO WORLD";
let a=t.charAt(7);
document.write(a);


//Map 
let num1=[25];
let newmap=num1.map(Math.sqrt);
document.write(newmap);


//append using map
var arraydata = ["Practical"];
var newarray=arraydata.map(res=>res+" " +"test");
document.write(newarray);


//Using Map----.get()/set() method 
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
text9=fruits.set("apples",800);
text8=fruits.get("apples");
document.write(text8);


//delete() Method-----Using Map
const Name=new Map([
  ["a",1],
  ["b",2],
  ["c",3],
  ["d",4]
]);
let code=Name.delete("e");
document.write(code);








