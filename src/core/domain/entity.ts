import crypto from 'crypto';

//Class de instance entity para nossa classes de nivel domain
export abstract class Entity<T> {
    protected _id: string;
    public props : T;

    //crypto instacia um id ser n há algum id
    constructor ( props:  T,  id?: string ) {
        this._id = id ?? crypto.randomUUID( );
        this.props = props
    }

}