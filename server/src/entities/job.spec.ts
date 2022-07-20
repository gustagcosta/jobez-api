import { Candidate } from './candidate';
import { Company } from './company';
import { Job, JobProps, JobStatus } from './job';
import { User } from './user';

describe('test resume entity', () => {
  let props: JobProps;

  beforeEach(() => {
    props = {
      title: 'cool job',
      description: 'cool description',
      lower_salary: 1200,
      upper_salary: 3600,
      salary_is_negociate: false,
      created_at: new Date(2022, 7, 17),
      expires_at: new Date(2022, 7, 27),
      status: JobStatus.OPEN,
      company: new Company({
        user: new User({
          name: 'Gustavo Costa',
          email: 'gustavo@gmail.com',
          password: '12345678',
        }),
        cnpj: '68.714.096/0001-93',
      }),
    };
  });

  test('should create a regular resume', () => {
    const job = new Job(props);

    expect(job.title).toBe(props.title);
    expect(job.description).toBe(props.description);
    expect(job.lower_salary).toBe(props.lower_salary);
    expect(job.upper_salary).toBe(props.upper_salary);
    expect(job.salary_is_negociate).toBe(props.salary_is_negociate);
    expect(job.status).toBe(props.status);
    expect(job.id).toBeTruthy();
  });

  test('should throw a expiration date error', () => {
    props.expires_at = new Date();

    expect(() => new Job(props)).toThrowError(
      new Error('invalid expiration date')
    );
  });

  test('should throw a salary error', () => {
    props.lower_salary = 0;
    props.upper_salary = 0;

    expect(() => new Job(props)).toThrowError(
      new Error('invalid salaries values')
    );
  });

  test('should throw a cnpj error', () => {
    props.title = '';
    props.description = '';

    expect(() => new Job(props)).toThrowError(
      new Error('missing title or description')
    );
  });
});
