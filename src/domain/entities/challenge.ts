import { Entity } from "../../core/domain/entity";

//propiedades
type ChallengeProps = {
    title: string;
    instructionsUrl : string;
}

export class Challenge extends Entity<ChallengeProps>{

    private constructor (props: ChallengeProps, id?: string) {
        super(props, id)
    }

    //nivel de validação etc...
    static create(props: ChallengeProps, id?: string){

        const challenge = new Challenge(props)
        return challenge
    }
}