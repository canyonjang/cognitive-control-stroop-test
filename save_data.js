// 전체 데이터 저장 함수
function saveDataToSheet(data) {
  fetch("https://script.google.com/macros/s/AKfycbzyfakGcKLwqeLMO9GvtZ2zp0Y1e1R2PfxM1DpUX4YFyT2X-D97WGICRrQ2wA8rGrIpkg/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("서버 응답 오류");
    }
    console.log("✅ Google Sheet로 데이터 전송 성공");
  })
  .catch(error => {
    console.error("❌ 데이터 전송 실패:", error);
  });
}
