export class Quote {

    showQuote:boolean;

    constructor (
        public name: string,
        public quote: string,
        public author: string,
        public datePosted: Date,
        public upVote: number,
        public downVote:number
    )
    {

        this.showQuote=false;
        this.upVote = 0;
        this.downVote = 0;
    }
}
