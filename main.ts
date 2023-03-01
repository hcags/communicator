input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.sendString("Ihr")
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
    radio.sendString("Hallo")
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    radio.sendString("Komischen")
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    radio.sendString("Kleinen Menschen")
})
let Funkgruppe = 0
Funkgruppe += 1
