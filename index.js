const reviews=[
    {
        id : 1,
        name : "shruthi hasan",
        job: "web developer",
        img: "images/c9210dbb2115368b504fe186a9f412af.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem quis? Possimus ab est saepe voluptates placeat illo! Vitae aspernatur molestias eos perspiciatis quia optio velit nostrum dolorem autem voluptatibus?"
    },
    {
        id : 2,
        name : "priayanka jawalkar",
        job: "android developer",
        img: "images/jawalkkar-20220521-0001.jpg",
        text: "Wikipedia has a consumer rating of 3.76 stars from 156 reviews indicating that most customers are generally satisfied with their purchases. Consumers satisfied with Wikipedia most frequently mention online encyclopedia, many times and reliable source.Wikipedia ranks 1st among Open Source sites."
    },
    {
        id : 3,
        name : "disha patani",
        job: "web developer",
        img: "images/dishapatani-20220410-0001.jpg",
        text: "It is said that the universe is expanding at 150,000 mph. I'm not sure if even God knows. But on Earth, as we witness the miracle of the technology revolution, none of us can be masters of our universe and that's where Wikipedia plays an invaluable role. This online encyclopedia is in itself an expanding universe of almost anything"
    },
    {
        id : 4,
        name : "software engineer",
        job: "senior analyst",
        img: "images/actress_loverr-20200827-0002.jpg",
        text: " In fact, if you're still alive, this should be bookmarked. The nice thing about Wikipedia is that it is neutral, can be edited by anyone, tends to be highly accurate since changes to content undergo the scrutiny of contributing editors."
    },
    {
        id : 5,
        name : "kriti sanon",
        job: "junior developer",
        img: "images/craze_vibes1-20200919-0001.jpg",
        text: " Your destination starts in one place and depending upon how curious you are, takes you to places you didn't intend to go or knew existed. So, while most people think in terms of the present, Wikipedia provides you with enough information to think."
    }
];

const img=document.getElementById("person")
const author=document.getElementById("author")
const job=document.getElementById("job")
const info=document.getElementById("info")
const previous=document.querySelector(".btn-previous")
const next=document.querySelector(".btn-next")
const random=document.querySelector(".btn-random")
let i=0;
displayReview()
function displayReview(){
    img.innerHTML=`<img class="img-fluid" id="person-img" src=${reviews[i].img} alt="">`
    author.innerText=reviews[i].name
    job.innerText=reviews[i].job
    info.innerText=reviews[i].text
}   

previous.addEventListener("click",function(){
    if(i!==0){
        i--
        displayReview()
    }
})


next.addEventListener("click",function(){
    if(i<reviews.length-1){
        i++
        displayReview()
    }
})

random.addEventListener("click",function(){
        i=Math.floor(Math.random()*reviews.length)
        displayReview()
    
})
