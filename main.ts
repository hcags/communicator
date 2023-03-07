input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    sendString("wie gehts?")
})
function sendString (sendText: string) {
    radio.sendString(sendText)
    basic.setLedColor(0x00ff00)
    basic.pause(500)
    basic.setLedColor(0xffff00)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Funkgruppe == 1) {
        Funkgruppe = 9
    } else {
        Funkgruppe += -1
    }
    basic.showNumber(Funkgruppe)
    radio.setGroup(Funkgruppe)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Funkgruppe == 9) {
        Funkgruppe = 1
    } else {
        Funkgruppe += 1
    }
    basic.showNumber(Funkgruppe)
    radio.setGroup(Funkgruppe)
})
radio.onReceivedString(function (receivedString) {
    basic.setLedColor(0xff0000)
    basic.showString(receivedString)
    basic.setLedColor(0xffff00)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    sendString("Hi du :)")
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    sendString("Was machst du?")
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    sendString("Tschau")
})
let Funkgruppe = 0
Funkgruppe = 1
radio.setGroup(Funkgruppe)
basic.setLedColor(0xffff00)
