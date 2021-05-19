'use strict';
goog.provide('Blockly.Arduino.EMW3080');
goog.require('Blockly.Arduino');

Blockly.Arduino.include_lib = function() {
    Blockly.Arduino.definitions_['define_'] = '#include <EMW3080.h>';
    return '';
}

Blockly.Arduino.wifi_connect = function() {
    var text_wifi_ssid = this.getFieldValue('SSID');
    var text_wifi_password = this.getFieldValue('PASSWORD');
    Blockly.Arduino.setups_['setup_connect' + text_wifi_ssid + text_wifi_password] = 'while(1) {\n\tif (!WiFi_init("' + text_wifi_ssid + '", "' + text_wifi_password +'"))continue;\n\tbreak;\n  }';
    return '';
}

Blockly.Arduino.mqtt_connect = function() {
    var text_mqtt_productkey = this.getFieldValue('PRODUCTKEY');
    var text_mqtt_devicename = this.getFieldValue('DEVICENAME');
    var text_mqtt_password = this.getFieldValue('MQTT_PASSWORD');
    Blockly.Arduino.setups_['setup_connect' + text_mqtt_productkey + text_mqtt_devicename + text_mqtt_password] = 'while(1) {\n\tif (!Ali_connect("' + text_mqtt_productkey + '", "' + text_mqtt_devicename + '", "' + text_mqtt_password +'"))continue;\n\tbreak;\n  }';
    return '';
}

Blockly.Arduino.send_mqtt_message = function() {
    var text_mqtt_topic = this.getFieldValue('TOPIC');
    var text_mqtt_message = this.getFieldValue('MESSAGE');
    var code = 'Upload("' + text_mqtt_topic + '","' + text_mqtt_message + '");\n'
    return code;
}
