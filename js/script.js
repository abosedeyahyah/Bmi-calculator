


    let button = document.querySelector("#btn");
    let input = document.querySelector("#reset")
   
  
    // Function for reset button
   
   
    input.addEventListener("click",function(){
          document.querySelector("#reset")
        document.querySelector(".height").value = "";
        document.querySelector(".weight").value = "";
        document.querySelector("#result").value  = "";
     }
    );
      
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
   
     
   
    
   
function calculateBMI() {
  
    /* Getting input from user into height variable. */
    let height = parseInt(document
            .querySelector(".height").value);
  
    /* Getting input from user into weight variable.*/
    let weight = parseInt(document
            .querySelector(".weight").value);
  
    let result = document.querySelector("#result");
  
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  
    // If both input is valid, calculate the bmi
    else {
  
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
       
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : ${bmi}`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : ${bmi}`;
  
        else result.innerHTML =
            `Over Weight : ${bmi}`;
    }
}


