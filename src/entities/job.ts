import { BaseEntity } from './common/base';
import { Company } from './company';

export enum JobStatus {
  'OPEN',
  'CLOSED',
  'CANCELED',
  'EXPIRED',
}

export type JobProps = {
  title: string;
  description: string;
  lower_salary: number;
  upper_salary: number;
  salary_is_negociate: boolean;
  created_at: Date;
  expires_at: Date;
  status: JobStatus;
  company: Company;
};

export class Job extends BaseEntity {
  public title: string;
  public description: string;
  public lower_salary: number;
  public upper_salary: number;
  public salary_is_negociate: boolean;
  public created_at: Date;
  public expires_at: Date;
  public status: JobStatus;
  public company: Company;

  constructor(props: JobProps, id?: string) {
    super(id);

    const today = new Date().getTime();

    if (props.expires_at.getTime() <= today) {
      throw new Error('invalid expiration date');
    }

    if (props.lower_salary <= 0 || props.upper_salary <= 0) {
      throw new Error('invalid salaries values');
    }

    if (!props.title || !props.description) {
      throw new Error('missing title or description');
    }

    Object.assign(this, props);
  }
}
