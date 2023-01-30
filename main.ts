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
loops.everyInterval(60000, function () {
    temperature = input.temperature()
    if (temperature < 17) {
        while (udn != 1) {
            for (let index = 0; index < 4; index++) {
                for (let index = 0; index < 3; index++) {
                    music.playTone(262, music.beat(BeatFraction.Whole))
                    music.playTone(262, music.beat(BeatFraction.Whole))
                    music.playTone(262, music.beat(BeatFraction.Whole))
                }
                basic.pause(5000)
            }
        }
    } else if (temperature > 21) {
        while (udn != 2) {
            for (let index = 0; index < 4; index++) {
                for (let index = 0; index < 3; index++) {
                    music.playTone(262, music.beat(BeatFraction.Whole))
                    music.playTone(262, music.beat(BeatFraction.Whole))
                    music.playTone(262, music.beat(BeatFraction.Whole))
                }
                basic.pause(5000)
            }
        }
    }
})
