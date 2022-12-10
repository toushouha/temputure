input.onButtonPressed(Button.A, function () {
    if (20 < input.temperature()) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
basic.showIcon(IconNames.Heart)
