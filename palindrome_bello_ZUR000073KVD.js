// class NotPalindromeError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "NotPalindromeError";
//   }
// }

class CascadingPalindrome {
  constructor(input) {
    // if (!this.isPalindrome(input)) {
    //   throw new NotPalindromeError("Input is not a palindrome.");
    // }

    this.input = input;
    this.palindrome = this.findPalindrome();
  }

  isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
  }

  findPalindrome() {
    const components = this.input.split(" ");
    const palindromes = components.filter((el) => this.isPalindrome(el));
    return palindromes.join(" ");
  }

  getCascadingPalindrome() {
    return this.palindrome;
  }
}

// Example usage and validation
// Valid input

// try {
//   const example1 = new CascadingPalindrome("1230321");
//   console.log(example1.getCascadingPalindrome()); // Output: "1230321 is a valid palindrome"
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   const example2 = new CascadingPalindrome("1230321 09234 0124210");
//   console.log(example2.getCascadingPalindrome()); // Output: "1230321 0124210"
// } catch (error) {
//   console.error(error.message);
// }

const example1 = new CascadingPalindrome("1230321");
console.log(example1.getCascadingPalindrome()); // Output: "1230321"

const example2 = new CascadingPalindrome("1230321 09234 0124210");
console.log(example2.getCascadingPalindrome()); // Output: "1230321 0124210"

const example3 = new CascadingPalindrome("abcd5dcba 1230321 09234 0124210");
console.log(example3.getCascadingPalindrome()); // Output: "abcd5dcba 1230321 0124210"

const example4 = new CascadingPalindrome("level");
console.log(example4.getCascadingPalindrome()); // Output: "level"

const example5 = new CascadingPalindrome("madam");
console.log(example5.getCascadingPalindrome()); // Output: "madam"

// Invalid input

const example6 = new CascadingPalindrome("");
console.log(example6.getCascadingPalindrome()); // Output: ""

const example7 = new CascadingPalindrome("hello javascript");
console.log(example7.getCascadingPalindrome()); // Output: ""

const example8 = new CascadingPalindrome("abc def ghi");
console.log(example8.getCascadingPalindrome()); // Output: ""

const example9 = new CascadingPalindrome("123456789");
console.log(example9.getCascadingPalindrome()); // Output: ""

const example10 = new CascadingPalindrome("00011010");
console.log(example10.getCascadingPalindrome()); // Output: ""
