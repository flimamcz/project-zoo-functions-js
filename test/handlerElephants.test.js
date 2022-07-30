const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se ao não receber nenhum parâmetro, retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Verifica se ao passar um valor diferente de string, retorna a frase `Parâmetro inválido, é necessário uma string`', () => {
    expect(handlerElephants(23)).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica se ao passar o parâmetro `names`, retorna um array de nomes', () => {
    const array = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(array);
  });

  it('Verifica se ao passar o parâmetro `count`, retorna o numero de elephants', () => {
    const count = 4;
    expect(handlerElephants('count')).toEqual(count);
  });

  it('Verifica se ao passar o parâmetro `averageAge`, retorna a média das idades dos elephants', () => {
    const ageMiddle = 10.5;
    expect(handlerElephants('averageAge')).toBeCloseTo(ageMiddle);
  });

  it('Verifica se ao passar o parâmetro que for uma string mas não uma função do switch, retorna null', () => {
    expect(handlerElephants('232323')).toBeNull();
  });
});
