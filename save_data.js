// 데이터 저장: Google Sheet 연동용 URL 필요
jsPsych.init({
  on_data_update: function(data) {
    fetch("https://script.google.com/macros/s/AKfycbwldjJxbsINse6inWpdAG3YP30UubMghkDS6pdi7mjAdhwriRefyI-m0jiF6wymL--RZA/exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
});
