import { KeysPipe } from './keys.pipe';

describe('KeysPipe', () => {
  it('create an instance', () => {
    const pipe = new KeysPipe();
    expect(pipe).toBeTruthy();
  });

  it('test basic functionality', () => {
    const pipe = new KeysPipe();
    const testObject = {
      a: 'b',
      c: 'd'
    }

    expect(pipe.transform(testObject)).toEqual([
      {key: 'a', value: 'a'},
      {key: 'c', value: 'c'},
    ])
  });
});
