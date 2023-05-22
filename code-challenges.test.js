// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// --------------------1) 
// Pseudo Code
// Input: a string of word(s)
// Output: returns a string with a coded message
// - Declare a variable to map a/e/i/o to their encoded counterparts 4/3/2/1
// - Create an array of encoded characters by iterating over each character of the input
// - In the iteration, each character should be converted to lowercase and checks if there's a character that needs to be converted
// - If there is, add the encoded value to a separate array, else it's just the original character added
// - Use the join method to connect the characters inside the array into a single string

const encoded = (string) => {
    const code = {
        "a": "4",
        "e": "3",
        "i": "1",
        "o": "0"
    }

    const encodedChars = Array.from(string, (char) => {
        const lowerCaseChar = char.toLowerCase()
        return code[lowerCaseChar] || char
    })

    return encodedChars.join("")
}
describe("encoded", () => {

    it("should encode 'Lackadaisical' to 'L4ck4d41s1c4l'", () => {
        const secretCodeWord1 = "Lackadaisical"
        expect(encoded(secretCodeWord1)).toBe("L4ck4d41s1c4l")
    })
    it("should encode 'Gobbledygook' to 'G0bbl3dyg00k'", () => {
        const secretCodeWord2 = "Gobbledygook"
        expect(encoded(secretCodeWord2)).toBe("G0bbl3dyg00k")
    })
    it("should encode 'Eccentric' to '3cc3ntr1c'", () => {
        const secretCodeWord3 = "Eccentric"
        expect(encoded(secretCodeWord3)).toBe("3cc3ntr1c")
    })
})

// --------------------2) 
// Pseudo Code:
// Input: an array of strings and a single letter
// Output: an array of strings (all the words that have that particular letter)
// - Use the filter method on the array of `words` to create a new array that only has the words that include the particular letter from the input
// - Use the lower case method to convert the words and the letter to lowercase so that comparing it will make it case-insensitive
// - If the word contains the letter, it is returned in the filtered array

const filterByLetter = (words, letter) => {
    return words.filter(word => word.toLowerCase().includes(letter.toLowerCase()))
}

describe("filterByLetter", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

    it("should return ['Mango', 'Apricot', 'Peach'] if the letter 'a' is chosen", () => {
        const filterLetterA = "a"
        expect(filterByLetter(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
    })

    it("should return ['Cherry', 'Blueberry', 'Peach'] if the letter 'e' is chosen", () => {
        const filterLetterE = "e"
        expect(filterByLetter(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})


// --------------------3) 
// Pseudo Code:
// Input: an array of 5 numbers
// Output: a boolean value (true if the array is a full house, false if not)
// -Use the length method to check if the array has exactly 5 numbers, otherwise it will return a string that states there isn't enough numbers
// -If it has 5 numbers in the array, it will be sorted in ascending order using the sort method and the comparator function. (Putting it in ascending order makes it easier to compare the numbers to see if there is a match)
// -Use conditionals to check if there is a full house in the array
// -One conditional checks if the first three elements in the sorted array are equal (to represent three of a kind) and the last two must be equal (to represent the pair)
// Used the logical OR to check if the other condition is met, which checks if the first two values are the same and the last three are the same 
// If any of the conditions are met, the return should be true, otherwise it will be false

const fullHouse = (array) => {
    if (array.length != 5) {
      return "Not enough numbers"
    }
    array.sort((a, b) => a - b)
    if (
      (array[0] === array[1] && array[0] === array[2] && array[3] === array[4]) ||
      (array[0] === array[1] && array[2] === array[3] && array[2] === array[4])
    ) {
      return true
    }
    return false
  }
  
  describe("fullHouse", () => {
    it("is true", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const hand4 = [7, 2, 7, 2, 7]
        expect(fullHouse(hand1)).toBe(true)
        expect(fullHouse(hand4)).toBe(true)
        })
    it("is false", () => {
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]
        expect(fullHouse(hand2)).toBe(false)
        expect(fullHouse(hand3)).toBe(false)
    })
    })