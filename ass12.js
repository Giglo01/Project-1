// program to check if the string is palindrome or not

let checkPalindrome = (stringg) => {
    return stringg === stringg.split("").reverse().join("");
};

console.log("Is Palindrome? : " + checkPalindrome("noon"));
console.log("Is Palindrome?: " + checkPalindrome("apple"));