input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.sendString("Ihr")
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
	
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
radio.setGroup(1)
