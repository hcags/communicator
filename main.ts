input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.sendString("Ich habe gerade mit dem Auto gesprochen ")
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Funkgruppe == 1) {
        Funkgruppe = 9
    } else {
        Funkgruppe += -1
    }
    basic.showNumber(Funkgruppe)
    radio.setGroup(Funkgruppe)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    radio.sendString("Ich bin gerade auf der Suche nach einem neuen Auto ")
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    radio.sendString("Das wäre schön wenn du mir noch einen neuen Film schicken könntest ")
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    radio.sendString("Die meisten von uns haben die Möglichkeit das zu schreiben ")
})
let Funkgruppe = 0
Funkgruppe = 1
radio.setGroup(Funkgruppe)
