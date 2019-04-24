//http://www.omdbapi.com/?s=badass&apikey=6687c5a4&page=1&type=
class Search{
    constructor(title, type){
        this.title = title;
        this.type = type;
        this.appID = '6687c5a4';
    }
    
    async getData(){
        const data = await fetch(`http://www.omdbapi.com/?s=${this.title}&apikey=${this.appID}&type=${this.type}`);
        const resData = await data.json();
        return resData;
    } 
}

class Movie extends Search{
    constructor(movieID, appID){
        super(appID);
        this.movieID = movieID;
    }
    async getMovieData(){
        const data = await fetch(`http://www.omdbapi.com/?i=${this.movieID}&apikey=${this.appID}`);
        const resData = await data.json();
        return resData;
    } 
    
}