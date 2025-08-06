let targetColor="";
let score=0;
let time=30;
let timer;
let colors=['red','orange','blue','green','white','yellow','grey','black','hotpink','purple','lightgreen','maroon','khaki','brown','navy','indigo'];
const grid=document.getElementById("grid");
const targetColorDisplay=document.getElementById("target-color");
const scoreDisplay=document.getElementById("score");
const timeDisplay=document.getElementById("time");

// function ShuffleArray(colors){
//     for(let i=colors.lenth-1;i>0;i--)
//     {
//         const j=Math.floor(Math.random()*(i+1));
//         [colors[i],colors[j]]=[colors[j],colors[i]];
//     }
//     return colors;
// }
function ShuffleArray(colors){
    for(let i=colors.length-1;i>0;i--) // <-- fixed typo here
    {
        const j=Math.floor(Math.random()*(i+1));
        [colors[i],colors[j]]=[colors[j],colors[i]];
    }
    return colors;
}
function handleClicked(clickedColor){
    if(clickedColor===targetColor)
    {
        score++;
        scoreDisplay.textContent=score;
        createGrid();
    }
}
function createGrid(clickedColor)
{
    grid.innerHTML="";
    colors=ShuffleArray(colors);
    console.log(colors);
    targetColor=colors[Math.floor(Math.random()*16)];
    targetColorDisplay.textContent=targetColor;
    colors.forEach(color=>{
        const box=document.createElement("div");
        box.className="color-box";
        box.style.backgroundColor=color;
        box.addEventListener('click',()=>{handleClicked(color);});
        grid.appendChild(box);
    });

}

function startGame()
{
   
    score=0;
    time=30;
    scoreDisplay.textContent=score;
    timeDisplay.textContent=time;
    createGrid();
    clearInterval(timer);
    timer=setInterval(()=>
    {
        time--;
        timeDisplay.textContent=time;
        if(time===0)
        {
            clearInterval(timer);
            alert("Time's uo! Your final score:"+score);
        }
    },1000);

}