import React, { useEffect, useState } from 'react';
//import './scss/header.scss';
import axios from 'axios';
import quotes from './quotes.json'
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
//import thunk from 'redux-thunk';
var ReduxThunk = require('redux-thunk')
//import logger from 'redux-logger'



console.log(quotes.length)

const getRandomNumber = () => Math.floor(Math.random() * 102 + 1)
//redux
const FETCH_DATA = 'FETCH_DATA';
//actions
const fetchData = (rN) => {
	return {
			type: FETCH_DATA,
			quote: quotes[rN].quote,
			author: quotes[rN].author,
		}
}

let rN = getRandomNumber()
const initialState = {
	quote: quotes[rN].quote,
	author: quotes[rN].author,
}

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return {
				quote: action.quote,
				author: action.author,
			}
		default:
			return state;
	}
}

const store = createStore(reducer);


//react
const Comp = ({state, fetchNewQuote}) => {
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
	      <div id='quote-text'>
	        <span id='text' >{quote}</span>
	      </div>
	      <div id='quote-author'>
	        <span id='author'>{author}</span>
	      </div>
	      <div className='buttons'>
	        <button id='new-quote' onClick={newQuote} >New quote</button>
	        <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=hola%20mi`} id='tweet-quote'>twiter</a>
	      </div>
	    </header>
		)
}
//react redux
const mapStateToProps = state => {
	return {
		state: state,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		fetchNewQuote: () => {
			dispatch(fetchData(getRandomNumber()))
		},
	}
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);
const Header = () => {
	return (
		<Provider store={store}>
			<Container />
		</Provider>
		)
}

export default Header

