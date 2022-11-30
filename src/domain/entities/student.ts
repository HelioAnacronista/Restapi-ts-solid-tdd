import { type } from "os";
import { Entity } from "../../core/domain/entity";

//propiedades
type StudentProps = {
    name: string;
    email: string;

}

export class Student extends Entity<StudentProps>{

    private constructor (props: StudentProps, id?: string) {
        super(props, id)
    }

    //nivel de validação etc...
    static create(props: StudentProps, id?: string){
        
        const student = new Student(props)
        return student
    }
}