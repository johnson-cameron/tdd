/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(options) {
        this.amountDue = options.amountDue;
        this.cashTendered = options.cashTendered;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        switch(type){
            case "quarter":
                this.cashTendered += 25;
                break;
            case "dime":
                this.cashTendered += 10;
                break;
            case "nickel":
                this.cashTendered += 5;
                break;
            case "penny":
                this.cashTendered += 1;
                break;
        }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {

    }

    giveChange() {
        // TODO return the correct change in the following format...
        return {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
    }
}