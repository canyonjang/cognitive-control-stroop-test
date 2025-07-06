// 시나리오 정의 및 랜덤 배정
var subject_id = jsPsych.randomization.randomID(8);
var condition = jsPsych.randomization.sampleWithoutReplacement(["easy", "hard"], 1)[0];
var scenarios = {
  easy: [
    "당신의 친한 친구가 이번 주 생일을 맞습니다. 소소한 선물을 준비하려고 합니다. 예산은 1만 원 내외입니다. 어떻게 선물을 준비하시겠습니까?",
    "다음 학기 등록금을 이미 납부했고, 학과 장학금도 신청한 상태입니다. 추가로 고려할 사항은 없습니다. 등록금과 관련하여 어떤 계획을 세우고 계신가요?",
    "핸드폰 액정이 깨졌지만, 수리는 꼭 필요한 것은 아닙니다. 여유 자금이 약간 있으므로 다음 주쯤 수리할 계획입니다. 어떤 방식으로 해결하시겠습니까?"
  ],
  hard: [
    "당신의 친한 친구가 이번 주 생일을 맞습니다. 선물비와 모임비용을 합치면 4~5만 원이 듭니다. 현재 생활비가 빠듯해 예산을 넘기면 식비를 줄여야 할 수도 있습니다. 어떻게 하시겠습니까?",
    "다음 학기 등록금 납부일이 일주일 남았지만, 아직 필요한 금액의 절반밖에 모으지 못했습니다. 장학금 신청은 놓쳤고, 학자금 대출 외에는 다른 대안이 없습니다. 어떻게 해결하시겠습니까?",
    "핸드폰이 고장나 연락이 불가능한 상황입니다. 수리비로 15만 원이 필요하지만, 현재 예비비가 거의 없습니다. 갑작스런 지출로 식비나 교통비를 줄여야 할 수도 있습니다. 어떻게 하시겠습니까?"
  ]
};

var selected_scenarios = jsPsych.randomization.sampleWithoutReplacement(scenarios[condition], 2);

var scenario_trials = selected_scenarios.map(function(s) {
  return {
    type: 'survey-text',
    questions: [{prompt: s, rows: 5, columns: 60}],
    data: {task: 'scenario', condition: condition, subject_id: subject_id}
  };
});
