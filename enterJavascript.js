//useful tools: W3 and MDN for external resource. JSBin.com for live Javascript terminal and server
//new lesson - variables
    // var name = "Jack";
    // var age = 23;
    // var shootingScore = 45.6;
    // var message = "Hi my name is " + name + " I am " + age + " years old";

    //alert(message);

//new lesson - variables cont.

    // var firstName = "John";
    // var lastName = "JacobJingleHeimerSmith";
    // var dateOfBirth = "10-09-82";
    // var age = 23;
    // var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";

    // var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!";

    // console.log(loginWelcomeMessage);

// new lesson - numbers

    // var sum = 10 + 15;
    // var sub = 15 - 10;
    // var mul = 10 * 3;
    // var div = 9 / 3;
    // var mod = 10 % 3;

    // var msg = "10 / 3 = 3 with a remainder of " + mod;
    // var result = 10 * ((5 + 3) - 4);

    // console.log(result);

//new lesson - comparison operators

    // var myAccountBalance = 300;
    // var nikeSBShoes = 799.23;
    // var coupon = 500;
    // == equal to
    // === equal to value and type
    // <= less than or equal to 
    // >= greater than or equal to
    // !== not equal to 

    // var val1 = 23;
    // var val2 = "23";

    // if (val1 === val2) {
    //     console.log("twinning");
    // } else {
    //     console.log("one of these is not like the other");
    // }

    // if (nikeSBShoes <= myAccountBalance) {
    //     myAccountBalance = myAccountBalance - nikeSBShoes;
    //     //can be written as: myAccountBalance -= nikeSBShoes;
    //     console.log("we should buy these");
    //     console.log("Account Balance: " + myAccountBalance);
    // } 
    // else if (nikeSBShoes - coupon <= myAccountBalance) {
    //     console.log("We could allow this transaction with a coupon");
    //     myAccountBalance -= nikeSBShoes - coupon;
    //     console.log("remaining balance: " + myAccountBalance);
    // } 

    // else {
    //     console.log("Insufficient funds");
    // } 

//new lesson - logical operators

    // if (1 === 1 && 2 === 2 || "joe" === "joe") {
    //     console.log("these are true");
    // }

    // if (true && true) {
    //     console.log("these are the same");
    // }

    // if (1 === 3 || "joe" === "joe") {
    //     console.log("one of these are true");
    //     //this will log because || stands for or if this is true
    // }

//     var cat1 = 5;
//     var cat2 = 10;
//     var cat3 = 1;
//     var cat3disabledHandicap = false;

//     if (cat1 > cat2 && cat1 > cat3 && !cat3disabledHandicap) {
//         console.log("Cat 1 is cutest");
//     } else if (cat2 > cat1 && cat2 > cat3 && !cat3disabledHandicap) {
//          console.log("cat2 is the cutest");
//     } else if (cat3 > cat1 && cat3 > cat2 || cat3disabledHandicap) {
//         console.log("cat3 is cutest");
//     }

// new lesson - Arrays

    // var students = ["Timmy", "Janessa", "Arun"];

    // var naughtyList = [];

    // naughtyList.push(students[0]);

    // var index = naughtyList.indexOf("Timmy");

    // if (index > -1) {
    //     naughtyList.splice(index, 1);
    // }

    // console.log(naughtyList);

//new lesson - Loops

    // var total = 10
    // for (var x = 0; x < total; x++) {
    //     console.log(x);
    //         //x++ is just x = x + 1
    // }

    // var students = ["john", "jacob", "jingle", "himier", "schmidt"];
    // for (var index = 0; index < students.length; index++) {
    //     console.log(students[index]);
    // }

//new lesson - Functions

    // var length1 = 15; JUNK
    // var width1 = 10;
    // var area1 = length1 * width1;

    // var length2 = 12;
    // var width2 = 14;
    // var area2 = length2 * width2;

    // console.log(area1);
    // console.log(area2);

//     function area(length, width) {
//         return length * width;
//     }

//     var rectanglesAreas = [];
//     rectanglesAreas.push(area(10,15));
//     rectanglesAreas.push(area(14,2));
//     rectanglesAreas.push(area(4,5));
//     console.log(rectanglesAreas);


//     var bankBalance = 500;

//     function makeTransaction(priceOfSale) {
//         if (priceOfSale <= bankBalance) {
//             bankBalance -= priceOfSale;
//             console.log("Purchase Successful");
//         } else {
//             console.log("Insufficient Funds");
//         }
//     }

//     console.log(bankBalance);
//     makeTransaction(79.00);
//     console.log(bankBalance);
//     makeTransaction(232);
//     console.log(bankBalance);
//     makeTransaction(1000);

//     var transaction = function(priceOfSale) {
//         if (priceOfSale <= bankBalance) {
//             bankBalance -= priceOfSale;
//             console.log("Purchase Successful");
//         } else {
//             console.log("Insufficient Funds");
//         }
//     }

//     transaction(10);

//new lesson - Objects
//best practice for construct inLine
//------------------------------------------
    
    // var students = [];

    // function student(first, last, age) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     this.age = age;
    //     //establishing 'this' provides scope within the construct
    //     this.greeting = function() {
    //         return "Hi, I'm " + this.first + " and I'm " + age + " years old.";
    //     }
    // };

    // students.push(new student("jenny", "laga", 5));
    // students.push(new student("jimmy", "lapper", 6));
    // students.push(new student("john", "loper", 7));
    // //we now accomplished the lines below, with one line using a construct built above
    
    // //now lets go grab each key using a loop, not best practice but may see it. not very common just in case we see it in the wild

    // for (var key in student) {
    //     console.log(student[key]);
    // }
//--------------------------------------------
    

    // var student0 = {
    //     firstName: "Jayne",
    //     lastName: "Loo",
    //     age: 8,
    //     greeting: function() {
    //         return "Hi, I'm " + this.firstName + " and I'm " + age + " years old.";
    //     }
    //     //"this" refers to the properties inside of the object, scope dawg
    // };

    // console.log(student0.greeting());
    //---
    // var student1 = new Object();
    //     //creates a new empty object 
    // student1.firstName = "John";
    // student1.lastName = "Parker";
    // student1.age = 7;
    //     //this creates the same variable as above example just a different technique
    //---
    // var student2 = {};
    // student2.firstName = "zack";
    // student2.lastName = "bobo";
    // student2.age = 3;
    //---
    // var students = [];
    // students.push(student0);
    // students.push(student1);
    // students.push(student2);
    //---
    // console.log(students);
    //     //here we pushed the student information into the array and then logged it, showing age, name, last, etc.
    
//new lesson - Bind

    // this.car = "Honda Civic with Ugly Spoiler"

    // var marksGarage = {
    //     car: "Aston Martin",
    //     getCar: function() {
    //         return this.car;
    //     }
    // };

    // console.log(marksGarage.getCar());

    // var storeGetCarForLater = marksGarage.getCar;
    // //here i stored the function for later

    // console.log(storeGetCarForLater());
    // //this does not work because the function is now referring to "this" outside of the function found above in Alex's car. this is why we need to bind

    // var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
    // //using this var we have re-established scope by binding it to marksGarage 
    // console.log(theRealGetCarFunction);




   



