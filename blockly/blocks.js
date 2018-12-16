Blockly.JavaScript['face_load'] = function(block) {
  var dropdown_model = block.getFieldValue('model');
  var code = 'await faceAPI.loadModel();\n';
  return code;
};

Blockly.JavaScript['face_get_description'] = function (block) {
  var face_URL = Blockly.JavaScript.valueToCode(block, 'description', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "await faceAPI.getDescription(" + face_URL + ")"
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['face_get_euclideanDistance'] = function (block) {
  var face1 = Blockly.JavaScript.valueToCode(block, 'faceA', Blockly.JavaScript.ORDER_ATOMIC);
  var face2 = Blockly.JavaScript.valueToCode(block, 'faceB', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "await faceAPI.euclideanDistance(" + face1 + "," + face2 + ")";
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#g73ris
Blockly.JavaScript['face_get_camera'] = function (block) {
  var variable_camera = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('camera'), Blockly.Variables.NAME_TYPE);
  var text_src = block.getFieldValue('src');
  var code = variable_camera + ' = createCamera("' + text_src + '",224,224,async function(img){\n';
  code += '  ' + variable_camera + ".blobData = img;\n";
  code += '});\n';
  return code;
};


Blockly.JavaScript['face_get_canvas'] = function (block) {
  var variable_canvas = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('camera'), Blockly.Variables.NAME_TYPE);
  var code = variable_canvas + '.blobData';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

