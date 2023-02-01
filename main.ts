input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.sendString("HABE ")
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (FunkGroup == 1) {
        FunkGroup = 9
    } else {
        FunkGroup += -1
    }
    basic.showNumber(FunkGroup)
    radio.setGroup(FunkGroup)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    radio.sendString(" Hi")
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    radio.sendString("DICH GEHEKT")
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    radio.sendString("VON MIRO")
})
let FunkGroup = 0
FunkGroup = 1
radio.setGroup(FunkGroup)
