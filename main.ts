let udn = 0
let temperature = 0
// ignore low
input.onButtonPressed(Button.A, function () {
    udn = 1
})
// all
input.onButtonPressed(Button.AB, function () {
    udn = 0
})
// ignore high
input.onButtonPressed(Button.B, function () {
    udn = 2
})
// sound if temperature not ideal
loops.everyInterval(60000, function () {
    temperature = input.temperature()
    if (temperature < 17) {
        while (udn != 1) {
            for (let index = 0; index < 3; index++) {
                music.playTone(4000, music.beat(BeatFraction.Whole))
                music.playTone(4200, music.beat(BeatFraction.Whole))
                music.playTone(4400, music.beat(BeatFraction.Whole))
            }
            basic.pause(5000)
        }
    } else {
        while (udn != 2) {
            for (let index = 0; index < 3; index++) {
                music.playTone(4400, music.beat(BeatFraction.Whole))
                music.playTone(4200, music.beat(BeatFraction.Whole))
                music.playTone(4000, music.beat(BeatFraction.Whole))
            }
            basic.pause(5000)
        }
    }
    if (temperature < 17) {
        while (udn != 2) {
            basic.showLeds(`
                . # . . .
                . # . # .
                . # # # #
                # # # # #
                . # # # .
                `)
        }
    } else if (temperature > 21) {
    	
    }
})
