// 전체 데이터 저장 함수
function saveDataToSheet(data) {
  fetch("https://script.google.com/macros/s/AKfycbw-KrRW94QEVjcGkegF7JsYzXFVXKR8jsLUTmw8NfC26iXLbqs8aH0tUlUubyiXiPWT/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}
