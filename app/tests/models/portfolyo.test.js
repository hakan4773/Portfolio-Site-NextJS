// tests/models/projects.test.js
import Project from "../../models/portfolyo"
import connectToDatabase from '../../libs/portfolyo'
import mongoose from "mongoose";
describe('Project Model', () => {
beforeAll(async () => {
  await connectToDatabase();
  await mongoose.connection.dropDatabase();
});
afterAll(async ()=>{
    await mongoose.disconnect();
});
test('project model saves correctly', async () => {
  const testProject = { title: 'Test Proje', technologies: 'React' , description: "deneme" ,imageUrl:"5.jpg"}
  const project = await Project.create(testProject);
  expect(project.title).toBe('Test Proje');
  expect(project.technologies).toBe('React');
  expect(project.description).toBe('deneme');
  expect(project.imageUrl).toBe('5.jpg');
  expect(project._id).toBeDefined();
  expect(project.createdAt).toBeInstanceOf(Date);
  });
    test('should require title field', async () => {
    const invalidProject = { 
      technologies: 'React',
      description: "deneme",
      imageUrl: "5.jpg"
    };
      await expect(Project.create(invalidProject))
      .rejects.toThrow(mongoose.Error.ValidationError);

});
});

