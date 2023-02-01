input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.sendString("Ihr")
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (funkGroup == 1) {
        funkGroup = 9
    } else {
        funkGroup += -1
    }
    basic.showNumber(funkGroup)
    radio.setGroup(funkGroup)
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
let funkGroup = 0
funkGroup = 1
radio.setGroup(funkGroup)
