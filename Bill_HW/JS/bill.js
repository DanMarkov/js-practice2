/* bill.js */

export default class Bill {
    constructor() {
        this.amounts = [];
    }
  
    /** @param {string} amountStr */
    addAmount(amountStr) {
        let amount = Number.parseInt(amountStr, 10);
        this.amounts.push(amount);
        return this.amounts;
         
    }
      
    getCount(){
        return this.amounts.length;
      }

    getTotal(){
        let result = 0;
        this.amounts.forEach(function(amount){
            result += amount;  
        });
        return result;
    }

    getAverage(){
        let result = this.getTotal() / this.getCount();
        return result;
    }
  }