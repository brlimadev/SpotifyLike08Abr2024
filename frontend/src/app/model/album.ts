export interface Banda {
    id?:String;
    nome?:String;    
    musica?:Musica[];
}

export interface Musica {
    id?:String;
    nome?:String;
    duracao?:String;
}