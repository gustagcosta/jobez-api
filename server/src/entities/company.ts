import { BaseEntity } from './common/base';
import { Job } from './job';
import { User } from './user';

export type CompanyProps = {
  user: User;
  cnpj: string;
  jobs?: Job[];
};

export class Company extends BaseEntity {
  public user: User;
  public cnpj: string;
  public jobs: Job[];

  constructor(props: CompanyProps, id?: string) {
    super(id);

    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;

    if (!cnpjRegex.test(props.cnpj)) {
      throw new Error('invalid cnpj');
    }

    Object.assign(this, props);
  }
}
