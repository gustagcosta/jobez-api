import { Company } from "../../entities/company";
import { CompanyRepository } from "../repositories/company-repository";

export class InMemoryCompanyRepository implements CompanyRepository {
  public companies: Company[];

  constructor() {
    this.companies = [];
  }
  
  async getById(id: string): Promise<Company> {
    const company = this.companies.find((i) => id) as Company;
    if (company) {
      return company;
    } else {
      throw new Error('company not found');
    }
  }

  async create(company: Company): Promise<void> {
    this.companies.push(company);
  }
}