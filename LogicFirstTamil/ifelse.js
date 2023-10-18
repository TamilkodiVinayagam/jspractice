/*function isPalindrome(sentence) {
    // Remove non-alphanumeric characters including ?
    let cleanedSentence = sentence.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Check if the cleaned sentence is equal to its reverse
    return cleanedSentence === cleanedSentence.split('').reverse().join('');
}

let sentence ="how are you " //"Was it a car or a cat I saw?"; palindrome
if (isPalindrome(sentence)) {
    console.log(sentence + " is a palindrome.");
} else {
    console.log(sentence + " is not a palindrome.");
}*/
function calculateElectricityBill(units) {
    let totalAmount = 0;

    if (units <= 50) {
        totalAmount = units * 0.75;
    } else if (units <= 150) {
        totalAmount = 50 * 0.75 + (units - 50) * 1.00;
    } else if (units <= 250) {
        totalAmount = 50 * 0.75 + 100 * 1.00 + (units - 150) * 1.30;
    } else {
        totalAmount = 50 * 0.75 + 100 * 1.00 + 100 * 1.30 + (units - 250) * 1.50;
    }

    return totalAmount;
}

// Example usage
let units = 75; // Change the value to calculate the bill for different units
let amount = calculateElectricityBill(units);
console.log("Electricity Bill Amount: Rs." + amount.toFixed(2));