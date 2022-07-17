import { Candidate } from './candidate';
import { BaseEntity } from './common/base';
import { User } from './user';

export type ResumeProps = {
  candidate: Candidate;
  path: string;
  title: string;
};

export class Resume extends BaseEntity {
  public candidate: Candidate;
  public path: string;
  public title: string;

  constructor(props: ResumeProps, id?: string) {
    super(id);

    if (!props.path || !props.title) {
      throw new Error('missing properties');
    }

    Object.assign(this, props);
  }
}
