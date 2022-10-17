// const url = `https:api.themoviedb.org/3/movie/upcoming?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US&`;
const page = Math.floor(Math.random() * 2 * 50);
console.log(page)
const API_KEY = 'api_key=763aad1b51ae4ed320afd3680c31c2fe';
const BASE_URL = 'https:api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY + `&page=${page}`;
// https://api.themoviedb.org/3/search/movie?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US&page=1&include_adult=false&query=ironman
const SearchURL = BASE_URL + '/search/movie?' + API_KEY;
const extra = 'https://image.tmdb.org/t/p/w500/';

ApiUrl(API_URL)

function ApiUrl(url) {
    fetch(url).then(function(res) {
        return res.json();
    }).then(function(res) {
        ironman(res.results)
        console.log(res)
    }).catch(function(err) {
        console.log(err)
    });
}



var appendMovies = document.querySelector("#ironman");

function ironman(data) {
    appendMovies.innerHTML = null;
    data.map(function(el, i) {

        let box = document.createElement('div');
        let img = document.createElement('img');

        var name = document.createElement('div');
        var rate = document.createElement('p');
        name.setAttribute('class', "namepart");
        img.src = `${extra+el.poster_path}`;
        let title = document.createElement('p');
        title.innerHTML = el.original_title;
        let time = document.createElement('p');
        time.innerHTML = `Release: ${el.release_date}`;
        rate.innerText = el.vote_average;
        name.append(title, time, rate);
        box.append(img, name);
        appendMovies.append(box);
        box.addEventListener('click', function() {
            localStorage.setItem('TMDBmovie', JSON.stringify(el));
            window.location.href = "pageview.html";
        });

    });
}

function findmovies() {
    const searchTerm = document.querySelector("#searchmovi").value;
    if (searchTerm) {
        ApiUrl(SearchURL + '&query=' + searchTerm);
        // console.log(SearchURL + '&query' + searchTerm)

    } else {
        ApiUrl(API_URL);
    }
}



// https://api.themoviedb.org/3/search/movie?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US&page=1&include_adult=false&query=ironman