// tests/models/certificate.test.js
import Certificate from "../../models/Certificate";
import connectToDatabase from '../../libs/portfolyo'
import mongoose from 'mongoose';
describe('Certificate Model', () => {
  
beforeAll(async () => {
  await connectToDatabase();
  await mongoose.connection.dropDatabase();
});
afterAll(async ()=>{
    await mongoose.disconnect();
});

test("certificate model saves correctly",async ()=>{
   const testCertificate = {
     title: "test certificate",
     description: "deneme",
     imageUrl: "5.jpg",
     link: "https://www.techcareer.net",
   };
   const certificate=await Certificate.create(testCertificate);
   expect(certificate.title).toBe("test certificate");
   expect(certificate.description).toBe('deneme');
   expect(certificate.imageUrl).toBe('5.jpg');
   expect(certificate.link).toBe('https://www.techcareer.net');
   expect(certificate._id).toBeDefined();
   expect(certificate .createdAt).toBeInstanceOf(Date);
});

test("should require title field",async ()=>{
 const invalidCertificate = {
     description: "deneme",
     imageUrl: "5.jpg",
     link: "https://www.techcareer.net",
   };
   await expect(Certificate.create(invalidCertificate))
         .rejects.toThrow(mongoose.Error.ValidationError);
});

});

