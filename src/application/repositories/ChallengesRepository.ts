import { Challenge } from "../../domain/entities/challenge";

export interface ChallegensRepository {

   findById(id: string): Promise<Challenge | null>; 
   
}