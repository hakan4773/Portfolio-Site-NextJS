import Contact from "../../models/Contact"
import connectToDatabase from '../../libs/portfolyo'
import mongoose from "mongoose";

describe('Contact Model', () => {
    beforeAll(async ()=>{
        await connectToDatabase();
        await mongoose.connection.dropDatabase();
    });
    afterAll(async ()=>{
        await mongoose.disconnect();
    });
 test("contact model saves correctly'",async ()=>{
 const testContact = {  name: 'Hakan', email: 'abcd@gmail.com' , message: "deneme"}
  const contact = await Contact.create(testContact);
  expect(contact.name).toBe('Hakan');
  expect(contact.email).toBe('abcd@gmail.com');
  expect(contact.message).toBe('deneme');
  expect(contact._id).toBeDefined();
  expect(contact.createdAt).toBeInstanceOf(Date);
 });
  test('should require email field', async () => {
     const invalidContact = { 
      name: 'Hakan', 
      message: "deneme"
     };
       await expect(Contact.create(invalidContact))
       .rejects.toThrow(mongoose.Error.ValidationError);
 });
});

