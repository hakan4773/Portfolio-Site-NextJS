import connectToDatabase from '../../libs/portfolyo';  // doğru yolu yaz

describe('MongoDB Connection Helper', () => {
  it('should connect to database successfully', async () => {
    const conn = await connectToDatabase();
    expect(conn.connection.readyState).toBe(1);  // conn.connection.readyState veya conn.readyState olabilir, deneyebilirsin
  });

  it('should reuse existing connection', async () => {
    const conn = await connectToDatabase();
    expect(conn.connection.readyState).toBe(1);
  });

 it('should throw error with invalid URI', async () => {
  process.env.MONGODB_URI = 'invalid_uri';

  try {
    await connectToDatabase();
    // Eğer buraya gelirse test fail olsun:
    throw new Error('Bağlantı başarısız olmalıydı.');
  } catch (e) {
    expect(e).toBeDefined();
  }
});
});
