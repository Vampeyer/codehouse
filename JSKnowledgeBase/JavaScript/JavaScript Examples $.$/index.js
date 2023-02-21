let newObj = {
    "newBox": "newKey007", 
    "one": "One", 
    "two:": "Two", 
    "three": { 
        "boxOne": "Empty", 
        "boxTwo": "Empty",
        "boxThree": "theCorrectKey007007 " , 
    }
}

/*
function bodyOnLoad(){
     alert("this is called on the bodyOnLoad function.")
}

function windowOnLoad() { 
    console.log("this is the window onload.")
}

window.onload = windowOnLoad(); // the window.onload overrides the body onload method



//
*/
function bodyOnLoad(){
     alert("this is called on the bodyOnLoad function.")
}
/*
function windowOnLoad() { 
    console.log("this is the window onload.")
}

window.onload = windowOnLoad();
*/




// now lets change this code or text , 
/*     
 
*/
function pTag (){

    
    let greetings = "Hello" + " How are you doing today ? "

document.getElementById("Par").innerHTML = greetings

//document.querySelector("#Par").innerText = greetings
greetings = "Helloo"
} 

// instead of pTag(); being called here , it is clled in the body in the 
// onload attribute. 

















