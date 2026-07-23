/* Self-check interactions for course learning pages.
   Markup contract:
   <div class="q" data-answer="b">
     <p class="q-text">…</p>
     <ol class="q-opts">
       <li><button data-opt="a">…</button></li>
       …
     </ol>
     <div class="q-why" hidden>…</div>
   </div>
   Clicking an option marks it right/wrong; the rationale reveals
   once the correct option has been found. Options stay clickable
   so students can explore why the others are wrong.
*/
(function () {
  "use strict";

  document.querySelectorAll(".q[data-answer]").forEach(function (q) {
    var answer = q.getAttribute("data-answer");
    var why = q.querySelector(".q-why");

    q.querySelectorAll(".q-opts button[data-opt]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var isCorrect = btn.getAttribute("data-opt") === answer;
        btn.classList.remove("correct", "incorrect");
        btn.classList.add(isCorrect ? "correct" : "incorrect");
        if (isCorrect && why) {
          why.hidden = false;
          q.querySelectorAll("button.incorrect").forEach(function (other) {
            if (other !== btn) other.classList.remove("incorrect");
          });
        }
      });
    });
  });
})();
