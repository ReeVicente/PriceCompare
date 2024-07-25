import { MbitFormatterPipe } from './mbit-formatter.pipe';

describe('MbitFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new MbitFormatterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format mbit', () => {
    const pipe = new MbitFormatterPipe();
    expect(pipe.transform(20)).toBe('20 Mbit/s');
  });
});
