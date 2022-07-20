import { Company } from '../entities/company';
import { Job, JobStatus } from '../entities/job';
import { User } from '../entities/user';
import { CreateJob } from './create-job';
import { InMemoryJobRepository } from './shared/in-memory-job-repository';

const generateJob = () => {
  return new Job({
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
      jobs: [],
    }),
  });
};

const job = generateJob();

const jobRepository = new InMemoryJobRepository();

describe('test create job use case', () => {
  test('show execute a regular create job use case', async () => {
    const createJob = new CreateJob(jobRepository);

    await createJob.execute(job);

    expect(jobRepository.jobs).toHaveLength(1);
  });

  test('show execute a regular create job use case', async () => {
    for (let index = 0; index < 5; index++) {
      job.company.jobs.push(generateJob());
    }

    const createJob = new CreateJob(jobRepository);

    await expect(createJob.execute(job)).rejects.toThrowError(
      new Error('jobs limit reached')
    );
  });
});
