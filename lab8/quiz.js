$(document).ready(function(){
     let answer = ["2009", "Argentina", "Cinderella", "Communism", 'CSCI 111']

	let questions = [
		"Which year Nazarbayev University was founded?",
		"Who won the 2022 FIFA World Cup?",
		"Which Disney character famously leaves a glass slipper behind at a royal ball?",
		"The hammer and sickle is one of the most recognisable symbols of which political ideology?",
		"This assigment is task from which course?"
	]
	let choice_options = [
		["2009", "2010", "2011", "2012"],
		["Argentina", "Kazakhstan", "USA", "France"],
		["Pocahontas", "Sleeping Beauty", "Cinderella", "Elsa"],
		["Communism", "Conservatism", "Republicanism", "Liberalism"],
		["BIOL 120", "CSCI 111","MATH 161","WLL 110"]
	]
    // Generate quiz questions
    // ...
    
//     let quizBox = document.getElementById ("quiz-box"); // JS way
    let quizBox = $("#quiz-box"); // Jquery
    
    let quizzesHtml = ""
    for (let i = 0; i < questions.length; i++) {
         quizzesHtml =
              quizzesHtml +
              `<div class="question">
               <p class="d"> Q${i + 1}. ${questions[i]}</p>
               <label><input type="radio" class="qs" name="q${i + 1}" value="a">${choice_options[i][0]}</label>
               <label><input type="radio" class="qs" name="q${i + 1}" value="b">${choice_options[i][1]}</label>
               <label><input type="radio" class="qs" name="q${i + 1}" value="c">${choice_options[i][2]}</label>
               <label><input type="radio" class="qs" name="q${i + 1}" value="d">${choice_options[i][3]}</label>
           </div>`
    }
    
    quizBox.append(quizzesHtml)
    
    let countCorrect = 0;

    
   $("button").click(function (event) {
     let idx = 0
     countCorrect = 0
     $(`.qs`).each(function (index) {
          let choice = $(this).parent().text()
          if ($(this).prop("checked") == true && answer[idx++] == choice) {
               countCorrect += 1
          }
     })
     $("h2").remove()
     $("#quiz-box").append("<h2>Result of the quiz is: " + countCorrect + "</h2>")
})
});