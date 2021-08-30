import {FilterPipe} from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('test array one', () => {

    const testArray = [
      {
        valueField: 'a'
      },
      {
        valueField: 'b'
      }
    ];

    const pipe = new FilterPipe();
    expect(pipe.transform(testArray, 'valueField', 'a')).toEqual([{valueField: 'a'}]);
  });
});
