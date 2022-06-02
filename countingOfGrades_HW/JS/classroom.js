/* classroom.js */

/** @param {number[]} grades */
/** @param {number[]} grades */
export const getNumberOfGrades = grades => {
    return grades.length;
  }
  
  /** @param {number[]} grades */
  export const getSumGrades = grades => {
     return grades.reduce((total, current) => {
         return total + current;
     }, 0);
  }
  
  /** @param {number[]} grades */
  export const getAverageValue = grades => {
     return getSumGrades(grades) / getNumberOfGrades(grades);
  }
  
  /** @param {number[]} grades */
  export const getPassingGrades = grades => {
     return grades.filter(grade => {
         return grade >= 10;
     });
  }
  
  /** @param {number[]} grades */
  export const getFailingGrades = grades => {
    return grades.filter(grade => {
        return grade <= 9;
    });
  }
  
  /** @param {number[]} grades */
  export const getRaisedGrades = grades => {
     return grades.map(grade => {
        return grade < 20 ? grade + 1 : undefined;
     });
  }