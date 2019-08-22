Blockly.JavaScript['esp_now.setup'] = function(block) {
	var code = '';
	code += '#EXTINC#include <esp_now_class.h>#END\n';
	code += '#VARIABLE ESP_NOW_CLASS esp_now = ESP_NOW_CLASS();#END\n';
	return code;
};

Blockly.JavaScript['esp_now.get_mac'] = function(block) {
	var code = 'esp_now.getMAC()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['esp_now.send'] = function(block) {
	var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC) || '\"\"';
	var code = 'esp_now.send(' + value_data + ');\n';
	return code;
};

Blockly.JavaScript['esp_now.send2'] = function(block) {
	var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC) || '\"\"';
	var text_mac = block.getFieldValue('mac');
	var code = 'esp_now.send("' + text_mac + '", ' + value_data + ');\n';
	return code;
};

Blockly.JavaScript['esp_now.recv'] = function(block) {
	var statements_recv_cb = Blockly.JavaScript.statementToCode(block, 'recv_cb');
	var code = 'esp_now.onRecv([]() { ' + statements_recv_cb + ' });\n';
	return code;
};

Blockly.JavaScript['esp_now.read_string'] = function(block) {
	var code = 'esp_now.readString()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['esp_now.read_number'] = function(block) {
	var code = 'esp_now.readNumber()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
