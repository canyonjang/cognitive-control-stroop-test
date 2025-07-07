// 숫자 Stroop 실험 구성
var stroop_stimuli = [
  {stimulus: "3 3 3", correct_response: "3"},
  {stimulus: "7 7", correct_response: "2"},
  {stimulus: "9 9 9 9", correct_response: "4"},
  {stimulus: "2", correct_response: "1"},
  {stimulus: "5 5 5 5 5", correct_response: "5"}
];

var stroop_trials = stroop_stimuli.map(function(trial, index) {
  return {
    type: 'html-keyboard-response',
    stimulus: `<p style="font-size: 40px;">${trial.stimulus}</p>`,
    choices: ['1','2','3','4','5'],
    data: {
      task: 'stroop',
      correct: trial.correct_response,
      trial_index: index,
      stimulus: trial.stimulus,
      condition: condition,
      subject_id: subject_id
    },
    on_finish: function(data){
      data.correct = data.response == data.correct;
    }
  };
});

console.log("stroop_trials 생성됨:", stroop_trials);


