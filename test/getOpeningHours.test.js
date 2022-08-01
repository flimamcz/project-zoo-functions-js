const { getOpeningHours, openOrClosed, fix12 } = require('../src/getOpeningHours');

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

  it('Verifica se a função fix12 retorna um objeto quando passado os parametros', () => {
    expect(fix12(12, 12, 12)).toEqual({ h: 0, o: 0, c: 0 });
  });

  it('Verifica se a função openOrClosed é uma função', () => {
    expect(openOrClosed()).toBeFalsy();
  });

  it('Verifica se a função passando os parâmetros (period, hour, open, closed) retorna true se tiver no horario', () => {
    expect(openOrClosed('PM', 12, 8, 6)).toBeTruthy();
  });

  it('Verifica se a função passando os parâmetros (period, hour, open, closed) retorna falsy', () => {
    expect(openOrClosed('AM', 12, 8, 6)).toBeFalsy();
  });

  it('Verifica se ao passar um dia `Monday` e um horário (`08:30-AM`), retorna: The zoo is closed', () => {
    expect(getOpeningHours('Monday', '08:30-AM')).toEqual('The zoo is closed');
  });

  it('Verifica se ao passar um dia `Tuesday` e um horário (`08:30-AM`), retorna: The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '08:30-AM')).toEqual('The zoo is open');
  });

  it('Verifica se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toEqual('function');
  });

  it('Verifica se ao passar uma hora com minutos inválido retorna um erro', () => {
    expect(() => {
      getOpeningHours('Tuesday', '08:1220-AM');
    }).toThrowError('The minutes must be between 0 and 59');
  });

  it('Verifica se ao passar uma hora inválida retorna um erro', () => {
    expect(() => {
      getOpeningHours('Tuesday', '14:10-AM');
    }).toThrowError('The hour must be between 0 and 12');
  });

  it('Verifica se ao passar um tipo de hora (AM, PM) inválida retorna um erro', () => {
    expect(() => {
      getOpeningHours('Tuesday', '14:10-JG');
    }).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Verifica se ao não passar o o segundo parâmetro do tipo de hora (08:05-AM) retorna um erro', () => {
    expect(() => {
      getOpeningHours('Tuesday', '');
    }).toThrowError('The hour should represent a number');
  });

  it('Verifica se ao passar um dia inválido retorna um erro', () => {
    expect(() => {
      getOpeningHours('qualquercoisa', '14:10-AM');
    }).toThrowError('The day must be valid. Example: Monday');
  });
});
