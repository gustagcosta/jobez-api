import { Company } from '../entities/company';
import { User } from '../entities/user';
import { CreateCompany } from './create-company';
import { CompanyRepository } from './repositories/company-repository';

class InMemoryCompanyRepository implements CompanyRepository {
  public companies: Company[];

  constructor() {
    this.companies = [];
  }

  async create(company: Company): Promise<void> {
    this.companies.push(company);
  }
}

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
    const createCompany = new CreateCompany(companyRepository);

    await createCompany.execute(company);

    expect(companyRepository.companies).toHaveLength(1);
  });
});
