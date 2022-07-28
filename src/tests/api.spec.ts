import '../infra/dotenv';
import axios from 'axios';

const instance = axios.create({
  baseURL: `http://127.0.01:${process.env.PORT}`,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

describe('api tests end-to-end', () => {
  test('GET /', async () => {
    const response = await instance.get(`/`);
    expect(response.status).toBe(200);
  });

  test('POST /candidate', async () => {
    const response = await instance.post(`/candidate`, {
      name: 'John Doe',
      email: 'john@email.com',
      password: '12345678',
      cpf: '777.777.777-77',
      date_birth: '2000-12-01',
    });

    expect(response.status).toBe(204);
  });

  test('POST /company', async () => {
    const response = await instance.post(`/company`, {
      name: 'John Doe',
      email: 'john@email.com',
      password: '12345678',
      cnpj: '79.460.784/0001-90',
    });

    expect(response.status).toBe(204);
  });
});
