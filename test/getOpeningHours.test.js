const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se ao não passar nenhum parâmetro retorna um objeto com todos os dias e horários', () => {
    const daysAndHours = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(getOpeningHours()).toEqual(daysAndHours);
  });

  it('Verifica se ao passar um dia `Monday` e um horário (`08:30-AM`), retorna: The zoo is closed', () => {
    expect(getOpeningHours('Monday', '08:30-AM')).toEqual('The zoo is closed');
  });
});
