const quote = document.getElementById('quote');

const author = document.getElementById('author');

async function getQuote() {
	const baseUrl = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1';

	try {
		const response = await fetch(baseUrl);
		const data = await response.json();

		quote.innerText = data.quotes[0].text;
		author.innerText = data.quotes[0].author;
	} catch (error) {
		console.log('error msg', error);
	}
}

async function tweetQuote() {
	const quoteTweet = quote.innerText;
	const authorTweet = author.innerText;
	const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteTweet} - ${authorTweet}`;
	window.open(tweetUrl, '_blank');
}

newQuoteBut.addEventListener('click', getQuote);
twitterbutton.addEventListener('click', tweetQuote);
