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