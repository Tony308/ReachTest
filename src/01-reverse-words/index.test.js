const reverseWordsInSentence = require('.');

describe('reverseWordsInSentence', () => {
  it('Given a string, reverses each word in the sentence', () => {
    expect(
      reverseWordsInSentence('Reach PLC is the largest publisher in the UK!'),
    ).toEqual('hcaeR CLP si eht tsegral rehsilbup ni eht !KU');

    expect(reverseWordsInSentence('javascript is an awesome language')).toEqual(
      'tpircsavaj si na emosewa egaugnal',
    );
  });

//   /** CUSTOM TEST CASES */
//   it.each([
//     ["a", "a"],
//     ["za", "az"],
//     ["a z", "a z"],
//     ["tpircsavaj si na emosewa egaugnal", "javascript is an awesome language"],
//     ["hcaeR CLP si eht tsegral rehsilbup ni eht !KU", "Reach PLC is the largest publisher in the UK!"]
//   ])("given: (%s), expect: (%s)", (string, expected) => {
//     const actual = reverseWordsInSentence(string);
//     expect(actual).toEqual(expected);
//   })
});
