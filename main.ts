basic.forever(function () {
    if (20 < input.soundLevel()) {
        motorbit.brake()
        motorbit.forward(100)
        basic.pause(3000)
    } else {
        motorbit.brake()
        motorbit.forward(54)
        basic.pause(5000)
        motorbit.brake()
        motorbit.back(55)
        basic.pause(5000)
    }
})
