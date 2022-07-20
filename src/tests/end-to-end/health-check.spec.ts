import '../../infra/dotenv';
import axios from 'axios';

describe('health-check', () => {
  test('/ request', async () => {
    const response = await axios.get(`http://localhost:${process.env.PORT}/`);
    expect(response.data.ok).toBeTruthy();
  });
});
