input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.sendString("Ich mag Katzen ")
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (FunkGoup == 1) {
        FunkGoup = 9
    }
    FunkGoup += -1
    basic.showNumber(FunkGoup)
    radio.setGroup(FunkGoup)
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
    radio.sendString("Laune")
})
let FunkGoup = 0
FunkGoup = 1
radio.setGroup(FunkGoup)
