const movieList = [
  {
    title: 'Batman vs Superman',
    description: 'Batman vs Superman',
    imageUrl: 'https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg',
      seats: 54,
  },{
    title: 'Batman Returns',
    description: 'Batman Returns',
    imageUrl:
      'https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg',
    seats: 54,
  },{
    title: 'The Dark Knight',
    description: 'The Dark Knight',
    imageUrl:
      'https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg',
    seats: 54,
  },{
    title: 'The Lego Batman',
    description: 'The Lego Batman',
    imageUrl:
      'https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg',
    seats: 54,
  }
];

const banner = document.getElementById('banner');
let img = document.querySelector('#banner img');
let description = document.querySelector('#banner #description');
let seats = document.querySelector('#banner #seats');
const selectedMovie = (index) => {
  img.src = movieList[index].imageUrl;
  img.alt = movieList[index].title;
  description.innerText = movieList[index].description
  seats.innerText = movieList[index].seats
}

selectedMovie(0);

const ul = document.querySelector('ul')
for(let i = 0; i < movieList.length; i++) {
  const movie = movieList[i];
  const li = document.createElement('li');
  li.innerHTML = `
    <figure onclick="selectedMovie(${i})">
      <img src="${movie.imageUrl}" alt="${movie.title}"/>
      <figcaption>
        <h3>${movie.title}</h3>
      </figcaption>
    </figure>
  `;
  ul.appendChild(li);
}