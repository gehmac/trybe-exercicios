let randomNumberGenerator = require('./01_random-number')

it('Testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
  randomNumberGenerator = jest.fn().mockReturnValue(10);
    
  expect(randomNumberGenerator()).toBe(10);
  expect(randomNumberGenerator).toHaveBeenCalled();
  expect(randomNumberGenerator).toHaveBeenCalledTimes(1);
})
