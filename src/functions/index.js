import quotes from '../components/quotes'
export const getRandomNumber = () => Math.floor(Math.random() * quotes.length )

export const getRandomColor = () => {
	const rN = () => Math.floor(Math.random() * 357 + 1);
	const percentage = () => Math.floor(Math.random() * 100 +1)
	return `hsl(${rN()}, ${percentage()}%, 40%)`
}

