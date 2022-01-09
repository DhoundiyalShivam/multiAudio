const sound=['applause','boo','gasp','tada','victory','wrong']

const btn = Array.from(document.querySelectorAll('.btn'))
function stopSound(){
    for(let i=0;i<sound.length;i++){
        let sounds = document.getElementById(sound[i])
        sounds.pause()
        sounds.currentTime=0;// to start from the starting
    }
}
// function playSound(btns){
// btns.addEventListener('click',function(){
//     stopSound();
//     document.getElementById(btns.innerText).play()
// })

// }
// for(let i=0;i<btn.length;i++){
//     let btns = btn[i]
//     playSound(btns)
// }


buttonAdd = document.getElementById('btns')
for(let i=0;i<sound.length;i++){
    let sn = sound[i]
    playSound(sn)

}
// append approach
function playSound(sn){
    let button =document.createElement('button')
button.classList.add('btn');
button.innerText=sn
button.addEventListener('click',function(){
    stopSound()
    document.getElementById(sn).play()

})
const divElement = document.getElementById('btns')
divElement.appendChild(button);
}