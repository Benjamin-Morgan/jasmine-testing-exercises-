const exp = require("constants");

it('should calculate the monthly rate correctly', function () {
  const values = { amount: 10000, years: 5, rate: 3.7 };
  expect(calculateMonthlyPayment(values)).toEqual('99.83')
});


it("should return a result with 2 decimal places", function () {
  const values = { amount: 15000, years: 3, rate: 4.5 };
  expect(calculateMonthlyPayment(values)).toEqual('297.47')
});

it('should retutn NaN if a string input', function () {
  const values = { amount: 'a number', years: 4, rate: 4 }
  expect(calculateMonthlyPayment(values)).toEqual('NaN')
});