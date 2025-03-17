const smoothScroll = (id) => {
    const targetSection = document.getElementById(`${id}`);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - 100, // Adjust for navbar height
            behavior: "smooth"
        });
    }
    //document.getElementById(`${id}`).scrollIntoView({ behavior: "smooth" });
}

const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const alertBox = document.getElementById('alertBox');
const protectedSection = document.getElementById('protectedSection');
const banner = document.getElementById('banner');
const navbar = document.getElementById('navbar');
const successModal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModalBtn');

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();
    if(name == ""){
        alert("Please Tell your Name first!!!");
    }
    if(password !== "123456"){
        alert("Wrong password Contact admin to get your Login Code!!!");
    }
    if(name !== "" && password === "123456"){
        protectedSection.classList.remove("hidden")
        navbar.classList.remove("hidden")
        banner.classList.add("hidden")
        successModal.classList.remove('hidden');
        // Close Modal
        closeModalBtn.addEventListener('click', () => {
            successModal.classList.add('hidden');
        });
    }
  
    
});

const logOut = () => {
    banner.classList.remove("hidden")
    protectedSection.classList.add("hidden")
    navbar.classList.add("hidden")
    

}
// spinner
const lessonCards = document.getElementById("lesson-cards");
const showLoader = () =>{
    document.getElementById("loader").classList.remove("hidden");
    lessonCards.classList.add("hidden");

}
const hideLoader = () =>{
    document.getElementById("loader").classList.add("hidden");
    lessonCards.classList.remove("hidden");
    if(!lessonCards.childNodes.length) lessonCards.classList.add("hidden");
}
//Pronounciation
function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-EN'; // English pronunciation
    speechSynthesis.speak(utterance);
  }