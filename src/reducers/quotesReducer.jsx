import quotes from '../components/quotes.json'
import { createStore } from 'redux';
import { getRandomNumber } from '../functions'
//redux
const FETCH_DATA = 'FETCH_DATA';
//actions
export const fetchData = (rN) => {
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

export const quotesReducer =  (state=initialState, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return {
				quote: action.quote,
				author: action.author,
			}
		default:
			return state;
	}
};

export const store = createStore(quotesReducer);

export const mapStateToProps = state => {
	return {
		state: state,
	}
}
export const mapDispatchToProps = dispatch => {
	return {
		fetchNewQuote: () => {
			dispatch(fetchData(getRandomNumber()))
		},
	}
}