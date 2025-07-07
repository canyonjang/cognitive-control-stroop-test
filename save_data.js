// 전체 데이터 저장 함수
function saveDataToSheet(data) {
  fetch("https://script.google.com/macros/s/AKfycbxCeYdGMlbgWYYMVBKSNm-xXblsnXotGYPMZAjLzK_2EzMXLrJxsMMjbFNncFl_QmyhxQ/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}
