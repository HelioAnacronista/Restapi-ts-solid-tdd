// bd nivel de aplicação para testes
import { StudentsRepository } from "../../application/repositories/StudentsRepository";
import { Student } from "../../domain/entities/student";

export class InMemoryStudentesRepository implements StudentsRepository {
   public items: Student[] = []


   async findById(id: string): Promise<Student | null> {
      const student = this.items.find(student => student.id === id)

      if(!student) {
         return null;
      }

      return student;
   }

}

   
   
