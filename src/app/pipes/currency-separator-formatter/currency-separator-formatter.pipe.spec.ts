import { CurrencySeparatorFormatterPipe } from './currency-separator-formatter.pipe';

describe('CurrencySeparatorFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencySeparatorFormatterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format currency', () => {
    const pipe = new CurrencySeparatorFormatterPipe();
    expect(pipe.transform('€20.00')).toBe('€ 20,00');
  });
});
