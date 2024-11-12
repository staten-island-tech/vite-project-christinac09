const songs = [
    {
      title: "Shape of You",
      artist: "Ed Sheeran",
      genre: "Pop",
      releaseDate: "2017-01-06",
      price: 1.29,
      imageUrl: "../img/shape of you.png",
      altText: "Album cover for 'Shape of You' by Ed Sheeran featuring a blue background with black paint splotches."
    },
    {
      title: "Bad Guy",
      artist: "Billie Eilish",
      genre: "Alternative/Indie",
      releaseDate: "2019-03-29",
      price: 1.29,
      imageUrl: "../img/bad guy.jpg",
      altText: "Album cover for 'Bad Guy' by Billie Eilish with the artist in white clothing against a dark background."
    },
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        genre: "Synth-pop",
        releaseDate: "2019-11-29",
        price: 1.29,
        imageUrl: "../img/blinding lights.png",
        altText: "Album cover for 'Blinding Lights' by The Weeknd showing a close-up of the artist's face with a red background."
      },
    {
      title: "Closer",
      artist: "The Chainsmokers ft. Halsey",
      genre: "Electropop",
      releaseDate: "2016-07-29",
      price: 1.29,
      imageUrl: "../img/closer.jpg",
      altText: "Album cover for 'Closer' by The Chainsmokers featuring a soft pastel background with minimal design."
    },
    {
      title: "Rolling in the Deep",
      artist: "Adele",
      genre: "Soul",
      releaseDate: "2010-11-29",
      price: 1.29,
      imageUrl: "../img/rolling in the deep.png",
      altText: "Album cover for 'Rolling in the Deep' by Adele with a monochrome portrait of the artist."
    },
    {
      title: "Humble",
      artist: "Kendrick Lamar",
      genre: "Hip Hop",
      releaseDate: "2017-03-30",
      price: 1.29,
      imageUrl: "../img/humble.jpg",
      altText: "Album cover for 'Humble' by Kendrick Lamar showing a bold red and black design."
    },
    {
      title: "Someone You Loved",
      artist: "Lewis Capaldi",
      genre: "Pop",
      releaseDate: "2018-11-08",
      price: 1.29,
      imageUrl: "../img/someone you loved.jpg",
      altText: "Album cover for 'Someone You Loved' by Lewis Capaldi featuring a portrait of the artist on a red background."
    },
    {
      title: "Sunflower",
      artist: "Post Malone, Swae Lee",
      genre: "Hip Hop",
      releaseDate: "2018-10-19",
      price: 1.29,
      imageUrl: "../img/sunflower.jpg",
      altText: "Album cover for 'Sunflower' featuring masked eyes."
    },
    {
        title: "HOT",
        artist: "SEVENTEEN",
        genre: "K-pop",
        releaseDate: "2022-05-27",
        price: 1.29,
        imageUrl: "../img/hot.jpg",
        altText: "Album cover for 'HOT' by SEVENTEEN featuring a desert-themed concept with the group in stylish outfits."
        },
      {
        title: "Hype Boy",
        artist: "NewJeans",
        genre: "K-pop",
        releaseDate: "2022-08-01",
        price: 1.29,
        imageUrl: "../img/hype boy.jpg",
        altText: "Album cover for 'Hype Boy' by NewJeans featuring a retro, Y2K-inspired aesthetic with a bunny on a blue background."
      },
      {
        title: "Love Shot",
        artist: "EXO",
        genre: "K-pop",
        releaseDate: "2018-12-13",
        price: 1.29,
        imageUrl: "../img/love shot.jpg",
        altText: "Album cover for 'Love Shot' by EXO, showing members in sleek red and black outfits with a rose."
      },
      {
        title: "Any Song",
        artist: "Zico",
        genre: "K-pop/Hip Hop",
        releaseDate: "2020-01-13",
        price: 1.29,
        imageUrl: "../img/any song.png",
        altText: "Album cover for 'Any Song' by Zico, showcasing a colorful, fun design with the artist's playful expressions."
      },
      {
        title: "Eight",
        artist: "IU ft. SUGA",
        genre: "K-pop",
        releaseDate: "2020-05-06",
        price: 1.29,
        imageUrl: "../img/eight.jpg",
        altText: "Album cover for 'Eight' by IU featuring a dreamy, cloud-themed design with soft colors."
      },
      {
        title: "What is Love?",
        artist: "TWICE",
        genre: "K-pop",
        releaseDate: "2018-04-09",
        price: 1.29,
        imageUrl: "../img/what is love.jpg",
        altText: "Album cover for 'What is Love?' by TWICE, featuring a colorful design with members in a question mark."
      },
      {
        title: "Rock With You",
        artist: "SEVENTEEN",
        genre: "K-pop",
        releaseDate: "2021-10-22",
        price: 1.29,
        imageUrl: "../img/rock with you.jpg",
        altText: "Album cover for 'Rock With You' by SEVENTEEN, featuring an edgy, rock-inspired theme with dark tones."
      },
      {
        title: "All I Wanna Do",
        artist: "Jay Park ft. Hoody & Loco",
        genre: "KRnB",
        releaseDate: "2016-07-17",
        price: 1.29,
        imageUrl: "../img/all i wanna do.jpg",
        altText: "Album cover for 'All I Wanna Do' by Jay Park showing the back of a person's neck with tattoos."
      },
      {
        title: "That XX",
        artist: "G-Dragon",
        genre: "KRnB",
        releaseDate: "2012-09-01",
        price: 1.29,
        imageUrl: "../img/that xx.jpg",
        altText: "Album cover for 'That XX' by G-Dragon featuring a dark and moody theme."
      },
      {
        title: "Instagram",
        artist: "DEAN",
        genre: "KRnB",
        releaseDate: "2017-12-26",
        price: 1.29,
        imageUrl: "../img/instagram.jpg",
        altText: "Album cover for 'Instagram' by DEAN, showing a person holding a guitar with muted colors."
      },
      {
        title: "Blue",
        artist: "BOL4",
        genre: "KRnB",
        releaseDate: "2018-10-22",
        price: 1.29,
        imageUrl: "../img/blue.png",
        altText: "Album cover for 'Blue' by BOL4 featuring a soft pastel sky theme with blue tones."
      },
      {
        title: "Daechwita",
        artist: "Agust D (SUGA from BTS)",
        genre: "K-pop/Hip Hop",
        releaseDate: "2020-05-22",
        price: 1.29,
        imageUrl: "../img/daechwita.jpg",
        altText: "Album cover for 'Daechwita' by Agust D showing a black and white image of the artist's side profile from a low angle."
      },
  ];
  
export {songs}