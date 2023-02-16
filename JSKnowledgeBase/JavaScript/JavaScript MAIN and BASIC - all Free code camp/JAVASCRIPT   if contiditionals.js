let raceNumber = Math.floor(Math.random() * 1000);
let early = true; 
let age = 19;

if (early && age > 18 ){ 
     raceNumber += 1000; 
}

if (early && age > 18) { 
	raceNumber += 1000;
 }

if (early && age > 18) { 
	console.log("Your race will begin at 9:30 ,
        your race number is : " + raceNumber); 
 } else if (age < 18 && !early) { 
   console.log("Your race will begin at 11:00am ");
 }

if  (age === 18) { 
 console.log(" Hello sir or mam, please approach the 18 yo front desk thank you ") 
