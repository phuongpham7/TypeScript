
///<reference path='CardSuit.ts' />
module PhuongPham {
    export class PlayingCard {
        CardName: string;
        CardValue: string;
        CardImageLocation: string;
        CardSoundLocation: string;
        Suit: CardSuit;

        constructor(cardName: string, cardValue: string, imageLocation: string, cardSuit: CardSuit, cardSound?: string) {
            this.Suit = cardSuit;
            this.CardName = cardName;
            this.CardValue = cardValue;
            this.CardImageLocation = imageLocation;
            this.CardSoundLocation = cardSound;
        }
    }
}

var myCurrentCard = new PhuongPham.PlayingCard("ACE", "14", "", PhuongPham.CardSuit.Diamond, "");