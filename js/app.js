const ui = new UI();

let searchRadioBtn = '';

const radios = document.getElementsByName("search-type");

document.querySelector(".search-input").addEventListener("keyup", moviesSearch);

document.querySelector(".radio-buttons").addEventListener("click", checkButton)

function checkButton(){
if(radios[0].checked) searchRadioBtn = '';
if(radios[1].checked) searchRadioBtn = 'movie';
if(radios[2].checked) searchRadioBtn = 'series';
    moviesSearch();
}


function moviesSearch(){
    // Input value
    const searchVal = document.querySelector(".search-input").value;
    
    // Search
    const search = new Search(searchVal, searchRadioBtn);
    search.getData()
    .then(data => {
        ui.paintMovies(data)
    })
    .then(() => detailMovies())
    .catch(err => {
        console.log(err);
        document.querySelector(".movies").innerHTML = '';
    });
    
}


function detailMovies(){
    document.querySelectorAll(".movies__card").forEach(movieItem => {
    movieItem.addEventListener("click", () => {
        
        const movie = new Movie(movieItem.id);
        
        movie.getMovieData()
        .then(data => ui.paintMovieOverview(data));
        
    });
});
}
