input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.sendString("Ich mag Katzen ")
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (FUNKGRUPPE == 1) {
        FUNKGRUPPE = 9
    } else {
        FUNKGRUPPE += -1
    }
    basic.showNumber(FUNKGRUPPE)
    radio.setGroup(FUNKGRUPPE)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    radio.sendString("Cool")
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    radio.sendString("Arne ist mein freund")
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    radio.sendString("Lauge UND DIE ZEIT HABEN SICH SCHON IN DEN NÄCHSTEN JAHREN AUF DIE SUCHE UND DEN GANZEN ")
})
let FUNKGRUPPE = 0
FUNKGRUPPE = 1
radio.setGroup(FUNKGRUPPE)
