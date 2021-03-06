/* ================================================  
 *    
 * Copyright (c) 2016 Oracle and/or its affiliates.  All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * ================================================
 */
 
"use strict";

var sodaRest = require('./soda-rest.js');
var cfg = require('./config.js');
var fs = require('fs');

var collectionDefinitions = fs.readFileSync('collections.json');
var collectionMetadata    = JSON.parse(collectionDefinitions);

var logCollectionName     = 'MovieTicketLog';
var sodaLoggingDisabled   = { sodaLoggingEnabled : false };

module.exports.createTheaterCollection     = createTheaterCollection;
module.exports.dropTheaterCollection       = dropTheaterCollection;
module.exports.recreateTheaterCollection   = recreateTheaterCollection;
module.exports.insertTheaters              = insertTheaters
module.exports.getTheaters                 = getTheaters;
module.exports.getTheater                  = getTheater;
module.exports.getTheaterById              = getTheaterById;
module.exports.queryTheaters               = queryTheaters

module.exports.createMovieCollection       = createMovieCollection;
module.exports.dropMovieCollection         = dropMovieCollection;
module.exports.recreateMovieCollection     = recreateMovieCollection;
module.exports.insertMovies                = insertMovies;
module.exports.getMovies                   = getMovies;
module.exports.getMovie                    = getMovie;
module.exports.getMovieById                = getMovieById
module.exports.updateMovie                 = updateMovie;
module.exports.queryMovies                 = queryMovies

module.exports.createScreeningCollection   = createScreeningCollection;
module.exports.dropScreeningCollection     = dropScreeningCollection;
module.exports.recreateScreeningCollection = recreateScreeningCollection;
module.exports.insertScreenings            = insertScreenings;
module.exports.getScreening                = getScreening;
module.exports.queryScreenings             = queryScreenings;
module.exports.updateScreening             = updateScreening;

module.exports.createTicketSaleCollection  = createTicketSaleCollection;
module.exports.dropTicketSaleCollection    = dropTicketSaleCollection;
module.exports.insertTicketSales           = insertTicketSales;
module.exports.insertTicketSale            = insertTicketSale;
module.exports.queryTicketSales            = queryTicketSales;
module.exports.updateTicketSale            = updateTicketSale;

module.exports.createPosterCollection      = createPosterCollection;
module.exports.dropPosterCollection        = dropPosterCollection;
module.exports.recreatePosterCollection    = recreatePosterCollection;
module.exports.insertPoster                = insertPoster;
module.exports.getPoster                   = getPoster;

module.exports.getLogRecordByOperationId   = getLogRecordByOperationId

module.exports.initializeSodaLogging       = initializeSodaLogging;
module.exports.logError                    = logError;
module.exports.writeLogEntry               = writeLogEntry;

initialize()

// Theater Collection

function createTheaterCollection(sessionState) {
	
	return sodaRest.createCollectionWithIndexes(sessionState, cfg.config, 'Theater',collectionMetadata.Theater);

}

function dropTheaterCollection(sessionState) {
	
	return sodaRest.dropCollection(sessionState, cfg.config, 'Theater');

}

function recreateTheaterCollection(sessionState) {
	
	return sodaRest.recreateCollection(sessionState, cfg.config, 'Theater',collectionMetadata.Theater);

}
function insertTheaters(sessionState, theaterList) {
	
	return sodaRest.bulkInsert(sessionState, cfg.config, 'Theater',theaterList);

}

function getTheaters(sessionState, limit,fields) {
  
   return sodaRest.getCollection(sessionState, cfg.config, 'Theater',limit,fields)
     
}

function getTheater(sessionState, key, eTag) {
	
	return sodaRest.getJSON(sessionState, cfg.config, 'Theater', key, eTag);

}

function getTheaterById(sessionState, id) {

  console.log('getTheaterById(' + id + ')');
  var qbe = {'id': id};
  return sodaRest.queryByExample(sessionState, cfg.config, 'Theater',qbe).then(
    function(sodaResponse) {
    	sodaResponse.json = sodaResponse.json[0]
    	return sodaResponse;
    }
  )
}

function queryTheaters(sessionState, qbe,limit,fields) {
	
	return sodaRest.queryByExample(sessionState, cfg.config, 'Theater',qbe,limit,fields);

}

// Movie Collection

function createMovieCollection(sessionState) {
	
	return sodaRest.createCollectionWithIndexes(sessionState, cfg.config, 'Movie',collectionMetadata.Movie);

}

function dropMovieCollection(sessionState) {
	
	return sodaRest.dropCollection(sessionState, cfg.config, 'Movie');

}

function recreateMovieCollection(sessionState) {
	
	return sodaRest.recreateCollection(sessionState, cfg.config, 'Movie',collectionMetadata.Movie);

}

function insertMovies(sessionState, movieList) {
	
	return sodaRest.bulkInsert(sessionState, cfg.config, 'Movie',movieList);

}

function getMovies(sessionState, limit,fields) {
  
   return sodaRest.getCollection(sessionState, cfg.config, 'Movie',limit,fields)
     
}

function getMovie(sessionState, key, eTag) {
	
	return sodaRest.getJSON(sessionState, cfg.config, 'Movie', key, eTag);

}

