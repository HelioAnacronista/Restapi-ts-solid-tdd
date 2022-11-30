import { type } from "os";
import { Entity } from "../../core/domain/entity";

//propiedades
type SubmissionProps = {
    challengeId:  string;
    studentId: string;
    createdAt: Date;
}

export class Submission extends Entity<SubmissionProps>{

    private constructor (props: SubmissionProps, id?: string) {
        super(props, id)
    }

    //nivel de validação etc...
    static create(props: SubmissionProps, id?: string){
        
        const submission = new Submission(props)
        return submission
    }
}