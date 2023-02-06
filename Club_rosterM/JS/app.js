//declare all the inputs and the span
const student_count = document.querySelector("#student-count");

const input_name = document.querySelector("#student-name");
const input_id = document.querySelector("#student-id");
const input_gpa = document.querySelector("#student-gpa");
//declare the button
const btn_add = document.querySelector("#add-student");
//declare const lits
const list = document.querySelector("#student-list");

const delete_btn = document.querySelector("#remove-selected-students");

//Initialization of the count = 0 and display it when page loads
let countOfStu = 0;
student_count.innerHTML = countOfStu;

btn_add.addEventListener("click", () => {
  if (
    input_name.value === "" || input_name.value > 50 ||
    input_id.value == "" ||
    input_gpa.value == "" ||
    input_gpa.value > 4 ||
    input_gpa.value < 0) {
    alert("Invalid Input, try agrain");
    return;
  } else {
    //appned the new student !
    const newStudent = document.createElement("li");
    newStudent.innerHTML =
      input_name.value +
      " , id: " +
      input_id.value +
      " ,GPA: " +
      input_gpa.value;
    list.appendChild(newStudent);
    newStudent.addEventListener("click", () => {
        SelectLi(newStudent);
    });
    //add to the count of students
    countOfStu++;
    student_count.innerHTML = countOfStu;
    input_name.value = "";
    input_gpa.value = "";
    input_id.value = ""; 
  }

    // Create the variable elemnt to selected and add the class.
    // let elements = document.querySelectorAll("li");

    // elements.forEach(element => {

    // });

});





function SelectLi(li) {
    li.classList.toggle("selected");
  }


delete_btn.addEventListener("click", () => {
  document.querySelectorAll(".selected").remove();
});
