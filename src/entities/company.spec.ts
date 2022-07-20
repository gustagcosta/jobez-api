import { User, UserProps } from './user';
import { Company, CompanyProps } from './company';

let props: CompanyProps;

beforeEach(() => {
  props = new Company({
    user: new User({
      name: 'Gustavo Costa',
      email: 'gustavo@gmail.com',
      password: '12345678',
    }),
    cnpj: '68.714.096/0001-93',
  });
});

describe('test company entity', () => {
  test('should create a regular company', () => {
    const candidate = new Company(props);

    expect(candidate.cnpj).toBe(props.cnpj);
    expect(candidate.id).toBeTruthy();
  });

  test('should throw a cnpj error', () => {
    props.cnpj = '777';

    expect(() => new Company(props)).toThrowError(new Error('invalid cnpj'));
  });
});
