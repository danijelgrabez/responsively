import responsively from '../';

const responsive = responsively([480, 768, 990, 1170]);

describe('Tests for responsively function', () => {
  it('check result for one input value', () => {
    expect(responsive('margin')([1])).toBe('margin: 1px;');
  });

  it('contains added property array values with accompanied breakpoints', () => {
    const result = responsive('margin')([1, 2, 3]);
    const params = ['margin', '1px', '2px', '3px', '480px', '768px'];
    params.forEach(param => expect(result).toContain(param));
  });

  it('doesn\'t contain property which is not passed', () => {
    const result = responsive('margin')([1]);
    const params = ['padding'];
    params.forEach(param => expect(result).not.toContain(param));
  });
});
