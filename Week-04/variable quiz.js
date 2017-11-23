
var obj = {
  movies: [
    'The Lion King',
    'Aladdin',
    'The Little Mermaid',
    'The Fox and the Hound',
    'Beauty and the Beast',
    'Mulan',
    'Pinocchio',
    'Cinderelle',
    'The Princess and the Frog',
    'Pocahontas',
  ],
  reviews: [
    function(movie) {
      return movie + ' is extremely funny!'
    },
    function(movie) {
      return movie + ' is the best movie of all time!'
    },
    function(movie1, movie2) {
      return movie1 + ' came out before ' + movie2 + '.'
    },
  ],
  favorites: [
    {
      'is CGI': [
        {
          frozen: {
            'Main Characters': [
              'Elsa',
              'Anna',
              'Olaf',
              'Kristoff',
              'Hans',
              'Pabbie',
              'Duke of Weselton',
            ],
            songs: [
              {
                title: 'For the First Time in Forever',
                length: '3:45',
              },
              {
                title: 'Let it Go',
                length: '3:45',
              },
              {
                title: 'Do You Want to Build a Snowman',
                length: '2:37',
              },
            ],
          },
        },
      ],
    },
  ],
  studio: 'Disney',
  animatedFeatures: 56,
  isMovieTitleLonger: function(movie1, movie2) {
    return movie1.length > movie2.length
  },
  releases: {
    '70s': [
      'The Aristocats',
      'Robin Hood',
      'The Many Adventures of Winnie the Poo',
      'The Rescuers',
    ],
    '80s': 6,
    '90s': 18,
    '2000s': 24,
  },
  compareMovies: function(movie1) {
    return function(movie) {
      const review = obj.reviews[obj.reviews.length + -1 * obj.reviews.length](movie1)

      return review + ' but ' + obj.reviews[obj.reviews.length - 1](movie1, movie)
    }
  },
}


obj.movies[9] obj.movies[8]

obj.reviews[3](obj.movies[9], obj.movies[8])