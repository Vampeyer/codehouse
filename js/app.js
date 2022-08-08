
 //alert("Warning , you are entering the coolest  website ever");
 // confirm("If you wish to continue press Okay. ");


let btn = document.querySelector('button')
let list = document.querySelector('.list')

btn.addEventListener('click', () => {
   if(list.style.display === 'none' ){
      list.style.display = 'block' ;
   }else{
    list.style.display = 'none' ; 
   }
} )

// NOTHING HERE YET.

// = = = = 








let band = {
   Band : "K7Army",
   nationality: 'American',
   age: 3410,
   isAdmin: true,
   courses: ['html', 'css', 'js', 'bad assed shows'],
   spouse: null,
   location : 'mars',
   availability : 'Hit us up and ask ',  

 };


 console.log(band)







// ====Very short description of JavaScript Functionality in code . ===== // 

//--------------------------------------------------------------------------------------------------------------------------
  // - Alert and Confirm Description - // 
// - line 2   - - - -passes a string value into the JRE using the -  alert - function , which is then opened , displays the -"string text value" 
// in a window  -,  and 
//       then prompts a click to continue.
// - line 3 ,   - - - - then passes a string value into the JRE using the - confirm - function , in which the prompt both displays the 
//'string text value ' , through the JRE , but also has an additional confirm button that then prompts the user to be sure that they will proceed, 
// (this implicitly returns a Boolean value to the user that is determining if it is the (coolest website and that is (=== true )); .
//------------------------------------------------------------------------------------------------------------
 // - Nav Menu Button - // 
// lines 6 - 15  - - - creates the JavaScript for the button action within the drop down menu, 
// -Starting on line 6 a decleration is used ,the - let - declaration , this declares a variable , a variable of btn.
//  the btn variable is then declared as a Boolean Function to be true with the one equal sign , 
// addressing the - document.querySelector - method , this then targets the (' button') element -

// - on line 7 -------the same process is repeated , however while using the - let  - declaration , the variable is now named list
// the value of this is then again DECLARED to be equal to the same, document.querySelector method , 
// however this time targeting the class , the class of .list

// Moving forward ,  on line 9 -------the -  btn  - variable as discussed above is run , with the .addEventListener method.
// this creates a listening event for the btn variable. 
// - This   .addEventListener method , then uses a click event , to listen to. 
// , giving us something like 
//
// - btn.addEventListener('click') 
//  
// Further methods can be called within this function , and is seperated, inside ,  by the seen parentheses () ,
// -giving us an option like 
//btn.addEventListener('click' ,() )       -  which is then given the condition of , 
// btn.addEventListener('click' ,   () =>    {}    )      - note the brackets to be a seperate method, in which we can imply rules. 

// in this case I choose a if / else statement which is placed into this code as such 
// if () {} else {} , written as a Boolean Expression , it is formatted at such . 

// if true do ()   , if not true do {}
// else , do {} 

// which is then closed in code with  corresponding
 //   )  and } symbols    
//----------------------------------------------------------------------------------------------
// - Code on lines 20 and 21 , dictate the string of text ,in the h2 section of the tied HTML file. 
//
// code on line 20 uses the - const -  declaration  to declare the variable  , provideservicesjavascript , to a  document.querySelector that
// specifically is assigned to the (h2)
// element
//
//code on line 21 starts with the  variable sayhellojavascript, and applies the method .textContent. giving us 
//, sayhellojavascript.textContent 
// as the .textContent method , is obviously a method , 
// in which the targeted element , in this case the h2 element , 
// is targeted and a string of text is applied.  this seems to be a string based method. 
// all in all the h2 element is now set to display the sayhellojavascript variable , 
// and will display its string value of     'Hello worlddd!'   in the h2 element on the targeted HTML
// 
//----------------------------------------------------------------------------------------------
// Code on lines 
//
// - Code on lines 25 and 26 , dictate the string of text ,in the h4 section of the tied HTML file. 
//
// code on line 25 uses the - const -  declaration  to declare the variable  , provideservicesjavascript , to a  document.querySelector that
// specifically is assigned to the (h4) element
//
//code on line 26 starts with the  variable provideservicesjavascript, and applies the method .textContent ,  giving us , provideservicesjavascript.textContent 
//as the .textContent method , is obviously a method , 
// in which the targeted element , in this case the h4 element , 
// is targeted and a string of text is applied.  this seems to be a string based method. 
// all in all the h4 element is now set to display the sayhellojavascript variable , 
// and will display its string value of   'Quality Services'  in the h4 element on the targeted HTML. 
// 
//----------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------
// - Code on lines 41 - 51    - updated  

// this code allows the variable student to be declared ,   
// the variable is assigned multiple values for the object within , 
// outcomte is then displayed in condole.log
//
//
//
//-------------------------------------------------------------------------------------------


// - To identify passing grade , go to console , in the developer settings ,
// and click on object. There you will see specific student details. 
