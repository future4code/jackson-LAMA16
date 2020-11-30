export class Band{
    constructor(
        private id: string,
        private name: string,
        private music_genre: string,
        private responsible: string
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getGenre(){
        return this.music_genre;
    }

    getResponsible(){
        return this.responsible;
    }

    setId(id: string){
        return this.id = id;
    }

    setName(name: string){
        return this.name = name;
    }

    setGenre(genre: string){
        return this.music_genre = genre;
    }

    setResponsible(responsible: string){
        return this.responsible = responsible;
    }
}

export interface BandInputDTO{
    name: string,
    genre: string,
}
