export const getRandomNumber = () => Math.floor(Math.random() * 102 + 1)

export const getRamdomColor = () => {
	const rN = () => Math.floor(Math.random() * 255 + 1);
	return `rgb(${rN()}, ${rN()}, ${rN()})`
}