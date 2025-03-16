const showAllLevel = (data) => {
    const learnButton = document.getElementById("learn-Button");
    let lessonCount = 0;
   data.forEach(element => {
    const button = document.createElement("button");
    button.classList.add('btn','btn-outline','btn-primary')
    
    button.innerHTML=`
    <i class="fa-solid fa-book-open"></i>Lesson - ${++lessonCount}
    `
    button.addEventListener("click", function() {
        document.querySelectorAll("#learn-Button .btn").forEach(element =>{
            element.classList.remove("btn-active")
        })
        document.getElementById("select-lesson").classList.add("hidden")
        button.classList.add("btn-active")
        wordsByLevel(element.level_no);
    });
    learnButton.appendChild(button);
    
    });
}

const showWordByLevel = (data) =>{
    const lessonCards = document.getElementById("lesson-cards")
    if(!data.length){
        document.getElementById("next-lesson").classList.remove("hidden");
        lessonCards.classList.add("hidden")
    }
    else{
        document.getElementById("next-lesson").classList.add("hidden");
        lessonCards.classList.remove("hidden")
    }
    
    
    lessonCards.innerHTML=""
data.forEach(element =>{
    const div = document.createElement("div");
    div.innerHTML=`
    <div class="bg-white space-y-6 p-10 rounded-xl">
        <h2 class="text-3xl font-bold">${element.word}</h2>
        <p class="text-xl font-medium">Meaning/Pronounciation</p>
        <h1 class="text-3xl font-semibold opacity-80">"${element.meaning == null ? "অর্থ নেই": `${element.meaning}`} / ${element.pronunciation}"</h1>
        <div class="flex justify-between">
        <button onclick="infoDetails(${element.id})" class="bg-[rgba(26,145,255,0.10)] py-3 px-4 rounded-lg"><i class="fa-solid fa-circle-info"></i></button>
        <a class="bg-[rgba(26,145,255,0.10)] py-3 px-4 rounded-lg" href="#"><i class="fa-solid fa-volume-high"></i></a>
        </div>
    </div>
    `
lessonCards.appendChild(div);
})
}

const showInfoDetails = (data) => {
    const modal=document.getElementById("my_modal_5");
    modal.innerHTML = `
    <div class="modal-box text-left space-y-8">
        <h3 class="text-4xl font-semibold flex">
            <span>${data.word} ( </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <g clip-path="url(#clip0_13_249)">
                <path d="M28.4167 16.7921C28.4132 19.8742 27.1874 22.8291 25.008 25.0084C22.8286 27.1878 19.8738 28.4137 16.7917 28.4171H14.2083C11.1263 28.4133 8.17167 27.1874 5.99237 25.0081C3.81307 22.8288 2.58709 19.8741 2.58333 16.7921H0C0.00444394 20.559 1.50282 24.1704 4.16643 26.834C6.83005 29.4976 10.4414 30.996 14.2083 31.0004H16.7917C20.5586 30.996 24.1699 29.4976 26.8336 26.834C29.4972 24.1704 30.9956 20.559 31 16.7921H28.4167Z" fill="black"/>
                <path d="M11.6257 16.7917H6.55069C6.85975 18.9451 7.93484 20.9149 9.57876 22.3397C11.2227 23.7645 13.3252 24.5489 15.5007 24.5489C17.6761 24.5489 19.7786 23.7645 21.4225 22.3397C23.0665 20.9149 24.1416 18.9451 24.4506 16.7917H19.3757V14.2084H24.5423V10.3334H19.3757V7.75007H24.4506C24.1416 5.59668 23.0665 3.62692 21.4225 2.20209C19.7786 0.77727 17.6761 -0.00708008 15.5007 -0.00708008C13.3252 -0.00708008 11.2227 0.77727 9.57876 2.20209C7.93484 3.62692 6.85975 5.59668 6.55069 7.75007H11.6257V10.3334H6.45898V14.2084H11.6257V16.7917Z" fill="black"/>
            </g>
            <defs>
                <clipPath id="clip0_13_249">
                <rect width="31" height="31" fill="white"/>
                </clipPath>
            </defs>
            </svg>
            <span>  : ${data.pronunciation})</span>
        </h3>
        <div class="space-y-4">
            <p class="font-semibold text-2xl">Meaning</p>
            <p class="font-medium text-2xl">${data.meaning}</p>
        </div>
        <div class="space-y-4">
            <p class="font-semibold text-2xl">Example</p>
            <p class="opacity-80 text-2xl">${data.sentence}</p>
        </div>
        <div class="space-y-4">
            <p class="font-medium text-2xl">সমার্থক শব্দ গুলো</p>
            <div class="space-x-2">
            ${data.synonyms.map(item => `<button class="borer border-[#D7E4EF] btn bg-[#EDF7FF]">${item}</button>`).join('')}
         
            </div>
        </div>
        
        <div class="modal-action justify-start">
            <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn btn-primary font-medium">Complete Learning</button>
            </form>
        </div>
    </div>
    `
    modal.showModal();
}