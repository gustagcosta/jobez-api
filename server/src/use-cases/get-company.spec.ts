import { Company } from '../entities/company';
import { User } from '../entities/user';
import { GetCompany } from './get-company';
import { InMemoryCompanyRepository } from './shared/in-memory-company-repository';

const company = new Company({
  user: new User({
    name: 'Gustavo Costa',
    email: 'gustavo@gmail.com',
    password: '12345678',
  }),
  cnpj: '68.714.096/0001-93',
});

describe('test create company use case', () => {
  test('show execute a regular create company use case', async () => {
    const companyRepository = new InMemoryCompanyRepository();

    const getCompany = new GetCompany(companyRepository);

    await companyRepository.create(company);

    const companyFinded = await getCompany.execute(company.id as string);

    expect(companyFinded.id).toBe(company.id);
  });
});
