describe("ChangeHandler", function() {

    // Constructor tests
    it("initializes with the given amountDue", function() {
        const change = new ChangeHandler({
            amountDue: 100
        });
        expect(change.amountDue).toBe(100);
    });
    it("initializes cashTendered to 0", function() {
        const change = new ChangeHandler({
            cashTendered: 0
        });
        expect(change.cashTendered).toBe(0);
    });

    // Insert coin tests
    it("insert quarter adds 25", function() {
        const change = new ChangeHandler({
            cashTendered: 0
        });
        change.insertCoin("quarter");
        expect(change.cashTendered).toBe(25);
    });

    it("insert dime adds 10", function() {
        const change = new ChangeHandler({
            cashTendered: 0
        });
        change.insertCoin("dime");
        expect(change.cashTendered).toBe(10);
    });

    it("insert nickel adds 5", function() {
        const change = new ChangeHandler({
            cashTendered: 0
        });
        change.insertCoin("nickel");
        expect(change.cashTendered).toBe(5);
    });

    it("insert penny adds 1", function() {
        const change = new ChangeHandler({
            cashTendered: 0
        });
        change.insertCoin("penny");
        expect(change.cashTendered).toBe(1);
    });

    it("subsequent coins continue to add value", function() {
        const change = new ChangeHandler({
            cashTendered: 0
        });
        change.insertCoin("quarter");
        change.insertCoin("dime");
        change.insertCoin("nickel");
        change.insertCoin("penny");
        expect(change.cashTendered).toBe(41);
    });

    // isPaymentSufficient tests
    it("isPaymentSufficient returns true when enough cashTendered", function() {
        
    });

    it("isPaymentSufficient returns false when not enough cashTendered", function() {
        
    });
    
    it("isPaymentSufficient returns true when exact cashTendered", function() {
        
    });

    // Give change tests
    it("giveChange returns no coins when exact change", function() {
        
    });

    it("giveChange returns correct coins for 10", function() {
        
    });

    it("giveChange returns correct coins for 27", function() {
        
    });

    it("giveChange returns correct coins for 68", function() {
        
    });

    it("giveChange returns correct coins for 15", function() {
        
    });

    it("giveChange returns correct coins for 2", function() {
        
    });

});