// bd nivel de aplicação para testes

import { ChallegensRepository } from "../../application/repositories/ChallengesRepository";
import { Challenge } from "../../domain/entities/challenge";

export class InMemoryChallengensRepository implements ChallegensRepository {
   public items: Challenge[] = []


   async findById(id: string): Promise<Challenge | null> {
      const challenge = this.items.find(student => student.id === id)

      if(!challenge) {
         return null;
      }

      return challenge;
   }

}

   
   
