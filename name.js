// const myName = document.querySelector("#name");

// const newSpan1 = document.createElement("span");
// newSpan1.innerText = "J";
// newSpan1.classList.add("created-span");
// const newSpan2 = document.createElement("span");
// newSpan2.innerText = "O";
// const newSpan3 = document.createElement("span");
// newSpan3.innerText = "S";
// const newSpan4 = document.createElement("span");
// newSpan4.innerText = "E";
// const newSpan5 = document.createElement("span");
// newSpan5.innerText = "B";
// const newSpan6 = document.createElement("span");
// newSpan6.innerText = "A";

const nameLetters = initializeNameLetters("JOSEBA");

console.log(nameLetters[0]);

for (let i=0; i<nameLetters.length; i++) {
  createLetterAnimation(nameLetters[i]);
}

// myName.appendChild(newSpan1);
// myName.appendChild(newSpan2);
// myName.appendChild(newSpan3);
// myName.appendChild(newSpan4);
// myName.appendChild(newSpan5);
// myName.appendChild(newSpan6);

// const ppp = document.querySelector("span1");
// nameLetters[0].addEventListener(
//     "mouseenter",
//     (event) => {
//       // highlight the mouseenter target
//       event.target.style.color = "purple";
//       subirElemento(event);
//     },
//     false
//   );



// function subirElemento(event) {

// for (let i = -1; index > -15; i--) {
//   event.target.style.top = i;
//   console.log(event.target.style.top);
// }


  // event.target.style.top = "-10px";
  
  //     // reset the color after a short delay
  //     setTimeout(() => {
  //       event.target.style.top = "-20px";
  //     }, 500);
  //}


function initializeNameLetters(letters) {
  let nameComponents = [];
  const myName = document.querySelector("#name");

  for (let i=0; i<letters.length; i++) {
    const newSpan = document.createElement("span");
    newSpan.innerText = letters[i];
    newSpan.classList.add("created-span");
    // newSpan.setAttribute("id","span" + i);  -> create an ID

    myName.appendChild(newSpan);
    nameComponents.push(newSpan);
  }
  return nameComponents;
}

function createLetterAnimation(component) {
  component.addEventListener(
    "mouseenter",
    (event) => {
      // highlight the mouseenter target
      event.target.style.color = "purple";
      setTimeout(() => {
        event.target.style.top = "-2px";
      }, 50);
      setTimeout(() => {
        event.target.style.top = "-4px";
      }, 50);
      setTimeout(() => {
        event.target.style.top = "-6px";
      }, 70);
      setTimeout(() => {
        event.target.style.top = "-8px";
      }, 90);
      setTimeout(() => {
        event.target.style.top = "-10px";
      }, 100);
    },
    false
  );
}