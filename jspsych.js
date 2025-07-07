/*!
 * jsPsych 6.3.1
 * https://www.jspsych.org
 */
var jsPsych = {
  init: function(params) {
    document.getElementById('jspsych-target').innerHTML = '<p>실험이 시작됩니다...</p>';
    if (params.timeline) {
      console.log("Timeline loaded", params.timeline);
    }
  },
  plugins: {},
  pluginAPI: {
    getKeyboardResponse: function(params) {
      document.addEventListener('keydown', function handler(e) {
        document.removeEventListener('keydown', handler);
        params.callback_function({ key: e.key });
      });
    }
  },
  finishTrial: function(data) {
    console.log("Trial finished", data);
  }
};
