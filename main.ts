input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.sendString("RUHE!!!")
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
    radio.sendString("Guten Tag")
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    radio.sendString("LOS GEHTS!!!")
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    radio.sendString("Heute Funken wir")
})
let funkGroup = 0
funkGroup = 1
radio.setGroup(funkGroup)
