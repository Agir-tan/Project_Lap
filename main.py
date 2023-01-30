udn = 0
temperature = 0
# ignore low

def on_button_pressed_a():
    global udn
    udn = 1
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

# all

def on_button_pressed_ab():
    global udn
    udn = 0
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

# ignore high

def on_button_pressed_b():
    global udn
    udn = 2
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

# sound if temperature not ideal

def on_every_interval():
    global temperature, udn
    temperature = input.temperature()
    if temperature < 17:
        while udn != 1:
            for index in range(3):
                music.play_tone(4000, music.beat(BeatFraction.WHOLE))
                music.play_tone(4200, music.beat(BeatFraction.WHOLE))
                music.play_tone(4400, music.beat(BeatFraction.WHOLE))
            basic.pause(5000)
    elif temperature > 21:
        while udn != 2:
            for index2 in range(3):
                music.play_tone(4400, music.beat(BeatFraction.WHOLE))
                music.play_tone(4200, music.beat(BeatFraction.WHOLE))
                music.play_tone(4000, music.beat(BeatFraction.WHOLE))
            basic.pause(5000)
    if temperature > 17 and temperature < 21:
        udn = 0
loops.every_interval(60000, on_every_interval)

# leds if temperature not ideal

def on_every_interval2():
    global temperature
    temperature = input.temperature()
    if temperature < 17:
        while udn != 1:
            basic.show_leds("""
                . . # . .
                                . # # # .
                                # . # . #
                                . . # . .
                                . . . . .
            """)
            basic.show_leds("""
                . # # # .
                                # . # . #
                                . . # . .
                                . . . . .
                                . . # . .
            """)
            basic.show_leds("""
                # . # . #
                                . . # . .
                                . . . . .
                                . . # . .
                                . # # # .
            """)
            basic.show_leds("""
                . . # . .
                                . . . . .
                                . . # . .
                                . # # # .
                                # . # . #
            """)
            basic.show_leds("""
                . . . . .
                                . . # . .
                                . # # # .
                                # . # . #
                                . . # . .
            """)
    elif temperature > 21:
        while udn != 2:
            basic.show_leds("""
                . . . . .
                                . . # . .
                                # . # . #
                                . # # # .
                                . . # . .
            """)
            basic.show_leds("""
                . . # . .
                                . . . . .
                                . . # . .
                                # . # . #
                                . # # # .
            """)
            basic.show_leds("""
                . # # # .
                                . . # . .
                                . . . . .
                                . . # . .
                                # . # . #
            """)
            basic.show_leds("""
                # . # . #
                                . # # # .
                                . . # . .
                                . . . . .
                                . . # . .
            """)
            basic.show_leds("""
                . . # . .
                                # . # . #
                                . # # # .
                                . . # . .
                                . . . . .
            """)
loops.every_interval(60000, on_every_interval2)
