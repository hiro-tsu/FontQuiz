(function() {
  // 'use strict';

  var question = document.getElementById('question');
  var btn = document.getElementById('btn');
  var answers = document.querySelectorAll('#answers > li');
  var shuffledAnswers;

  var quizSet = [
    {q: 'What is A?', a: ['A0', 'A1', 'A2']},
    {q: 'What is B?', a: ['B0', 'B1', 'B2']},
    {q: 'What is C?', a: ['C0', 'C1', 'C2']}
  ];

  var currentNum = 0;

  function shuffle(arr) {
    var i;
    var j;
    var tmp;
    for(i = arr.length - 1; i >= 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  question.textContent = quizSet[currentNum].q;
  shuffledAnswers = shuffle(quizSet[currentNum].a);
  answers[0].textContent = shuffledAnswers[0];
  answers[1].textContent = shuffledAnswers[1];
  answers[2].textContent = shuffledAnswers[2];
})();