function updateMovie(sessionState, key, movie, eTag) {
	
	return sodaRest.putJSON(sessionState, cfg.config, 'Movie', key, movie, eTag);

}

function getMovieById(sessionState,id) {

  console.log('getMovieById(' + id + ')');
  var qbe = {'id': id};
  return sodaRest.queryByExample(sessionState, cfg.config, 'Movie',qbe).then(
    function(sodaResponse) {
    	sodaResponse.json = sodaResponse.json[0]
    	return sodaResponse;
    }
  )
}

function queryMovies(sessionState, qbe,limit,fields) {
	
	return sodaRest.queryByExample(sessionState, cfg.config, 'Movie',qbe,limit,fields);

}

// Screening Collection

function createScreeningCollection(sessionState) {
	
	return sodaRest.createCollectionWithIndexes(sessionState, cfg.config, 'Screening',collectionMetadata.Screening);

}

function dropScreeningCollection(sessionState) {
	
	return sodaRest.dropCollection(sessionState, cfg.config, 'Screening');

}

function recreateScreeningCollection(sessionState) {
	
	return sodaRest.recreateCollection(sessionState, cfg.config, 'Screening',collectionMetadata.Screening);

}

function insertScreenings(sessionState, screeningList) {
	
	return sodaRest.bulkInsert(sessionState, cfg.config, 'Screening',screeningList);

}

function getScreening(sessionState, key, eTag) {
	
	return sodaRest.getJSON(sessionState, cfg.config, 'Screening', key, eTag);

}

function queryScreenings(sessionState, qbe,limit,fields) {
	
	return sodaRest.queryByExample(sessionState, cfg.config, 'Screening',qbe,limit,fields);

}

function updateScreening(sessionState, key,screening,eTag) {
	
	return sodaRest.putJSON(sessionState, cfg.config, 'Screening',key,screening,eTag);

}

// Ticket Sale Collection

function createTicketSaleCollection(sessionState) {
	
	return sodaRest.createCollectionWithIndexes(sessionState, cfg.config, 'TicketSale', collectionMetadata.TicketSale);

}

function dropTicketSaleCollection(sessionState) {
	
	return sodaRest.dropCollection(sessionState, cfg.config, 'TicketSale');

}

function recreateTicketSaleCollection(sessionState) {
	
	return sodaRest.recreateCollection(sessionState, cfg.config, 'TicketSale', collectionMetadata.TicketSale);

}

function insertTicketSales(sessionState, ticketSaleList) {
	
	return sodaRest.bulkInsert(sessionState, cfg.config, 'TicketSale', ticketSaleList);

}

function insertTicketSale(sessionState, ticketSale) {
	
	return sodaRest.postJSON(sessionState, cfg.config, 'TicketSale', ticketSale);

}

function updateTicketSale(sessionState, key,ticketSale,eTag) {
	
	return sodaRest.putJSON(sessionState, cfg.config, 'TicketSale', key, ticketSale,eTag);

}

function queryTicketSales(sessionState, qbe,limit,fields) {
	
	return sodaRest.queryByExample(sessionState, cfg.config, 'TicketSale', qbe, limit, fields);

}


// Poster Collection

function createPosterCollection(sessionState) {
	
	return sodaRest.createCollectionWithIndexes(sessionState, cfg.config, 'Poster', collectionMetadata.Poster);

}

function dropPosterCollection(sessionState) {
	
	return sodaRest.dropCollection(sessionState, cfg.config, 'Poster');

}

function recreatePosterCollection(sessionState) {
	
	return sodaRest.recreateCollection(sessionState, cfg.config, 'Poster', collectionMetadata.Poster);

}

function insertPoster(sessionState, poster) {
	
	return sodaRest.postDocument(sessionState, cfg.config, 'Poster',poster,'image/jpeg');

}

function getPoster(sessionState, key) {
	
	return sodaRest.getDocument(sessionState, cfg.config, 'Poster',key);

}

function createLogRecordCollection() {
	
	return sodaRest.createCollectionWithIndexes(sodaLoggingDisabled, cfg.config, logCollectionName, collectionMetadata.MovieTicketLog);

}

function initializeSodaLogging(sessionState) {

	if ((sessionState.sodaLoggingEnabled) && (sessionState.logCollectionName == null)) {
    sessionState.logCollectionName = logCollectionName;
	}

}

function writeLogEntry(logEntry) {
	 
	 sodaRest.postJSON(sodaLoggingDisabled, cfg.config, logCollectionName, logEntry);
	 
}

function logError(error, body) {
	 
	 error.body = body;	
	 writeLogEntry(error);
	 
}

function getLogRecordByOperationId(id) {

  var qbe = {'operationId': id, '$orderby' : {'startTime':1}};
  return sodaRest.queryByExample(sodaLoggingDisabled, cfg.config, logCollectionName, qbe).then(
    function(sodaResponse) {
    	return sodaResponse;
    }
  )
}

function createEmptyCollections() {

  createLogRecordCollection().then(function(){
    createTicketSaleCollection(sodaLoggingDisabled);
  }).catch(function(e){
   	console.log('movie_ticket_api.js: Error during Collection Creation.');
		console.log(JSON.stringify(e));
		throw e;
  });
}

function initialize() {
	
	sodaRest.featureDetection(cfg.config);
  createEmptyCollections();	
}