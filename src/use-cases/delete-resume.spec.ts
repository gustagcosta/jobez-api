import { Candidate } from '../entities/candidate';
import { Resume } from '../entities/resume';
import { User } from '../entities/user';
import { DeleteResume } from './delete-resume';
import { InMemoryResumeRepository } from './shared/in-memory-resume-repository';

const resumeRepository = new InMemoryResumeRepository();

const resume = new Resume({
  path: 'http://localhost:3333/test.pdf',
  title: 'cool resume',
  candidate: new Candidate({
    user: new User({
      name: 'Gustavo Costa',
      email: 'gustavo@gmail.com',
      password: '12345678',
    }),
    cpf: '142.200.034-04',
    date_birth: new Date('2000, 12, 01'),
    resumes: [],
  }),
});

describe('test delete resume use case', () => {
  test('show execute a regular delete resume use case', async () => {
    await resumeRepository.create(resume);
    const deleteResume = new DeleteResume(resumeRepository);
    await deleteResume.execute(resume.id as string);
    expect(resumeRepository.resumes).toHaveLength(0);
  });
});
