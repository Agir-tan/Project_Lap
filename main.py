#ignore low
def on_button_pressed_a():
    global udn
    udn = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

#all
def on_button_pressed_ab():
    global udn
    udn = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

#ignore high
def on_button_pressed_b():
    global udn
    udn = 2
input.on_button_pressed(Button.B, on_button_pressed_b)

temperature = 0
udn = 0

def on_every_interval():
    global temperature
    temperature = input.temperature()
    if temperature < 17:
        while udn != 1:
            for index in range(4):
                for index2 in range(3):
                    music.play_tone(4000, music.beat(BeatFraction.WHOLE))
                    music.play_tone(4200, music.beat(BeatFraction.WHOLE))
                    music.play_tone(4400, music.beat(BeatFraction.WHOLE))
                basic.pause(5000)
    else:
        if temperature > 21:
            while udn != 2:
                for index3 in range(4):
                    for index4 in range(3):
                        music.play_tone(4400, music.beat(BeatFraction.WHOLE))
                        music.play_tone(4200, music.beat(BeatFraction.WHOLE))
                        music.play_tone(4000, music.beat(BeatFraction.WHOLE))
                    basic.pause(5000)
loops.every_interval(60000, on_every_interval)
