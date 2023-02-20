/*
Given a tonic, or starting note, and a set of intervals, generate the musical scale starting with the tonic and following the specified interval pattern.



wholeStep
*/

const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']

/*
starting from an index other than 0
store initial value
iterate till the end of the array

*/


class Scale {
    constructor(tonic) {
        this.tonic = tonic
      }
    
      chromatic() {
        throw new Error('Remove this statement and implement this function');
      }
    
      interval(intervals) {
        if (intervals === 'm2') {
            const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
            // if (this.tonic = ) {

            // }
        }

      }
}
// ABCDEFG
// [A,A#,B,C,C#,D,D#,]
const regNotes = ['A', 'C', 'D', 'F', 'G']

const scale = []

const sharpIt = (notes) => {
  for(let i = 0; regNotes.length; i++){
      if (regNotes[i] === notes){
        return regNotes[i] + '#';
      } else if (notes === 'B'){
        return 'C';
      } else if (notes === 'E'){
        return 'F';
      }
  }
}

console.log(sharpIt('B'));