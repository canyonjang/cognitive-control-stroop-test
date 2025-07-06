/*!
 * jsPsych 6.3.1 core (placeholder)
 * 실제 사용 시에는 jsPsych 공식 깃허브에서 원본 js를 받아 넣으세요.
 * https://github.com/jspsych/jsPsych/releases/tag/6.3.1
 */
var jsPsych = {
    init: function(params) {
        document.getElementById('jspsych-target').innerHTML = '<p>실험이 시작됩니다...</p>';
        if (params.timeline) {
            console.log("Timeline loaded", params.timeline);
        }
        if (params.on_finish) {
            setTimeout(params.on_finish, 1000);
        }
    },
    randomization: {
        randomID: function(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for ( var i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * characters.length));
           }
           return result;
        },
        sampleWithoutReplacement: function(arr, n) {
            var shuffled = arr.slice(0), i = arr.length, temp, index;
            while (i--) {
                index = Math.floor((i + 1) * Math.random());
                temp = shuffled[index];
                shuffled[index] = shuffled[i];
                shuffled[i] = temp;
            }
            return shuffled.slice(0, n);
        }
    }
};
