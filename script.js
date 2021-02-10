document.querySelector("#submit").addEventListener("click", function () {
  //   let questionHeading = document.querySelector("#titleQuestion").value;
  //   let questionDescription = document.querySelector("#descQuestion").value;
  localStorage.setItem(
    "questionHeading",
    document.querySelector("#titleQuestion").value
  );
  localStorage.setItem(
    "questionDescription",
    document.querySelector("#descQuestion").value
  );
  let newlable = document.createElement("label");
  let textnode = document.createTextNode(
    localStorage.getItem("questionHeading")
  );
  newlable.appendChild(textnode);
  document.getElementById("questionSet").appendChild(newlable);
  newlable.classList.add("question");
  document.querySelector("#titleQuestion").value = "";
  document.querySelector("#descQuestion").value = "";
});

document.querySelector("#questionSet").addEventListener("click", function () {
  let newlable = document.createElement("label");
  let textnode = document.createTextNode(
    localStorage.getItem("questionHeading") +
      "\n" +
      localStorage.getItem("questionDescription")
  );
  newlable.appendChild(textnode);
  document.getElementById("question").appendChild(newlable);

  let displayList = document.querySelector("#forHiding");
  displayList.classList.add("hidden");
  let hideForm = document.querySelector("#forHiding2");
  hideForm.classList.remove("hidden");
});

document.querySelector("#answerSubmit").addEventListener("click", function () {
  let name = document.querySelector("#naam").value;
  let answer = document.querySelector("#uttar").value;
  console.log(name, answer);
  document.querySelector("#naam").value = null;
  document.querySelector("#uttar").value = null;
});

document.querySelector("#newQuestion").addEventListener("click", function () {
  document.querySelector("#forHiding2").classList.add("hidden");
  document.querySelector("#forHiding").classList.remove("hidden");
});
