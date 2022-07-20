import { Company } from '../entities/company';
import { Job, JobStatus } from '../entities/job';
import { User } from '../entities/user';
import { DeleteJob } from './delete-job';
import { InMemoryJobRepository } from './shared/in-memory-job-repository';

const jobRepository = new InMemoryJobRepository();

const job = new Job({
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

describe('test delete job use case', () => {
  test('show execute a regular delete job use case', async () => {
    await jobRepository.create(job);
    const deleteJob = new DeleteJob(jobRepository);
    await deleteJob.execute(job.id as string);
    expect(jobRepository.jobs).toHaveLength(0);
  });
});
