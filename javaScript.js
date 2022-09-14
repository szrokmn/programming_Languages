// Selectors
const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const langList = document.getElementById("lang-list");
   

const newUl = document.createElement("ul");     // ul elementi oluşturduk
langList.appendChild(newUl);                    // #lang-list olanın çocuğu yaptık

// addBtn event handler
addBtn.addEventListener("click", () => {
    if (!langInput.value) {                     // input da değer(value) yoksa
      alert("Please enter a language");
    } else {
      newUl.innerHTML += `<li>${langInput.value}</li>`;   // += her tıklandığında alta yazdır
      langInput.value = "";                               // inputa yazdıktan sonra add dediğimizde input boş kalır                           
    }
    langInput.focus();                                  // imleç tekrar inputtan başlar
  });    

// deleteBtn event handler
deleteBtn.addEventListener("click", () => {
    newUl.childElementConter > 0 ? newUl.removeChild(lastElementChild) : alert("There is item to delete");
});

// enter key and  del key event handler
langInput.addEventListener("keydown", (event) => {
  // console.log(event);
  // console.log(event.target);
  // console.log(event.keyCode);
  // console.log(event.code);

  if (event.keyCode === 13) {                       // 13, enter demektir(keyCode dediğimizde rakam yazmalıyız)
    addBtn.click();                                 // code, desydik enter yazmamız gerekecekti
  }

  // if (event.code === "Delete") {
  //   deleteBtn.click();
  // }

  if (event.keyCode === 46) {                       // 46, delete 
    deleteBtn.click();
  }
});

//? onload event handler
window.addEventListener("load", () => {
  langInput.focus();
});