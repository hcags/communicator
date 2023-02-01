input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.sendString("Ich habe gerade mit dem Auto gesprochen ")
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Funkgroup == 1) {
        Funkgroup = 9
    } else {
        Funkgroup += -1
    }
    basic.showNumber(Funkgroup)
    radio.setGroup(Funkgroup)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    radio.sendString("Ich bin gerade auf der Suche nach einem neuen Auto ")
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    radio.sendString("Das wäre schön dass wir das Wochenende wieder in die Stadt kommen ")
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    radio.sendString("Die meisten von uns haben die Möglichkeit das zu schreiben ")
})
let Funkgroup = 0
Funkgroup = 1
