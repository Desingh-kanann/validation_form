function quotesGen(){
    randomQuote =  Math.floor(Math.random() * quote.length)
    getQuotes= quote[randomQuote]

    document.getElementById('quotes-daily').innerHTML = getQuotes
}

 quote=["You must be the change you wish to see in the world",
"Spread love everywhere you go","Darkness cannot drive out darkness: only light can do that.",
"Do one thing every day that scares you.", "Well done is better than well said."
]