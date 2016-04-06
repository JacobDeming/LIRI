var x=process.argv[2];
var y=process.argv[3];

//Runs the Twitter API
if(x=="my-tweets"){
	var Twitter = require('twitter');
	var clientInfo=require("./keys.js");
	clientInfo=JSON.stringify(clientInfo);
	clientInfo=JSON.parse(clientInfo);
	var client = new Twitter(clientInfo);
	client.get('statuses/user_timeline',function(error,tweets,response){
		if(error) throw error;
		for(var i=0;i<tweets.length||i<19;i++){
			console.log(tweets[i].text);
			console.log("");
			console.log("-------------------------");
			console.log("");}})}

//Runs the Spotify API
if(x=="spotify-this-song"){
	var spotify=require("spotify");
	spotify.search({type:'track',query:y},function(err,data){
		if(err)throw err;
		for(var i=0;i<data.tracks.items.length||i<19;i++){
			console.log("Artist: "+data.tracks.items[i].artists[0].name);
			console.log("Song Name: "+data.tracks.items[i].name);
			console.log("Album: "+data.tracks.items[i].album.name);
			console.log("Preview Link: "+data.tracks.items[i].preview_url);
			console.log("");
			console.log("-------------------------");
			console.log("");}})}

//Runs the OMDB API
if(x=="movie-this"){
	var omdb=require("omdb");
	var country="";
	var actors="";
	omdb.get({title: y},true,function(err,movies){
		if(err)throw err;
		if(movies){
			console.log("Title: "+movies.title);
			console.log("Year: "+movies.year);
			console.log("IMDB Rating: "+movies.imdb.rating);
			movies.countries.forEach(function(thing){
				country+=" "+thing;})
			console.log("Country:"+country);
			movies.actors.forEach(function(thing){
					actors+=" "+thing;})
			console.log("Actors:"+actors)
			console.log("Plot: "+movies.plot);}
		else{console.log("NO MOVIES FOUND")}})}
