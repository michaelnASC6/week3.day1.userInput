// const titleInput = document.getElementById("#title_input");

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

var finalMainTitle = document.querySelector("#main_title");
const button = document.querySelector("#submit_button");
// submitOK = "true";

button.addEventListener("click", clickListener);

function clickListener(event){
    event.preventDefault();
    const inputElement = document.querySelector("#title_input");


    console.log(inputElement);
    const mainTitle = inputElement.value;
    finalMainTitle = mainTitle;
// if (inputElement === "placeHolder"){
//         alert("Please fill out all fields");

//}

}


/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


// const button = document.getElementById("#submit_button");
// button.addEventListener("click", clickListener);

// function clickListener (event){
//     event.preventDefault();
//     mainTitle = titleInput;
//     // console.log(titleInput);
//     // const userInput = inputElement.value;
//     alert(titleInput);
//     // const inputElement = document.querySelector("#username");

// }
