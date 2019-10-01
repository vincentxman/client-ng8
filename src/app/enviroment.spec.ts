import { environment } from '../environments/environment';

describe('enviroment', () => {
  it('should create an instance', () => {
    expect(environment.version).toBeTruthy();
  });
});
