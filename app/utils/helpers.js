// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// New York Times API
var nytAPI = "9d4a8986921972b65754ea0809d47c84:12:74623931";

	var helpers = {

	// This will run our query.
	runQuery: function(term, start, end){

		// Adjust to get search terms in proper format
		var term = term.trim();
		var start = start.trim() + "0101";
		var end = end.trim() + "1231";


		console.log("Query Run");
		// Run a query using Axios. Then return the results as an object with an array.
		// See the Axios documentation for details on how we structured this with the params.
		return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
			params: {
			    'api-key': APIKey,
			    'q': term,
			    'begin_date': start,
			    'end_date': end			
			}
		})
		.then(function(results){
			console.log("Axios Results", results.data.response);

			return results.data.response;

		});
	},

	// This function hits our own server to retrieve the record of query results
	getSaved: function(){

		return axios.get('/api/saved')
			.then(function(results){
				console.log("axios results", results);
				return results;
			})
	},

	// This function posts new searches to our database.
	posSaved: function(){

		return axios.post('/api', {title: title})
			.then(function(results){
				console.log("Posted to MongoDB");
				return(results);
			})
	}

}


// We export the helpers function 
module.exports = helpers;

