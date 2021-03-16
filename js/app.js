let date = new Date().getFullYear()
document.querySelector("footer h4").innerHTML = "Copyright © By <em>Hey-Shivam</em> "+ date;

let Screen = document.getElementById("screen");

let Buttons = document.querySelectorAll("button");

let screenValue = "";


for(items of Buttons){
    items.addEventListener("click", (c) => {
        buttonText = c.target.innerText;    
        Screen.value += buttonText
        // console.log(buttonText);

        

        if(buttonText == "C"){
            screenValue = ""
            Screen.value = screenValue;
        }
      
        else if(buttonText == "Null"){
            Screen.value = screenValue;
            }  
        else if(buttonText == "="){
            Screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            eval(screenValue);
        }
    })
}
