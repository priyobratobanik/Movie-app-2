const info = JSON.parse(localStorage.getItem('TMDBmovie'));
const CAST_ID = info.id;
const CAST_FIND = `https://api.themoviedb.org/3/movie/${CAST_ID}?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US`;
const extra = 'https://image.tmdb.org/t/p/w500/';
const VIDEO_ID = info.imdb_id;
// const VIDEO_URL = `https://api.themoviedb.org/3/movie/${VIDEO_ID}/videos?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US`
const VIDEO_URL = `https://api.themoviedb.org/3/movie/tt1228705/videos?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US`;
console.log(VIDEO_ID)

//appeding here
let img = document.createElement('img');
img.src = extra + info.poster_path;
document.querySelector('.daya').append(img);


//casting
// fetch(CAST_FIND).then(function(res) {
//     return res.json();
// }).then(function(res) {
// console.log(res)
// });


//videos
fetch(VIDEO_URL).then(function(res) {
    return res.json();
}).then(function(res) {
    console.log(res)
}).catch(function(err) {
    console.log(err)
})