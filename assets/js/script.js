const diapo = document.getElementById("diapo");
const imgElements = [];
const frameImg =document.createElement("div");
const imgFull= document.createElement("img");
frameImg.style.width="100vw";
frameImg.style.height="100vh";
frameImg.style.backdropFilter= "blur(20px)";
frameImg.style.backgroundColor="rgba(155,155,155,0.7";
frameImg.style.display="none";
frameImg.style.justifyContent="center";
frameImg.style.alignItems="center"
frameImg.style.position="fixed";
document.body.prepend(frameImg);
/* imgFull.style.width="700px";
imgFull.style.height="500px"; */


for (let i = 0; i < 150; i++) {
    imgElements[i]=document.createElement("img");
    imgElements[i].src="https://picsum.photos/id/"+i+"/200/200"; 
    diapo.append(imgElements[i]);
    imgElements[i].addEventListener(
        "click",
        ()=>{
            
            frameImg.style.display="flex";
            imgFull.src="https://picsum.photos/id/"+i+"/700/500";
            frameImg.append(imgFull); 
        }
    )
    frameImg.addEventListener(
        "click",
        (event)=>{
        if(!frameImg.querySelector("img").contains(event.target)){
        frameImg.style.display="none";
        imgFull.append();
    }
    }
    )
} 
/* let j=0;
while (j<150) {
    imgElements[j]=document.createElement("img");
    imgElements[j].src="https://picsum.photos/id/"+j+"/200/200"; 
    diapo.append(imgElements[j]);
    j++;
} */