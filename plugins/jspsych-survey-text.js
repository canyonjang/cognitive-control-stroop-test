
jsPsych.plugins['survey-text'] = (function() {
  var plugin = {};
  plugin.info = { name: 'survey-text', parameters: {} };
  plugin.trial = function(display_element, trial) {
    display_element.innerHTML = '<input type="text" id="response"><button id="next">Next</button>';
    document.getElementById('next').onclick = function() {
      jsPsych.finishTrial({ response: document.getElementById('response').value });
    };
  };
  return plugin;
})();
