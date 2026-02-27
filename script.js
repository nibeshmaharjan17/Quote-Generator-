const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.", author: "Wayne Dyer" },
    { text: "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened.", author: "Helen Keller" },
    { text: "The greatest weapon against stress is our ability to choose one thought over another.", author: "William James" },
    { text: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "You may have to fight a battle more than once to win it.", author: "Margaret Thatcher" },
    { text: "If you want to fly, you have to give up the things that weigh you down.", author: "Toni Morrison" },
    { text: "Nobody can bring you peace but yourself.", author: "Ralph Waldo Emerson" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "Yesterday is not ours to recover, but tomorrow is ours to win or lose.", author: "Lyndon B. Johnson" },
    { text: "When you misstep, it's not a failure; it's a redirection.", author: "Unknown" },
    { text: "If you're going through hell, keep going.", author: "Winston Churchill" },
    { text: "Do not let the behavior of others destroy your inner peace.", author: "Dalai Lama" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "The only thing a person can ever really do is keep moving forward. Take that big leap forward without hesitation, without once looking back.", author: "Sally Berneathy" },
    { text: "There’s no talent here, this is just hard work. This is an obsession. Talent doesn’t exist, we are all equals as human beings. You could be anyone if you put in the time.", author: "Conor McGregor" },
];

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const tweetBtn = document.getElementById('tweetBtn');
const copyBtn = document.getElementById('copyBtn');

function updateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    quoteText.parentElement.classList.remove('fade-up');
    void quoteText.offsetWidth; 
    quoteText.parentElement.classList.add('fade-up');

    quoteText.innerText = randomQuote.text;
    quoteAuthor.innerText = `— ${randomQuote.author}`;
}


tweetBtn.addEventListener('click', () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} ${quoteAuthor.innerText}`;
    window.open(twitterUrl, '_blank');
});

// Copy to Clipboard
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(`${quoteText.innerText} ${quoteAuthor.innerText}`);
    alert("Quote copied to clipboard!");
});

newQuoteBtn.addEventListener('click', updateQuote);
window.onload = updateQuote;