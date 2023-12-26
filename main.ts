input.onSound(DetectedSound.Loud, function () {
    motorbit.forward(100)
    basic.pause(5000)
})
input.setSoundThreshold(SoundThreshold.Loud, 189)
basic.forever(function () {
    motorbit.brake()
    motorbit.forward(54)
    basic.pause(5000)
    motorbit.brake()
    motorbit.back(55)
    basic.pause(5000)
})
