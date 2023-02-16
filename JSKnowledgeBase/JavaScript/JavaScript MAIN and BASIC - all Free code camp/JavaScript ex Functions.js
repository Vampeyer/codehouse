

// functions Examples / 101 
//================================
//===#1. 

// - Saying thank you to a customer. 
// and calling a thank you function. 
//=====================

function sayThanks() { 
  
  return  console.log('Thank you , we appreciate your business')
}

sayThanks();

//===============================

// #2

//====================================

function sayThanks(name ) { 
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.' ); 
}
sayThanks('John');

// =========================================

// #3 using default parameters in functions 
// to create some re - useable code. 

// - =================================
 // - Copy and paste this code and you will revieve 
 // different default results , 
 // and a bot prompt....
// - - -


function greeting( name = ' Well hello there stranger...')
{ 
    console.log( ' Good afternoon ${name } .  Are you ready for your red pill today? Lets code already -  ')
}

greeting(); 

// 
//===============================================
  // - #4 
// - Make Shopping list function - 
// assigning default paramaters 
//....  and watch the syntax - 

function makeShoppinglist(item1 = 'milk' , 
item2 = 'bread' , item3 = 'eggs')  {
console.log(`Remember to buy ${item1}`);
console.log(`Remember to buy ${item2}`);
console.log(`Remember to buy ${item3}`);
}

///=============================================

//================================

// === # 5 - using optional function call backs.
 
function getReminder(){
    return console.log("Prtints reminder to the console to water the plants. ")
    console.log("Water the plants.");
}

function greetInSpanish{
  return console.log("Hola , como estas !  ") 
  console.log( "Buenas tardes");
}

//- call back on 
getReminder();
greetInSpanish();


//===========================

// #6 , ultra super powerful functionalized 
        // - functions/   a.k.a. Helper functions. or 
        // functions within a function. 

        //- this example makes quick work of monitors , 
    // their count , rows , columns , and final price. 
function monitorCount(rows, columns) { 
    return rows * columns; 
}

function costOfMonitors(rows, columns ) { 
    return monitorCount(rows, columns) * 200 ;
}
const totalCost = constOfMonitors(5, 4) ; 
console.log(totalCost);


//-=========================================

// #7 pointing with the functions 
// - - pointer functions. 

//from 
const plantsNeedWater = function(day) {
    if (day === 'Wednesnay') {
        return true ; 
    } else {
        return false ;
    }
};

plantsNeedWater();

// into 

const plantsNeedWater 



























































