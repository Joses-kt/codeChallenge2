// Create the function called stringSwap
function stringSwap(line){
    // Create a variable for the final product
        let result = ""
    // The function iterates through each character
        for(let x = 0; x < line.length; x++){
            let letter = line.charAt(x)
    // If the code finds a letter in uppercase, it turns it to lowercase 
            if (letter === letter.toUpperCase()){
                result += letter.toLowerCase()
    // The letters in lowercase are then converted to uppercase
            } else { 
                result += letter.toUpperCase()
            }
        }
    // Return the result 
        return result
    }
    