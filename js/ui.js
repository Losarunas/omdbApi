class UI{
    constructor(){
       this.movies = document.querySelector(".movies");
       this.movieOverview = document.querySelector(".movie-overview");
    }
    paintMovies(data){
        
        this.movies.innerHTML = '';
        
        data = data.Search;
        
        let output = '';
        data.forEach(movie => {
            output += `<div class="col-lg-3">
                    <div class="movies__card" id="${movie.imdbID}">
                        <div class="movies__card__img">
                            <img src="${movie.Poster}" alt="" style="movies__card__img-img">
                        </div>
                        <div class="movies__card__text">
                            <p class="movies__card__text-title">${movie.Title}</p>
                            <div class="movies__card__more-info">
                                <p class="movies__card__text-year">${movie.Year}</p>
                                <p class="movies__card__text-type">${movie.Type}</p>
                            </div>
                        </div>
                    </div>
                </div>`
        });
        this.movies.innerHTML = output;
    }
    
    paintMovieOverview(data){
        this.movies.innerHTML = '';
        this.movieOverview.innerHTML = '';
        let output = '';
        output = `<div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-4">
                        <img src="${data.Poster}" alt="">
                    </div>
                    <div class="col-lg-8">
                        <h1>${data.Title} (${data.Year})</h1>
                        <div class="movie-overview-details--short mb-2">
                                <p class="movie-overview-genre">${data.Genre} | ${data.Language} | ${data.Runtime} | ${data.Released} (${data.Country})</p>
                        </div>
                        <p class="movie-overview-plot mb-4">${data.Plot}</p>
                        <div class="movie-overview-details">
                            
                            
                           
                           
                            <p><b>Director</b>: <span class="movie-overview-director">${data.Director}</span></p>
                            <p><b>Writer</b>: <span class="movie-overview-writer">${data.Writer}</span></p>
                            <p><b>Actors</b>: <span class="movie-overview-actors">${data.Actors}</span></p>
                            <p><b>Awards</b>: <span class="movie-overview-awards">${data.Awards}</span></p>
                        </div>
                    </div>
                </div>
            </div>`
        this.movieOverview.innerHTML = output;
    }
}