
/**
 * Missing Letters
 * 
 * Return the missing letters in between the input. Input is expected to be an
 * array of always-increasing letters.
 * 
 * Operation: Store a marker `currentInt` containing the ASCII code of the first
 * letter. For each subsequent letter, save any letters in-between i.e. [a, c]
 * -> [97, 99] -> 
 * @param {[string]} input 
 * @return {[string]} missing letters, or [] if the input was empty
 */
function missingLetters(input) {
    // Sanitize input
    if (input == null || input.length == 0) {
        return [];
    }

    let marker = input[0].charCodeAt(0); // 0 because only 1 element in str
    let missing = [];

    // First item, all the way to the 2nd to last
    for (let index = 0; index < input.length; index++) {
        let ascii = input[index].charCodeAt(0);

        while (marker < ascii - 1) {
            marker++;
            missing.push(String.fromCharCode(marker))
        }

        // Reset: 
        marker = ascii
    }

    return missing;
}

let res;

res = missingLetters(['a','b','c','d','f'])
console.log(res)
// Expect: ['e']

res = missingLetters(['a','b','c','d','e','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z'])
console.log(res)
// Expect: ['f','g','v']
