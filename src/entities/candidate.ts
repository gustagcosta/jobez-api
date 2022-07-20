import { BaseEntity } from './common/base';
import { Resume } from './resume';
import { User } from './user';

export type CandidateProps = {
  user: User;
  cpf: string;
  date_birth: Date;
  resumes?: Resume[];
};

export class Candidate extends BaseEntity {
  public user: User;
  public cpf: string;
  public date_birth: Date;
  public resumes: Resume[];

  constructor(props: CandidateProps, id?: string) {
    super(id);

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if (!cpfRegex.test(props.cpf)) {
      throw new Error('invalid cpf');
    }

    const today = new Date().getTime();

    if (props.date_birth.getTime() >= today) {
      throw new Error('invalid date birth');
    }

    Object.assign(this, props);
  }
}
