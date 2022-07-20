import { Candidate } from './candidate';
import { Resume, ResumeProps } from './resume';
import { User } from './user';

describe('test resume entity', () => {
  let props: ResumeProps;

  beforeEach(() => {
    props = {
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
      }),
    };
  });

  test('should create a regular resume', () => {
    const resume = new Resume(props);

    expect(resume.path).toBe(props.path);
    expect(resume.title).toBe(props.title);
    expect(resume.id).toBeTruthy();
  });

  test('should throw a invalid path error', () => {
    props.path = "";

    expect(() => new Resume(props)).toThrowError(
      new Error('missing properties')
    );
  });

  test('should throw a invalid title error', () => {
    props.title = "";

    expect(() => new Resume(props)).toThrowError(
      new Error('missing properties')
    );
  });
});
