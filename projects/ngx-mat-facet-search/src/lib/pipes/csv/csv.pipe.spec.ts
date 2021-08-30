import {CSVPipe} from './csv.pipe';

describe('CSVPipe', () => {
  it('create an instance', () => {
    const pipe = new CSVPipe();
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

    const pipe = new CSVPipe();
    expect(pipe.transform(testArray, 'valueField', ',')).toEqual('a,b');
  });

  it('test array two', () => {

    const testArray = [
      {
        1: 'a'
      },
      {
        1: 'b'
      }
    ];

    const pipe = new CSVPipe();
    expect(pipe.transform(testArray, '1', '/')).toEqual('a/b');
  });
});
