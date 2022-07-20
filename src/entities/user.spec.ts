import { User, UserProps } from './user';

let props: UserProps;

beforeEach(() => {
  props = {
    name: 'Gustavo Costa',
    email: 'gustavo@gmail.com',
    password: '12345678',
  };
});

describe('test user entity', () => {
  test('should create a regular user', () => {
    const user = new User(props);

    expect(user.name).toBe(props.name);
    expect(user.email).toBe(props.email);
    expect(user.password).toBe(props.password);
    expect(user.id).toBeTruthy();
  });

  test('should throw a email error', () => {
    props.email = 'gustavo@test';

    expect(() => new User(props)).toThrowError(
      new Error('invalid email format')
    );
  });

  test('should throw a first name error', () => {
    props.name = 'G Costa';

    expect(() => new User(props)).toThrowError(
      new Error('first name must have at least 3 caracters')
    );
  });

  test('should throw a second name error', () => {
    props.name = 'Gus C';

    expect(() => new User(props)).toThrowError(
      new Error('second name must have at least 2 caracters')
    );
  });

  test('should throw a name error', () => {
    props.name = 'Gustavo';

    expect(() => new User(props)).toThrowError(
      new Error('user name must have at least two words')
    );
  });

  test('should throw a password size error', () => {
    props.password = '123';

    expect(() => new User(props)).toThrowError(
      new Error('password must have at least 8 caracters')
    );
  });

  test('should verify a exist user creation', () => {
    const id = '123';
    const user = new User(props, id);

    expect(user.id).toBe(id);
  });
});
