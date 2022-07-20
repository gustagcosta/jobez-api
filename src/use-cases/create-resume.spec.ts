import { Candidate } from '../entities/candidate';
import { Resume } from '../entities/resume';
import { User } from '../entities/user';
import { CreateResume } from './create-resume';
import { InMemoryResumeRepository } from './shared/in-memory-resume-repository';

const generateResume = () => {
  return new Resume({
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
};

const resume = generateResume();

const resumeRepository = new InMemoryResumeRepository();

describe('test create resume use case', () => {
  test('show execute a regular create resume use case', async () => {
    const createResume = new CreateResume(resumeRepository);

    await createResume.execute(resume);

    expect(resumeRepository.resumes).toHaveLength(1);
  });

  test('show execute a regular create resume use case', async () => {
    for (let index = 0; index < 5; index++) {
      resume.candidate.resumes.push(generateResume());
    }

    const createResume = new CreateResume(resumeRepository);

    await expect(createResume.execute(resume)).rejects.toThrowError(
      new Error('resumes limit reached')
    );
  });
});
