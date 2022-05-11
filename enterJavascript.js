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

    function area(length, width) {
        return length * width;
    }

    var rectanglesAreas = [];
    rectanglesAreas.push(area(10,15));
    rectanglesAreas.push(area(14,2));
    rectanglesAreas.push(area(4,5));
    console.log(rectanglesAreas);


    var bankBalance = 500;

    function makeTransaction(priceOfSale) {
        if (priceOfSale <= bankBalance) {
            bankBalance -= priceOfSale;
            console.log("Purchase Successful");
        } else {
            console.log("Insufficient Funds");
        }
    }

    console.log(bankBalance);
    makeTransaction(79.00);
    console.log(bankBalance);
    makeTransaction(232);
    console.log(bankBalance);
    makeTransaction(1000);

    var transaction = function(priceOfSale) {
        if (priceOfSale <= bankBalance) {
            bankBalance -= priceOfSale;
            console.log("Purchase Successful");
        } else {
            console.log("Insufficient Funds");
        }
    }

    transaction(10);



   



