// ✅ Google Form으로 데이터 전송 함수
function saveDataToSheet(data) {
  const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSe_HThhsN0Ce8ysQvTElfdrjwBkxjmzRw1J7xZl_Ee_LVkF2w/formResponse";

  // ✅ 각 항목의 Entry ID (Google Form 실행 로그에서 복사한 값)
  const entryIDs = {
    subject_id: "943708936",
    condition: "1074800980",
    trial_index: "416728468",
    stimulus: "1569164791",
    response: "1886761202",
    rt: "1845520126",
    correct: "1692536337"
  };

  data.forEach(trial => {
    const formData = new FormData();
    formData.append(`entry.${entryIDs.subject_id}`, trial.subject_id || "");
    formData.append(`entry.${entryIDs.condition}`, trial.condition || "");
    formData.append(`entry.${entryIDs.trial_index}`, trial.trial_index || "");
    formData.append(`entry.${entryIDs.stimulus}`, trial.stimulus || "");
    formData.append(`entry.${entryIDs.response}`, trial.response || "");
    formData.append(`entry.${entryIDs.rt}`, trial.rt || "");
    formData.append(`entry.${entryIDs.correct}`, trial.correct || "");

    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    });
  });
}
