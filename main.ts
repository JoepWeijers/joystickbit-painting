joystickbit.initJoystickBit()
let brush_x = 2
let brush_y = 2
let paint_mode = "draw"
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 700 && brush_x > 0) {
        brush_x += -1
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 300 && brush_x < 4) {
        brush_x += 1
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 700 && brush_y > 0) {
        brush_y += -1
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 300 && brush_y < 6) {
        brush_y += 1
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        paint_mode = "move"
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        paint_mode = "draw"
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        paint_mode = "erase"
    }
    if (paint_mode == "draw") {
        led.plot(brush_x, brush_y)
    }
    if (paint_mode == "erase") {
        led.unplot(brush_x, brush_y)
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        basic.clearScreen()
    }
    for (let index = 0; index < 2; index++) {
        basic.pause(50)
        led.toggle(brush_x, brush_y)
    }
})
