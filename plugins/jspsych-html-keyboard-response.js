
jsPsych.plugins['html-keyboard-response'] = (function() {
  var plugin = {};
  plugin.info = { name: 'html-keyboard-response', parameters: {} };
  plugin.trial = function(display_element, trial) {
    display_element.innerHTML = '<p>Sample stimulus</p>';
    var after_response = function(info) { jsPsych.finishTrial({}); };
    jsPsych.pluginAPI.getKeyboardResponse({callback_function: after_response});
  };
  return plugin;
})();
