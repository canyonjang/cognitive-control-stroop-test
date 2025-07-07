// ✅ 전체 데이터 저장 함수 (Google Sheets로 POST 전송)
function saveDataToSheet(data) {
  fetch("https://script.google.com/macros/s/AKfycbxfym_6mzpBpmGVEcyjdqw7ejEOq6zgH7swJflKufxIgcx37lW-_BSI9QJJXtIu8HBU5Q/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      console.log("✅ Google Sheet로 데이터 전송 성공");
    } else {
      console.error("❌ 전송 응답 오류:", response.statusText);
    }
  })
  .catch(error => {
    console.error("❌ 전송 실패:", error);
  });
}
