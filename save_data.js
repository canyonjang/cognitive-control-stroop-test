// 전체 데이터 저장 함수
function saveDataToSheet(data) {
  fetch("https://script.google.com/macros/s/AKfycbxfym_6mzpBpmGVEcyjdqw7ejEOq6zgH7swJflKufxIgcx37lW-_BSI9QJJXtIu8HBU5Q/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}
