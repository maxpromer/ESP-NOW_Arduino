Blockly.Blocks['esp_now.setup'] = {
	init: function() {
		this.jsonInit({
			"message0": "ESP-NOW Setup",
			"args0": [],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 60,
			"tooltip": "Setup ESP-NOW ready to play !",
			"helpUrl": "https://store.kidbright.info/"
		});
	}
};

Blockly.Blocks['esp_now.get_mac'] = {
	init: function() {
		this.jsonInit({
			"message0": "ESP-NOW get my mac address",
			"output": "String",
			"colour": 60,
			"tooltip": "Get my KidBright MAC Address",
			"helpUrl": "https://store.kidbright.info/"
		});
	}
};

Blockly.Blocks['esp_now.send'] = {
	init: function() {
		this.jsonInit({
			"message0": "ESP-NOW send %1",
			"args0": [{
				"type": "input_value",
				"name": "data",
				"check": [
					"Boolean",
					"Number",
					"String"
				]
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 60,
			"tooltip": "Send data between KidBright32 via ESP-NOW",
			"helpUrl": "https://store.kidbright.info/"
		});
	}
};

Blockly.Blocks['esp_now.send2'] = {
	init: function() {
		this.jsonInit({
			"message0": "ESP-NOW send %1 to %2",
			"args0": [{
				"type": "input_value",
				"name": "data",
				"check": [
					"Boolean",
					"Number",
					"String"
				]
			}, {
				"type": "field_input",
				"name": "mac",
				"text": "FF:FF:FF:FF:FF:FF"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 60,
			"tooltip": "Send data to once KidBright32 via ESP-NOW",
			"helpUrl": "https://store.kidbright.info/"
		});
	}
};

Blockly.Blocks['esp_now.recv'] = {
	init: function() {
		this.jsonInit({
			"message0": "ESP-NOW on receiving %1 %2",
			"args0": [{
				"type": "input_dummy"
			}, {
				"type": "input_statement",
				"name": "recv_cb"
			}],
			"previousStatement": null,
			"nextStatement": null,
			"colour": 60,
			"tooltip": "Do in this block when receiving from other KidBright32 via ESP-NOW",
			"helpUrl": "https://store.kidbright.info/"
		});
	}
};

Blockly.Blocks['esp_now.read_string'] = {
	init: function() {
		this.jsonInit({
			"message0": "ESP-NOW read text",
			"output": "String",
			"colour": 60,
			"tooltip": "Read text from other KidBright32 via ESP-NOW",
			"helpUrl": "https://store.kidbright.info/"
		});
	}
};

Blockly.Blocks['esp_now.read_number'] = {
	init: function() {
		this.jsonInit({
			"message0": "ESP-NOW read number",
			"output": "Number",
			"colour": 60,
			"tooltip": "Read number from other KidBright32 via ESP-NOW",
			"helpUrl": "https://store.kidbright.info/"
		});
	}
};

