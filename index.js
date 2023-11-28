let cuisines = document.querySelectorAll(".cuisines-list span");
let i=0,j=0
let ind = [[0,1],[1,2],[2,3],[3,4],[4,0]]
// while(1){
// setInterval(()=>{
    let o1 = 100,o2=40,x=0,x2=60;
    let motion = function() {
        cuisines[ind[i][0]].style.opacity = o1*0.01;
        cuisines[ind[i][1]].style.opacity = o2*0.01;
        cuisines[ind[i][0]].style.transform = `translate(0px,${x}px)`;
        cuisines[ind[i][1]].style.transform = `translate(0px,${x2}px)`;
        o1-=5
        o2+=5
        x-=5
        x2-=5
        console.log(x);
        if(x==-60){
            cuisines[ind[i][0]].style.opacity = 0;
            cuisines[ind[i][0]].style.transform = `translate(0px,-60px)`;
            i++;
            o1 = 100;
            o2=40;
            x=0;
            x2=60;
            if(i>4)
                i=0;
            clearInterval(mot);
            setTimeout(()=>{
                mot = setInterval(motion, 30);
            },1000)
        }
    }
   let mot = setInterval(motion, 30);
    
// },1000)
// }
console.log(cuisines[0]);
// container[0]