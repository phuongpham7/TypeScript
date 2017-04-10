///<reference path='CardSuit.ts' />
var PhuongPham;
(function (PhuongPham) {
    var PlayingCard = (function () {
        function PlayingCard(cardName, cardValue, imageLocation, cardSuit, cardSound) {
            this.Suit = cardSuit;
            this.CardName = cardName;
            this.CardValue = cardValue;
            this.CardImageLocation = imageLocation;
            this.CardSoundLocation = cardSound;
        }
        return PlayingCard;
    }());
    PhuongPham.PlayingCard = PlayingCard;
})(PhuongPham || (PhuongPham = {}));
var myCurrentCard = new PhuongPham.PlayingCard("ACE", "14", "", PhuongPham.CardSuit.Diamond, "");
//# sourceMappingURL=PlayingCard.js.map