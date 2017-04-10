///<reference path='PlayingCard.ts' />
var PhuongPham;
(function (PhuongPham) {
    var PlayingCardDeck = (function () {
        function PlayingCardDeck() {
            this.Cards = null;
            this.Cards = new Array();
            //add diamond cards
            this.addCard(new PhuongPham.PlayingCard("Two", "2", "Cards/2_of_diamonds.png", PhuongPham.CardSuit.Diamond));
            this.addCard(new PhuongPham.PlayingCard("Three", "3", "Cards/3_of_diamonds.png", PhuongPham.CardSuit.Diamond));
            this.addCard(new PhuongPham.PlayingCard("Four", "4", "Cards/4_of_diamonds.png", PhuongPham.CardSuit.Diamond));
            this.addCard(new PhuongPham.PlayingCard("Five", "5", "Cards/5_of_diamonds.png", PhuongPham.CardSuit.Diamond));
            this.addCard(new PhuongPham.PlayingCard("Six", "6", "Cards/6_of_diamonds.png", PhuongPham.CardSuit.Diamond));
            this.addCard(new PhuongPham.PlayingCard("Seven", "7", "Cards/7_of_diamonds.png", PhuongPham.CardSuit.Diamond));
            this.addCard(new PhuongPham.PlayingCard("Eight", "8", "Cards/8_of_diamonds.png", PhuongPham.CardSuit.Diamond));
            this.addCard(new PhuongPham.PlayingCard("Nine", "9", "Cards/9_of_diamonds.png", PhuongPham.CardSuit.Diamond));
            this.addCard(new PhuongPham.PlayingCard("Ten", "10", "Cards/10_of_diamonds.png", PhuongPham.CardSuit.Diamond));
            this.addCard(new PhuongPham.PlayingCard("Jack", "11", "Cards/jack_of_diamonds.png", PhuongPham.CardSuit.Diamond));
            this.addCard(new PhuongPham.PlayingCard("Queen", "12", "Cards/queen_of_diamonds.png", PhuongPham.CardSuit.Diamond));
            this.addCard(new PhuongPham.PlayingCard("King", "13", "Cards/king_of_diamonds.png", PhuongPham.CardSuit.Diamond));
            this.addCard(new PhuongPham.PlayingCard("Ace", "14", "Cards/ace_of_diamonds.png", PhuongPham.CardSuit.Diamond));
            //add heart cards
            this.addCard(new PhuongPham.PlayingCard("Two", "2", "Cards/2_of_hearts.png", PhuongPham.CardSuit.Heart));
            this.addCard(new PhuongPham.PlayingCard("Three", "3", "Cards/3_of_hearts.png", PhuongPham.CardSuit.Heart));
            this.addCard(new PhuongPham.PlayingCard("Four", "4", "Cards/4_of_hearts.png", PhuongPham.CardSuit.Heart));
            this.addCard(new PhuongPham.PlayingCard("Five", "5", "Cards/5_of_hearts.png", PhuongPham.CardSuit.Heart));
            this.addCard(new PhuongPham.PlayingCard("Six", "6", "Cards/6_of_hearts.png", PhuongPham.CardSuit.Heart));
            this.addCard(new PhuongPham.PlayingCard("Seven", "7", "Cards/7_of_hearts.png", PhuongPham.CardSuit.Heart));
            this.addCard(new PhuongPham.PlayingCard("Eight", "8", "Cards/8_of_hearts.png", PhuongPham.CardSuit.Heart));
            this.addCard(new PhuongPham.PlayingCard("Nine", "9", "Cards/9_of_hearts.png", PhuongPham.CardSuit.Heart));
            this.addCard(new PhuongPham.PlayingCard("Ten", "10", "Cards/10_of_hearts.png", PhuongPham.CardSuit.Heart));
            this.addCard(new PhuongPham.PlayingCard("Jack", "11", "Cards/jack_of_hearts.png", PhuongPham.CardSuit.Heart));
            this.addCard(new PhuongPham.PlayingCard("Queen", "12", "Cards/queen_of_hearts.png", PhuongPham.CardSuit.Heart));
            this.addCard(new PhuongPham.PlayingCard("King", "13", "Cards/king_of_hearts.png", PhuongPham.CardSuit.Heart));
            this.addCard(new PhuongPham.PlayingCard("Ace", "14", "Cards/ace_of_hearts.png", PhuongPham.CardSuit.Heart));
            //add spade cards
            this.addCard(new PhuongPham.PlayingCard("Two", "2", "Cards/2_of_spades.png", PhuongPham.CardSuit.Spade));
            this.addCard(new PhuongPham.PlayingCard("Three", "3", "Cards/3_of_spades.png", PhuongPham.CardSuit.Spade));
            this.addCard(new PhuongPham.PlayingCard("Four", "4", "Cards/4_of_spades.png", PhuongPham.CardSuit.Spade));
            this.addCard(new PhuongPham.PlayingCard("Five", "5", "Cards/5_of_spades.png", PhuongPham.CardSuit.Spade));
            this.addCard(new PhuongPham.PlayingCard("Six", "6", "Cards/6_of_spades.png", PhuongPham.CardSuit.Spade));
            this.addCard(new PhuongPham.PlayingCard("Seven", "7", "Cards/7_of_spades.png", PhuongPham.CardSuit.Spade));
            this.addCard(new PhuongPham.PlayingCard("Eight", "8", "Cards/8_of_spades.png", PhuongPham.CardSuit.Spade));
            this.addCard(new PhuongPham.PlayingCard("Nine", "9", "Cards/9_of_spades.png", PhuongPham.CardSuit.Spade));
            this.addCard(new PhuongPham.PlayingCard("Ten", "10", "Cards/10_of_spades.png", PhuongPham.CardSuit.Spade));
            this.addCard(new PhuongPham.PlayingCard("Jack", "11", "Cards/jack_of_spades.png", PhuongPham.CardSuit.Spade));
            this.addCard(new PhuongPham.PlayingCard("Queen", "12", "Cards/queen_of_spades.png", PhuongPham.CardSuit.Spade));
            this.addCard(new PhuongPham.PlayingCard("King", "13", "Cards/king_of_spades.png", PhuongPham.CardSuit.Spade));
            this.addCard(new PhuongPham.PlayingCard("Ace", "14", "Cards/ace_of_spades.png", PhuongPham.CardSuit.Spade));
            //add club cards
            this.addCard(new PhuongPham.PlayingCard("Two", "2", "Cards/2_of_clubs.png", PhuongPham.CardSuit.Club));
            this.addCard(new PhuongPham.PlayingCard("Three", "3", "Cards/3_of_clubs.png", PhuongPham.CardSuit.Club));
            this.addCard(new PhuongPham.PlayingCard("Four", "4", "Cards/4_of_clubs.png", PhuongPham.CardSuit.Club));
            this.addCard(new PhuongPham.PlayingCard("Five", "5", "Cards/5_of_clubs.png", PhuongPham.CardSuit.Club));
            this.addCard(new PhuongPham.PlayingCard("Six", "6", "Cards/6_of_clubs.png", PhuongPham.CardSuit.Club));
            this.addCard(new PhuongPham.PlayingCard("Seven", "7", "Cards/7_of_clubs.png", PhuongPham.CardSuit.Club));
            this.addCard(new PhuongPham.PlayingCard("Eight", "8", "Cards/8_of_clubs.png", PhuongPham.CardSuit.Club));
            this.addCard(new PhuongPham.PlayingCard("Nine", "9", "Cards/9_of_clubs.png", PhuongPham.CardSuit.Club));
            this.addCard(new PhuongPham.PlayingCard("Ten", "10", "Cards/10_of_clubs.png", PhuongPham.CardSuit.Club));
            this.addCard(new PhuongPham.PlayingCard("Jack", "11", "Cards/jack_of_clubs.png", PhuongPham.CardSuit.Club));
            this.addCard(new PhuongPham.PlayingCard("Queen", "12", "Cards/queen_of_clubs.png", PhuongPham.CardSuit.Club));
            this.addCard(new PhuongPham.PlayingCard("King", "13", "Cards/king_of_clubs.png", PhuongPham.CardSuit.Club));
            this.addCard(new PhuongPham.PlayingCard("Ace", "14", "Cards/ace_of_clubs.png", PhuongPham.CardSuit.Club));
        }
        PlayingCardDeck.prototype.addCard = function (Card) {
            this.Cards.push(Card);
        };
        PlayingCardDeck.prototype.getCard = function (count) {
            var cardList = [];
            for (var index = 0; index < count; index++) {
                cardList.push(this.Cards[Math.floor(Math.random() * this.Cards.length - 1)]);
            }
            return cardList;
        };
        PlayingCardDeck.prototype.shuffle = function (n) {
            var i, j, k;
            var temp;
            for (i = 0; i < n; i++) {
                for (j = 0; j < this.Cards.length; j++) {
                    k = Math.floor(Math.random() * this.Cards.length);
                    temp = this.Cards[j];
                    this.Cards[j] = this.Cards[k];
                    this.Cards[k] = temp;
                }
            }
        };
        return PlayingCardDeck;
    }());
    PhuongPham.PlayingCardDeck = PlayingCardDeck;
})(PhuongPham || (PhuongPham = {}));
//# sourceMappingURL=PlayingCardDeck.js.map