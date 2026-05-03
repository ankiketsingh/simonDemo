
let arrs=[];
let arru=[];
let x;


let p=document.querySelector("p");
let btny=document.querySelector(".y");
// btny.addEventListener("click",function(){
//     console.log("y clicked");
// })
let btng=document.querySelector(".g");
let btnb=document.querySelector(".b");
let btns=document.querySelector(".s");
let btnscollec=[btny,btng,btnb,btns];
for(btn of btnscollec){
    btn.addEventListener("click",function(){
        // console.log(this);
        flashUser(this);
        arru.push(this);
        match();
        
    })
}

let checkForkeypress=true;


document.addEventListener("keypress",function(){
       if(checkForkeypress==true){  p.innerText="Level = 1";
    x=genrateBtn();
    // console.log(x);
          flashSys(x);
          arrs.push(x);
          console.log("game start");
          checkForkeypress=false;
       }


})
if(arrs.length>0){
    checkForkeypress=false;
}


function genrateBtn(){
let rand=Math.floor(Math.random()*4)+1;
   console.log(rand);
   if(rand==1){
    return btny;
   }
   else  if(rand==2){
    return btng;
   }
   else  if(rand==3){
    return btnb;
   }
   else  if(rand==4){
    return btns;
   }

}
function flashSys(btn){
    btn.classList.add("bgw");
    setTimeout(function(){
        btn.classList.remove("bgw");
    },190);
   
}
function flashUser(btn){
    btn.classList.add("bgb");
    setTimeout(function(){
        btn.classList.remove("bgb");
    },190);
   
}

let check=true;
function match(){
    console.log(arrs,arru);
    for(let i=0;i<arru.length;i++){
           if(arrs[i]==arru[i]){
                 check=true;
           }
           else{
            check=false;
            levelUp();
           }
    }
    console.log("cheked");
    console.log(check);
    if(arrs.length==arru.length){
        levelUp();
    }
    
}
//   let h=arrs.length-1;
//          if(h<arrs.length){
//             h=arrs.length-1;

//          }
//          console.log("h wala", h);
 let h=1;
 let cs=1;
function levelUp(){
      
            if(check==true){
                arru=[];
                x=genrateBtn();
                setTimeout(function(){
                    flashSys(x)
                },420);
                arrs.push(x);
                p.innerText=`level=${arrs.length}`;
                if(h<arrs.length){
                  h++;  
                }
                cs=arrs.length;
                console.log("cs",cs);

            }
            else if(check==false){
                checkForkeypress=true;
                p.innerText=`Heighest Score is ${h-1} \n your score is ${cs-1} \n Press any key key to restart`;
                arru=[];
                arrs=[];
                let bdy=document.querySelector("body");
                bdy.classList.add("bgr");
                setTimeout(function (){
                    bdy.classList.remove("bgr");
                },250)
//                 document.addEventListener("keypress",function(){
//     x=genrateBtn();
//     // console.log(x);
//           flashSys(x);
//           arrs.push(x);
//           console.log("game start");


// })
            }
}

