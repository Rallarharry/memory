//Grab a couple of things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 2;


//Link text to player
playerLivesCount.textContent = playerLives;

//Generate Data
 const getData = () => [
    {imgSrc: "./img/1.jpg", name: "naken"},
    {imgSrc: "./img/2.jpg", name: "naet"},
    {imgSrc: "./img/3.jpg", name: "boobs"},
    {imgSrc: "./img/1.jpg", name: "naken"},
    {imgSrc: "./img/2.jpg", name: "naet"},
    {imgSrc: "./img/3.jpg", name: "boobs"},
    
 ];

//Randomize

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() -0.5);
    return cardData;
}

//Card generator function

const cardGenerator = () => {
    const cardData = randomize();
    //Generate HTML
    cardData.forEach(item => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("img");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        //attach img to face
        face.src = item.imgSrc;
        back.src = "./img/4.png"
        card.setAttribute('name', item.name)
        //Attach to section
        section.appendChild(card)
        card.appendChild(face)
        card.appendChild(back)
        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        })
    })

}

const checkCards = (e) => {
    const clickedCard = e.target;
    console.log(clickedCard)
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll(".flipped");
    //Logic
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            console.log("match")
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";

            })
        } else {
        console.log("wrong");
        flippedCards.forEach((card) => { 
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("toggleCard"), 1000)
        });
        playerLives--;
        playerLivesCount.textContent = playerLives;
        if (playerLives === 0) {
            document.location.reload(true);
        }
        }
    }
}

cardGenerator();