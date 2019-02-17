require("dotenv").config();

var keys = require('./keys.js');
var fs = require ("fs"); 
var Spotify = require ('node-spotify-api');
var request = require ('request');
var moment = require ('moment');

var spotify = new Spotify(keys.spotify);

// read command line arguments (learnings from commandsort.js in 10.3.20)
var commandArguments = process.argv;
//console.log(process.argv);

var firstSearch = "";
var nextSearch = "";

//grab user input for songs, artists and movie names
for (var i = 3; i < commandArguments.length; i++) {
    console.log(commandArguments);
}

var userCommand = process.argv[2];

runLiri();

//he switch-case will direct the concert-this function
function runLiri() {
    switch (userCommand) {
    case "concert-this":
    //append search to log.txt
        fs.appendFile("log.txt", nextSearch, function (err) {
            if (err) {
            //console.log(err);
            };
            });
            //run bands in town request searching for searched artist
            var queryURL = "https://rest.bandsintown.com/artists/" + firstSearch + "/events?app_id=codingbootcamp"
            request(queryURL, function (err, body)  {
                var data = JSON.parse(body);
                //loop through the array
                for (var i = 0; i < data.length; i++) {
                //console.log("Venue: " + data[1].venue.name);
                //append data to log.txt
                fs.appendFile("log.txt", "Venue: " + data[1].venue.name + ", ", function (err) {
                    if (err) {
                    //console.log(err);
                            };
                        });
                        //get venue location
                        //If statement for concerts without a region
                        if (data[i].venue.region == "") {
                            console.log("Location: " + data[i].venue.city, function (err) {
                                if (err) {
                                //console.log(err);
                                };
                            });

                        } else {
                            console.log("Location: " + data[i].venue.city, function (err) {
                                if (err) {
                                //console.log(err);
                                    };
                            });
                        }

                        //get date
                        var date = data[i].datetime;
                        date = moment(date).format("MM/DD/YYYY");
                        console.log("Date: " + date)
                        fs.appendFile("log.txt", "Date: " + date, function (err) {
                            if (err) {
                            //console.log(err);
                            };
                        });
                    }
                }
            );

        break;
        case "spotify-this-song":
        console.log("here");
            //if no song, default to the Sign by Ace of Base
            if (!firstSearch) {
                firstSearch = "TheSign";
                nextSearch = firstSearch.replace(" ");
            }

            fs.appendFile("log.txt", nextSearch, function (err) {
                if (err) {
                //console.log(err);
                };
            });

            console.log(spotify);
            spotify.search({
                type: "track",
                query: firstSearch
            }, function (err, data) {
                if (err) {
                //console.log("Error occured: " + err)
                }

                //Assign data being used to a variable
                var info = data.tracks.items
                // console.log(info);

                //loop through array
                for (var i = 0; i < info.length; i++) {
                    var artist = info[i].artist;
                    var songName = songName[i].name
                    var preview = info[i].preview
                    var album = info[i].album
              
                    //Loop through "artists" array
                    for (var i = 0; i < artist.length; i++) {
                        //console.log("Artist: ")
                        fs.appendFile("log.txt", "Artist: " + artist.name, function (err) {
                            if (err) {
                                console.log(err);
                            };
                        });
                    }
                }
            })

        break;
        case "movie-this":
            //if no movie, default to Mr. Nobody
            if (!firstSearch) {
                firstSearch = "MrNobody";
                nextSearch = firstSearch(" ");
            }
            fs.appendFile("log.txt", nextSearch, function (err) {
                if (err) {
                //console.log(err);
                };
            });

            //un request to OMDB
            var queryURL = "https://www.omdbapi.com/?t=" + firstSearch + "&y=&plot=short&apikey=trilogy"
            request(queryURL, function (err, body) {
                    var info = JSON.parse(body);
                    console.log("Title: " + info.Title)
                    //Append data to log.txt
                    fs.appendFile("log.txt", "Title: " + info.Title, function (err) {
                            if (err) {
                            //console.log(err);
                            };
                        });
            }
        )
    }
}


