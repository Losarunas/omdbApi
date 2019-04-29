const ui = new UI();

//
// SEARCH
// 

// Search on keyup event
document.querySelector(".search-input").addEventListener("keyup", cleanSearch);

let pageSearch = 1;
let scrollEffect = false;
let totalResults;

function moviesSearch() {
    scrollEffect = true;

    // Input value
    const searchVal = document.querySelector(".search-input").value;

    // Search
    const search = new Search(searchVal, searchRadioBtn, pageSearch);
    search.getData()
        .then(data => {
            ui.paintMovies(data);
            totalResults = parseInt(data.totalResults);
            infiniteScroll();
        })
        .then(() => detailMovies())
        .catch(err => {
            resetSearch();
            console.log(err);
            document.querySelector(".movies").innerHTML = '';
        });

}

//
// Check radio button
//
document.querySelector(".radio-buttons").addEventListener("click", checkButton);

const radios = document.getElementsByName("search-type");

let searchRadioBtn = '';

function checkButton() {
    if (radios[0].checked) searchRadioBtn = '';
    if (radios[1].checked) searchRadioBtn = 'movie';
    if (radios[2].checked) searchRadioBtn = 'series';
    cleanSearch();
}


//
// Movie overview
//
function detailMovies() {

    document.querySelectorAll(".movies__card").forEach(movieItem => {
        movieItem.addEventListener("click", () => {

            resetSearch();

            const movie = new Movie(movieItem.id);

            movie.getMovieData()
                .then(data => ui.paintMovieOverview(data));

        });
    });
}

//
// BACK BTN(movie overview)
//
document.querySelector(".movie-overview").addEventListener("click", e => {
    backButton(e);
});

function backButton(e) {
    if (e.target.classList.contains("movie-overview-back")) moviesSearch();
}

//
// Oth
//

function cleanSearch() {
    pageSearch = 1;
    ui.cleanSearchField();
    moviesSearch();
}

function resetSearch() {
    scrollEffect = false;
    pageSearch = 1;
}


function infiniteScroll() {
    // Stop scroll effect if all movies displayed in UI
    if(totalResults > pageSearch * 10) {
        // If fully scrolled down, add new movies to list
        window.onscroll = function (ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && scrollEffect) {
                pageSearch++;
                moviesSearch();
            }
        };
    }
    else {
        scrollEffect = false;
        return;
    }
}