# LIRI BOT

**LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

**LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

**In your terminal, execute the following commands
1. node liri.js concert-this 'type your artist here'
    **the search should display thh below
    * Name of the venue
    * Venue location
    * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. node liri.js spotify-this-song 'type your song here'
    **this search should display the below. If no search, The Sign by Ace of Base should display.
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from

3. node liri.js movie-this 'type your movie here'
    ** this search should display the below. If no search, Mr. Nobody should display. 
    * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.

## Technologies used:

* Spotify, OMDB, & BandsInTown API
* Node.js
* Javascript
* Axios
