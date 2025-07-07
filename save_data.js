// ✅ Google Form으로 데이터 전송 함수
function saveDataToSheet(data) {
  const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSe_HThhsN0Ce8ysQvTE1fdrjwBkxjmzRw1J7xZl_Ee_LVkF2w/formResponse";

  // ✅ 각 항목의 Entry ID (Google Form 실행 로그에서 복사한 값)
  const entryIDs = {
    subject_id: "932143536",
    condition: "1841598794",
    trial_index: "938223106",
    stimulus: "1369524967",
    response: "832986639",
    rt: "1227397003",
    correct: "380677287"
  };

  // ✅ trial 하나씩 전송 (속도 조절)
  data.forEach((trial, i) => {
    console.log("전송할 trial:", trial);

    const formData = new FormData();
    formData.append(`entry.${entryIDs.subject_id}`, trial.subject_id || "");
    formData.append(`entry.${entryIDs.condition}`, trial.condition || "");
    formData.append(`entry.${entryIDs.trial_index}`, trial.trial_index || "");
    formData.append(`entry.${entryIDs.stimulus}`, trial.stimulus || "");
    formData.append(`entry.${entryIDs.response}`, trial.response || "");
    formData.append(`entry.${entryIDs.rt}`, trial.rt || "");
    formData.append(`entry.${entryIDs.correct}`, trial.correct || "");

    // 약간의 시간차 두고 전송
    setTimeout(() => {
      fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });
    }, i * 300); // 0.3초 간격
  });
}

