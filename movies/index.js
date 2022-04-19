let movieList = [
  {
    name: 'Batman vs Superman',
    summary: 'Batman vs Superman',
    image: {
      medium:
        'https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg',
    },
    rating: {
      average: 9,
    },
  },
];

const banner = document.getElementById('banner');
let img = document.querySelector('#banner img');
let summary = document.querySelector('#banner #summary');
let rating = document.querySelector('#banner #rating');
const selectedMovie = (index) => {
  img.src = movieList[index].image.original;
  img.alt = movieList[index].name;
  summary.innerHTML = movieList[index].summary;
  rating.innerText = '⭐ ' + movieList[index].rating.average;
};

const renderMovies = () => {
  const ul = document.querySelector('ul');
  for (let i = 0; i < movieList.length; i++) {
    const movie = movieList[i];
    const li = document.createElement('li');
    li.innerHTML = `
      <figure onclick="selectedMovie(${i})">
        <img src="${movie.image.medium}" alt="${movie.name}"/>
        <figcaption>
          <h3>${movie.name}</h3>
        </figcaption>
      </figure>
    `;
    ul.appendChild(li);
  }
};

const getMovieList = async () => {
  try {
    const response = await fetch('https://api.tvmaze.com/shows');
    movieList = await response.json();
    movieList = movieList.slice(0, 20);
    console.log(movieList[0]);
    renderMovies();
    selectedMovie(0);
  } catch (error) {
    console.log(error);
  }
};
getMovieList();
