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

submitBtn.addEventListener('click', function () {
    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();
    if(name == ""){
        alert("Please enter your correct name!!!");
    }
    if(password !== "123456"){
        alert("Please Enter your correct password!!!");
    }
    if(name !== "" && password === "123456"){
        protectedSection.classList.remove("hidden")
        navbar.classList.remove("hidden")
        banner.classList.add("hidden")
    }
  
    
});

const logOut = () => {
    banner.classList.remove("hidden")
    protectedSection.classList.add("hidden")
    navbar.classList.add("hidden")
    

}