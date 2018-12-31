//arrays
var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "dimonds",
	cardImage: "images/queen-of-dimonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "dimonds",
	cardImage: "images/king-of-dimonds.png"
}

];
var cardInPlay = [];
//functions
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

var checkForMatch = function(){
	if (cardInPlay[0] === cardInPlay[1]) {
	alert("You found a match");
}
	else{
		alert('Sorry Try Again');
}
};

var flipCard = function(){
	var cardID = this.getAttribute('data-id');
	cardInPlay.push(cards[cardID].rank);
	this.setAttribute('src', cards[cardID].cardImage);
	if (cardInPlay.length === 2 ) {
	checkForMatch();
	}
}; 

createBoard();


