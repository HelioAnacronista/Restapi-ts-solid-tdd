import { type } from "os";
import { Entity } from "../../core/domain/entity";

//propiedades
type CorrectionProps = {
    grade:  number;

    submissionId: string;
    createdAt: Date;
}

export class Correction extends Entity<CorrectionProps>{

    private constructor (props: CorrectionProps, id?: string) {
        super(props, id)
    }

    //nivel de validação etc...
    static create(props: CorrectionProps, id?: string){

        /*
        estudar sobre validaçoes ou errors api node
        if (props.grade < 0 || props.grade > 10) {
            throw new Error('');
        }
        */

        const correction = new Correction(props)
        return correction
    }
}