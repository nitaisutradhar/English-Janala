const allLevel = async () => {
    try{
        const res = await fetch("https://openapi.programming-hero.com/api/levels/all");
        const allData = await res.json();
        showAllLevel(allData.data);
    } catch (error){
        console.error('Error fetching data:', error);
    }
    
}

const wordsByLevel = async (level) => {
    try{
        const res = await fetch(`https://openapi.programming-hero.com/api/level/${level}`)
        const data = await res.json();
        showWordByLevel(data.data);
    }catch (error){
        console.error('Error fetching data:', error);
    }
}

allLevel();