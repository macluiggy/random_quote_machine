import React, { useEffect, useState } from 'react';
import '../scss/header.scss';
import quotes from './quotes.json'
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import {
		quotesReducer, 
		fetchData,  
		mapDispatchToProps, 
		mapStateToProps, 
	} from '../reducers/quotesReducer'


console.log(quotes.length)

//react
const Header = ({state, fetchNewQuote}) => {
	const {quote, author} = state
	const newQuote = () => {
		fetchNewQuote()
	}

	useEffect(() => {
		console.log(`useEffect`)
		//fetchNewQuote()
	}, [])
	return (
		<header id='quote-box'>
	      <div id='wrapper'>
	      	<div id='quote-text'>
		        <span id='text' >{quote}</span>
		    </div>
		    <div id='quote-author'>
		        <span id='author'>{author}</span>
		    </div>
		    <div className='buttons'>
		        <button id='new-quote' onClick={newQuote} >New quote</button>
		        <a target='_blank' href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`} id='tweet-quote'>twiter</a>
 			</div>
	      </div>
	    </header>
		)
}
//react redux


export default connect(mapStateToProps, mapDispatchToProps)(Header);

