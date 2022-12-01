import { Submission } from "../../domain/entities/submission";
import { ChallegensRepository } from "../repositories/ChallengesRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";

type CreateChallengeSubmissionRequest = {
   studentId: string;
   challengeId: string;
}

export class CreateChallengeSubmission {

   constructor(
      private studentsRepository: StudentsRepository,
      private challegensRepository: ChallegensRepository
   ) {}


   //criaçao de uma Submission
   async run( { studentId, challengeId }: CreateChallengeSubmissionRequest ) {

      const student = await this.studentsRepository.findById(studentId)
      if (!student) {
         throw new Error('Students does not exists')
      }

      const challenge = await this.challegensRepository.findById(challengeId)
      if (!student) {
         throw new Error('Students does not exists')
      }

      const submission = Submission.create({
         studentId,
         challengeId,
      })
      return submission
   }

}