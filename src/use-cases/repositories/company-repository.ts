import { Company } from '../../entities/company';

export interface CompanyRepository {
  getById(id: string): Promise<Company>;
  create(company: Company): Promise<void>;
}
