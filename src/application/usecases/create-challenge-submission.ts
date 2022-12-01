import { Submission } from "../../domain/entities/submission";

type CreateChallengeSubmissionRequest = {
   studentId: string;
   challengeId: string;
}

export class CreateChallengeSubmission {
   //criaçao de uma Submission
   async run( { studentId, challengeId }: CreateChallengeSubmissionRequest ) {

      const submission = Submission.create({
         studentId,
         challengeId,
      })

      return submission
   }

}