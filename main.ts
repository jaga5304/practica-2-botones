input.onButtonPressed(Button.A, function () {
    led.setBrightness(brillo)
    led.plot(2, 0)
    led.plot(2, 1)
    led.plot(2, 2)
    led.plot(2, 3)
    led.plot(2, 4)
    brillo = brillo + 10
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(brillo)
    led.plot(2, 0)
    led.plot(2, 1)
    led.plot(2, 2)
    led.plot(2, 3)
    led.plot(2, 4)
    brillo = brillo - 10
})
let brillo = 0
brillo = 0
basic.forever(function () {
	
})
