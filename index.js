function searchMovies() {
    const key = '678c5c05';
    const search = document.getElementById("searchInput").value;

    document.getElementById("movieListings").innerHTML = ``;
    fetch(`https://www.omdbapi.com/?apikey=${key}&s=${search}`)
        .then(response => response.json())
        .then(data => {
            if (data.Search) {
                data.Search.forEach(movie => {
                    displayMovie(movie);
                });
            } else {
                alert('No movies found!');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}
function displayMovie(movie) {
    const movieListings = document.getElementById('movieListings');
    let d = document.createElement("div");
    d.className = "card"
    d.innerHTML = `
    <img src="${movie.Poster}" alt="${movie.Title}" />
    <h3>${movie.Title}</h3>
    <p>${movie.Year}</p>
`;
movieListings.appendChild(d)

}