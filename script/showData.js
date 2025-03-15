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
        <h1 class="text-3xl font-semibold opacity-80">"${element.meaning} / ${element.pronunciation}"</h1>
        <div class="flex justify-between">
        <a class="bg-[rgba(26,145,255,0.10)] py-3 px-4 rounded-lg" href="#"><i class="fa-solid fa-circle-info"></i></a>
        <a class="bg-[rgba(26,145,255,0.10)] py-3 px-4 rounded-lg" href="#"><i class="fa-solid fa-volume-high"></i></a>
        </div>
    </div>
    `
lessonCards.appendChild(div);
})
}