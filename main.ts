basic.showIcon(IconNames.Skull)
basic.forever(function () {
    for (let index = 0; index <= 12; index++) {
        basic.showNumber(index)
        music.playTone(130 + 30 * index, music.beat(BeatFraction.Whole))
    }
})
