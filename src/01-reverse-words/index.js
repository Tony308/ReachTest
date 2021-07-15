/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

/**
 * Average and worst case time complexity (Big-O) of my function is: O(n)
 * Explain: accessing and inserting into array is O(1) but unshift() includes 
 * re-assigning indexes which makes it O(n). In addition to the 2x loops, also O(n)
 *
 */
function reverseWordsInSentence(input) {
  // TODO
  const answer = input.split(" ").map(word => {
    let reversedWord = [];
    
    word.split("").forEach((letter) => {
      reversedWord.unshift(letter);
    });
    
    return reversedWord.join("");
  }).join(" ");
  return answer;
};

module.exports = reverseWordsInSentence;