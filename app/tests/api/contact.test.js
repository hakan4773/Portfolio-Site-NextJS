import { POST } from '../../api/contact/route';
import Contact from '../../models/Contact';
import connectToDatabase from '../../libs/mongodb';
import mongoose from 'mongoose';

describe('POST /api/contact', () => {
  beforeAll(async () => {
    await connectToDatabase();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should create new contact with valid data', async () => { 
     const response = await POST(mockRequest);
     const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe('Message sent successfully');
    expect(Contact).toHaveBeenCalledWith({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Test message'
    });
  });
})
