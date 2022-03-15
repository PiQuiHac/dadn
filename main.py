def Độ_Ẩm():
    NPNBitKit.dht11_read(DigitalPin.P0)
    radio.send_string("!7:HUMID:" + str(NPNBitKit.dht11_hum()) + "#")
    basic.pause(100)
    radio.send_string("!7:TEMP:" + str(NPNBitKit.dht11_temp()) + "#")
    basic.pause(100)
def Gas():
    global gas, map2
    gas = pins.analog_read_pin(AnalogPin.P1)
    map2 = Math.map(gas, 0, 1023, 0, 100)
    radio.send_string("!23:GAS:" + str(map2) + "#")
map2 = 0
gas = 0
radio.set_group(1)

def on_forever():
    pass
basic.forever(on_forever)
