// tests/libs/portfolyo.test.js
import { connectToDatabase } from '../../libs/mongodb'
import mongoose from 'mongoose'

describe('MongoDB Connection Helper', () => {
  beforeAll(async () => {
    // Test DB'sine bağlan
    process.env.MONGODB_URI = 'mongodb://localhost:27017/test_db'
  })

  afterAll(async () => {
    // Bağlantıyı kapat
    await mongoose.disconnect()
  })

  it('should connect to database successfully', async () => {
    const { conn } = await connectToDatabase()
    expect(conn.readyState).toBe(1) // 1 = connected
  })

  it('should reuse existing connection', async () => {
    const firstConn = await connectToDatabase()
    const secondConn = await connectToDatabase()
    expect(firstConn.conn).toBe(secondConn.conn)
  })

  it('should throw error with invalid URI', async () => {
    process.env.MONGODB_URI = 'invalid_uri'
    await expect(connectToDatabase()).rejects.toThrow()
  })
})