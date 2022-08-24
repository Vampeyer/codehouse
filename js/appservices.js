
 alert("Warning , you are entering the coolest  website ever");
 confirm("If you wish to continue press Okay. ");


let btn = document.querySelector('button')
let list = document.querySelector('.list')

btn.addEventListener('click', () => {
   if(list.style.display === 'none' ){
      list.style.display = 'block' ;
   }else{
    list.style.display = 'none' ; 
   }
} )






const provideservicesjavascript = document.querySelector('h4');
provideservicesjavascript.textContent ='Quality Services';




// NOTHING HERE YET.

// = = = = 

let student = {
   Grade : "student has passed",
   name: 'Jake T.',
   age: 31,
   isAdmin: true,
   courses: ['html', 'css', 'js'],
   spouse: null
 };


 console.log(student)






// ==== = = ==



//
// lines 22 and 23  * - appservices.js , only //
// -In here , specifically for the page ,  


// this code allows the variable provideservicesjavascript to be declared ,  using the const declaration. 
// then declares the value of that long variable name , to a function called document.querySelector , and then targets the ('h4') element.

// the variable providedervicesjavascript , is then called through a function , 
// that uses a method called  .textContent    , .textContent seems to be a string value , as the string value is then set 
// to display a text string of "Quality Services" in the ("h4") element, 
// - which is then further styled with the css file to display as is. 



// the console.log function, works , as it is then passed through the JRE , and then displays a text in the 
// in the console , indicating a string value of "student has passed".

// - to see this , look in the console




//------------------------------------------------------------------------------------
// - Code on lines 32 and 33 in /js/app.js and /js/app.js - 

// this code allows the variable student to be declared ,   
// then allpws the string text to be valued at the student variable
// then the console.log function is called and calls the (student) value to be placed in the console.log function
//then ,as the student variable  is then passed into the function here, 
// the console.log function, works , as it is then passed through the JRE , and then displays a text in the 
// in the console , indicating a string value of "student has passed".

// - to see this , look in the console


//-------------------------------------------------------------------------------------------