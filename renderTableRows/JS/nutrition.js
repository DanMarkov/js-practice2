/* nutrition.js */
/**
 * @param {array[][]} rows
 */
 export const renderTableRows = rows => {
    return `<tr>
    ${rows.map(row => `<td>${row}</td>`).join("  ")}
    </tr>`;
  }

  