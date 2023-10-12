import { Main } from '../src/app.js';

describe("A suite of tests for the berlin clock of the main class", function(){
    const main = new Main();

    it("clock funtion should return *", function() {
        let result = main.clock(1);

        expect(result).toBe("*");
    });
    it("clock function should return ** ", function(){
        let result = main.clock(2);
        
        expect(result).toBe("**");
    });
    it("clock function should return *** ", function(){
        let result = main.clock(3);
        
        expect(result).toBe("***");
    });
});
