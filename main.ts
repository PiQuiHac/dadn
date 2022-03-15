function Gas () {
    gas = pins.analogReadPin(AnalogPin.P1)
    map = Math.map(gas, 0, 1023, 0, 100)
    radio.sendString("!23:GAS:" + map + "#")
}
function Nhiệt_Độ_Ẩm () {
    NPNBitKit.DHT11Read(DigitalPin.P0)
    radio.sendString("!7:HUMID:" + NPNBitKit.DHT11Hum() + "#")
    basic.pause(100)
    radio.sendString("!7:TEMP:" + NPNBitKit.DHT11Temp() + "#")
    basic.pause(100)
}
let map = 0
let gas = 0
radio.setGroup(1)
basic.forever(function () {
    Nhiệt_Độ_Ẩm()
    Gas()
})
