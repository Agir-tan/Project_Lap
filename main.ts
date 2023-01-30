let udn = 0
let temperature = 0
// ignore low
input.onButtonPressed(Button.A, function () {
    udn = 1
    basic.clearScreen()
})
// all
input.onButtonPressed(Button.AB, function () {
    udn = 0
    basic.clearScreen()
})
// ignore high
input.onButtonPressed(Button.B, function () {
    udn = 2
    basic.clearScreen()
})
// leds if temperature not ideal
loops.everyInterval(60000, function () {
    temperature = input.temperature()
    if (temperature < 17) {
        while (udn != 1) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . # # # .
                # . # . #
                . . # . .
                . . . . .
                . . # . .
                `)
            basic.showLeds(`
                # . # . #
                . . # . .
                . . . . .
                . . # . .
                . # # # .
                `)
            basic.showLeds(`
                . . # . .
                . . . . .
                . . # . .
                . # # # .
                # . # . #
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                `)
        }
    } else if (temperature > 21) {
        while (udn != 2) {
            basic.showLeds(`
                . . . . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            basic.showLeds(`
                . . # . .
                . . . . .
                . . # . .
                # . # . #
                . # # # .
                `)
            basic.showLeds(`
                . # # # .
                . . # . .
                . . . . .
                . . # . .
                # . # . #
                `)
            basic.showLeds(`
                # . # . #
                . # # # .
                . . # . .
                . . . . .
                . . # . .
                `)
            basic.showLeds(`
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                . . . . .
                `)
        }
    }
})
// sound if temperature not ideal
loops.everyInterval(60000, function () {
    temperature = input.temperature()
    if (temperature < 17) {
        while (udn != 1) {
            for (let index = 0; index < 3; index++) {
                music.playTone(262, music.beat(BeatFraction.Whole))
                music.playTone(262, music.beat(BeatFraction.Whole))
                music.playTone(262, music.beat(BeatFraction.Whole))
            }
            basic.pause(5000)
        }
    } else if (temperature > 21) {
        while (udn != 2) {
            for (let index = 0; index < 3; index++) {
                music.playTone(262, music.beat(BeatFraction.Whole))
                music.playTone(262, music.beat(BeatFraction.Whole))
                music.playTone(262, music.beat(BeatFraction.Whole))
            }
            basic.pause(5000)
        }
    }
    if (temperature > 17 && temperature < 21) {
        udn = 0
    }
})
