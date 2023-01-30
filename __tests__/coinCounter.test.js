import { coinCounter } from "../src/coinCounter.js";

describe('coinCounter', () => {

  test('should return a message if amount is not a number', () => {
    expect(coinCounter()).toEqual("Enter a number");
  });

  test('should return number of quarters', () => {
    expect(coinCounter(10)).toEqual(['Quarters: 40, Dimes: 0, Nickels: 0, Pennies: 0' ]);
  });

  test('should return number of dimes', () => {
    expect(coinCounter(5.20)).toEqual(['Quarters: 20, Dimes: 2, Nickels: 0, Pennies: 0' ]);
  });

  test('should return number of nickels', () => {
    expect(coinCounter(1.05)).toEqual(['Quarters: 4, Dimes: 0, Nickels: 1, Pennies: 0' ]);
  });

  test('should return number of pennies', () => {
    expect(coinCounter(1.01)).toEqual(['Quarters: 4, Dimes: 0, Nickels: 0, Pennies: 1' ]);
  });

}); 