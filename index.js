var questions = [
  {
    question:"what is the capital of india?",
    options: [ "delhi","mumbai","chandigarh","gurgaon" ],
    right_answer: "delhi"
  },
  {
    question:"what is the full form of HTML?",
    options: [ "high markup language",
                "hyper text mockup language",
                "hyper text markup language",
                "none of the above" 
              ],
    right_answer: "hyper text markup language"
  },
  {
    question:"html is programming language",
    options: [ "yes","no"],
    right_answer: "no"
  },
  {
    question:"In which year india got independence?",
    options: [ "1988","1947","1999", "1948" ],
    right_answer: "1947"
  },
  {
    question:"In which state there is highest population density?",
    options: [ "maharashtra","U.P","bihar", "haryana" ],
    right_answer: "bihar"
  },
  {
    question:" what is best source of fresh water?",
    options: [ "ocean","river","pond", "lake" ],
    right_answer: "lake"
  },
  {
    question:"In which year india got independence?",
    options: [ "1988","1947","1999", "1948" ],
    right_answer: "1947"
  },
  {
    question:"In which year pulwama attack occured?",
    options: [ "1999","2017","2018", "1947" ],
    right_answer: "2017"
  },
  {
    question:"In which year india got first corona case?",
    options: [ "2019","2018","2001", "1948" ],
    right_answer: "2018"
  },
  
];
var score=0;
var currentques=0;
var question_conatiner=document.getElementById("question_container");
var title=document.getElementById("title");
var options=document.getElementById("options");
var result = document.getElementById("result");
var submit = document.getElementById("submit");
var next = document.getElementById("next");
var answersheet=document.getElementById("answersheet");
var quiz=document.getElementById("quiz");
var key=document.getElementById("key");
var restart = document.getElementById("restart");
var fieldset=document.getElementById("hi");
function createquestion()
{
var question=questions[currentques];
title.innerText=question.question;
next.style.display="none";
question.options.forEach(function(option,index){
  var radio=document.createElement("input");
  radio.setAttribute("type","radio");
  radio.setAttribute("name","option");
  radio.setAttribute("value",option);
  var label=document.createElement("label");
  label.innerText=option;
  var list_item=document.createElement("li");
  list_item.appendChild(radio);
  list_item.appendChild(label);
  options.appendChild(list_item);

});
}
createquestion();
submit.addEventListener("click",function(event){
  fieldset.disabled = true;
var options=document.getElementsByName("option");
var checked_answer="";
options.forEach(function(option,index){
  if(option.checked)
  {
    checked_answer=index;

  }
});

var selected_option=options[checked_answer].value;
var is_right=questions[currentques].right_answer===selected_option;
if(is_right)
{
  result.innerText="correct";
    result.classList.add("correct");
    score++;
    submit.style.display = "none";
    next.style.display="block"
  
    
}
else
{
   result.innerText="incorrect";
    result.classList.add("incorrect");
     submit.style.display = "none";
    next.style.display="block"
}

});
next.addEventListener("click",function()
{
  fieldset.disabled=false;
  result.setAttribute("class","");
  result.innerHTML = ""

  options.innerHTML = "";

  next.style.display = "none";
  submit.style.display = "block";
currentques++;
 if(questions[currentques])
 {
 createquestion();
 }
 else
 {
answersheet.style.display="block";
    question_container.style.display = "none";
    key.innerText="AnswerKey";
    showAnswerSheet();
    
 }
  

});
function showAnswerSheet()
{
  quiz.innerText = "Your current score is "+score;

  

  var list = document.createElement("ol");
  
  questions.forEach(function(question)
  {
    var list_item = document.createElement("li");
    list_item.setAttribute("class","akey");
    list_item.innerText=question.question;
    var label =document.createElement("label");
    label.style.background="green";
    label.style.fontSize="15px";
    label.style.borderRadius="4px";
    label.style.color="white";
    label.innerText="-"+question.right_answer;
    list_item.appendChild(label);
    

    list.appendChild(list_item);
  })

  answersheet.appendChild(list);
restart.style.display="block";
  
  
}
restart.addEventListener("click",function(){
currentques=0;
score=0;
key.innerText="";
question_container.style.display = "block";

answersheet.innerText="";
answersheet.style.display="none";
createquestion();
restart.style.display="none";
quiz.innerHTML="Quiz";

})
