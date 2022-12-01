import { CreateChallengeSubmission } from "./create-challenge-submission";
import { InMemoryStudentesRepository } from "../../test/repository/in-memory-studentes-repository"
import { InMemoryChallengensRepository } from "../../test/repository/in-memory-challenges-repository";
import { Student } from "../../domain/entities/student";
import { Challenge } from "../../domain/entities/challenge";

describe('Create challenge submission use case', () => {
   //criando o teste
   it('should be able to create a new challene submission', async () => {

      const studentsRepository = new InMemoryStudentesRepository();
      const challengesRepository = new InMemoryChallengensRepository();

      const student = Student.create({
         name : 'Diego',
         email : 'Diego@gmail.com'
      })

      const challenge = Challenge.create({
         title : 'challenge 01',
         instructionsUrl: 'http://localhost:8080/h2-console'
      })

      studentsRepository.items.push(student);
      challengesRepository.items.push(challenge);


      const sut = new CreateChallengeSubmission(
         studentsRepository,
         challengesRepository
      )

      const response = await sut.run({
         studentId: student.id,
         challengeId: challenge.id,
      })

      expect(response).toBeTruthy()

   });
});