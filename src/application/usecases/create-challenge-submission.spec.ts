import { CreateChallengeSubmission } from "./create-challenge-submission";

describe('Create challenge submission use case', () => {
   //criando o teste
   it('should be able to create a new challene submission', async () => {
      const sut = new CreateChallengeSubmission()

      const response = await sut.run({
         studentId: 'fake-student-id',
         challengeId: 'fake-challenge-id',
      })

      expect(response).toBeTruthy()

   });
});