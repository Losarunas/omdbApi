class UI{
    constructor(){
       this.movies = document.querySelector(".movies");
       this.movieOverview = document.querySelector(".movie-overview");
    }
    paintMovies(data){
        
        this.movies.innerHTML = '';
        this.movieOverview.innerHTML = '';
        
        data = data.Search;
        
        let output = '';
        data.forEach(movie => {
            output += `<div class="col-lg-3">
                    <div class="movies__card" id="${movie.imdbID}">
                        <div class="movies__card__img">
                            <img src="${checkPoster(movie.Poster)}" alt="" style="movies__card__img-img">
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
        output = `
                <i class="fas fa-arrow-left movie-overview-back"></i>
                <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-4">
                        <img src="${checkPoster(data.Poster)}" alt="">
                        <div class="col-lg-12">
                            <hr>
                            <div class="movie-overview--ratings">
                                <div class="movie-rating">
                                    <a href="https://www.imdb.com/title/${data.imdbID}/"><img src="img/imdb.png" alt="" class="movie-img-rating"></a>
                                    <div class="movie-rating-imdb-ratings">
                                        <p>${checkData(data.Ratings[0].Value)}</p>
                                        <p class="imdb-ratings-votes">${checkData(data.imdbVotes)}</p>
                                    </div>
                                </div>
                                <div class="movie-rating">
                                    <a href="https://www.rottentomatoes.com/search/?search=${data.Title}"><img src="img/rotten.png" alt="" class="movie-img-rating"></a>
                                    <p>${checkRating(data.Ratings[1])}</p>
                                </div>
                                <div class="movie-rating">
                                    <a href="https://www.metacritic.com/search/all/${data.Title}/results"><img src="img/metacritic.png" alt="" class="movie-img-rating"></a>
                                    <p>${checkRating(data.Ratings[2])}</p>
                                </div>
                                <hr>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <h1>${data.Title} ${data.Year}</h1>
                        <div class="movie-overview-details--short mb-2">
                                <p class="movie-overview-genre">${data.Genre} | ${data.Language} | ${data.Runtime} | ${data.Released} (${data.Country})</p>
                        </div>
                        <p class="movie-overview-plot mb-4">${checkPlotData(data.Plot)}</p>
                        <div class="movie-overview-details">
      
                            <p><b>Director</b>: <span class="movie-overview-director">${checkData(data.director)}</span></p>
                            <p><b>Writer</b>: <span class="movie-overview-writer">${checkData(data.Writer)}</span></p>
                            <p><b>Actors</b>: <span class="movie-overview-actors">${checkData(data.Actors)}</span></p>
                            <p><b>Awards</b>: <span class="movie-overview-awards">${checkData(data.Awards)}</span></p>
                        </div>
                    </div>
                </div>
            </div>`
        this.movieOverview.innerHTML = output;
    }
}
function checkPoster(data){
    if(data === "N/A") return "https://www.placecage.com/300/450";
    return data;
}

function checkData(data){
    if(data === "N/A" || data === undefined) return "N/A";
    return data;
}

function checkPlotData(data){
    if(data === "N/A") return "";
    return data;
}
function checkRating(data){
    if(data === "N/A" || data === undefined) return "N/A";
    return data.Value;
}