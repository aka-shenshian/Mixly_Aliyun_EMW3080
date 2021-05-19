'use strict';
goog.provide('Blockly.Blocks.EMW3080');
goog.require('Blockly.Blocks');

Blockly.Blocks.include_lib = {
    init: function () {
        this.appendDummyInput("")
            .appendField(Blockly.INCLUDE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks.wifi_connect = {
    init: function () {
        this.appendDummyInput("")
            .appendField(Blockly.WIFI_CONNECT);
        this.appendDummyInput("")
            .appendField(Blockly.WIFI_SSID)
            .appendField(new Blockly.FieldTextInput('your_ssid'), "SSID");
        this.appendDummyInput("")
            .appendField(Blockly.WIFI_PASSWORD)
            .appendField(new Blockly.FieldTextInput('your_password'), "PASSWORD");
        
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks.mqtt_connect = {
    init: function () {
        this.appendDummyInput("")
            .appendField(Blockly.MQTT_CONNECT);
        this.appendDummyInput("")
            .appendField(Blockly.MQTT_PRODUCTKEY)
            .appendField(new Blockly.FieldTextInput('your_ProductKey'), "PRODUCTKEY");
        this.appendDummyInput("")
            .appendField(Blockly.MQTT_DEVICENAME)
            .appendField(new Blockly.FieldTextInput('your_DeviceName'), "DEVICENAME");
        this.appendDummyInput("")
            .appendField(Blockly.MQTT_PASSWORD)
            .appendField(new Blockly.FieldTextInput('your_Password'), "MQTT_PASSWORD");
        
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks.send_mqtt_message = {
    init: function () {
        this.appendDummyInput("")
            .appendField(Blockly.MQTT_PUBLISH);
        this.appendDummyInput("")
            .appendField(Blockly.MQTT_TOPIC)
            .appendField(new Blockly.FieldTextInput('your_Topic'), "TOPIC");
        this.appendDummyInput("")
            .appendField(Blockly.MQTT_MESSAGE)
            .appendField(new Blockly.FieldTextInput('MQTT_Message'), "MESSAGE");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};