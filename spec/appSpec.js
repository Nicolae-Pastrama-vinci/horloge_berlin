import { Main } from '../src/app.js';

describe("A suite of tests for the berlin clock of the main class", function(){
    const main = new Main();

    it("clock funtion should return *", function() {
        let result = main.clock();

        expect(result).toBe("*");
    })
});
