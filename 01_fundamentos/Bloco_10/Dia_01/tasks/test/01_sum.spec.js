const sum = require("../01_sum");

describle("Exercise 01 - sum", () => {

  it("Verifica o retorno da função passando dois parametos", () => {
    expect(sum(4, 5)).toEqual(9)
  })

})