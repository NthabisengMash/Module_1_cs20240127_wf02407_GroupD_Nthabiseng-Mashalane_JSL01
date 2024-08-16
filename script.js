function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = '';
    let validateButton = document.getElementById('circle-Btn');


    // TODO: Write your validation logic here

        const adopt = /^pet_[a-zA-Z0-9]+$/;
      
    // Check if the input matches the adopt

    if (adopt.test(input)) {
        result = "Valid Syntax.";
        validateButton.style.backgroundColor ='green';
    } else {
        result = "Invalid Syntax.";
        validateButton.style.backgroundColor ='red';
    }
        document.getElementById('result').innerText = result; 
    }

    
    


    


