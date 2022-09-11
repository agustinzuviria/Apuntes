
//IDENTIFY DOM ELEMENTS-----------------------------------
// add movie button
const addMovieModal = document.getElementById("add-modal");
// header
const header = document.querySelector("header");
const startAddMovieButton = header.lastElementChild;
// cancel button
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
// add button
const confirmAddMovieButton = addMovieModal.querySelector(".btn--success");
console.log(confirmAddMovieButton)
// user inputs
const userInputs = addMovieModal.querySelectorAll("input");
// backdrop
const backdrop = document.getElementById("backdrop");
// added movies list
const movies = [];
// movie list
const movieList = document.getElementById("movie-list");
//entry text
const entryText = document.getElementById("entry-text");

// DEFINE FUNCTIONS-----------------------------------

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
};
const toggleMovieModal = () => {
    addMovieModal.classList.toggle("visible"); toggleBackdrop()  //Remember to include the parenthesis on toggleBackdrop!!! 
};
const backdropClickHandler = () => {
    toggleMovieModal();
};
const clearMovieInput = () => {
    for (const usrInput of userInputs) { 
        usrInput.value = ""
    };
};
const cancelAddMovieHandler = () => {
    console.log(title);
    toggleMovieModal();
    clearMovieInput();
};


const addMovieLI = (aTitle, aURL, aRating) => {
    const movieListnewLI = document.createElement("li");
    movieListnewLI.className = "movie-element";
    movieListnewLI.innerHTML = `
   <div> class="movie-element__image">
   <img src="${aURL}" alt="${aTitle}">
   </div>
   <div> class="movie-element__info">
    <h2>${aTitle}</h2>
    <p>${aRating}/5 stars</p>
    </div>
`;
movieList.append(movieListnewLI);
};
    
    



const addMovieHandler = () => {
    const titleValue = userInputs[0].value;    
    const imageURLValue = userInputs[1].value;    
    const ratingValue = userInputs[2].value ;   

    if (
        titleValue.trim() === "" ||
    imageURLValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
    ) {
       return alert("Please enter valid inputs")
    };

    const newMovie = {
        title: titleValue,
        image: imageURLValue,  
        rating: ratingValue
    };
        movies.push(newMovie);

        toggleMovieModal();
        
        addMovieLI(newMovie.title, newMovie.image, ratingValue);
        console.log(addMovieLI);
        clearMovieInput();
       entryText.style.display = "none";
 };






//EVENT HANDLERS---------------------------------------
startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
