const change = document.getElementById("change");

change.addEventListener("click", change_all);

function change_all() {
  if (document.getElementsByClassName("fio")[0].textContent === "Косян") {
    document.getElementsByClassName("fio")[0].textContent = "Kosian";

    document.getElementsByClassName("name")[0].textContent = "Irina";

    document.getElementsByClassName("s_name")[0].textContent = "Karenovna";
  }
}

const showButton = document.getElementById("show_data");

showButton.addEventListener("click", function () {
  const surname = document.getElementsByClassName("fio")[0].textContent;

  const firstName = document.getElementsByClassName("name")[0].textContent;

  const birthYear = document.getElementById("birth_year").textContent;

  alert(
    "Фамилия: " +
      surname +
      "\nИмя: " +
      firstName +
      "\nГод рождения: " +
      birthYear,
  );
});
