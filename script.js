document.querySelector('.but').addEventListener('click', start)
document.querySelector('.zanovo').addEventListener('click', zn)

function start(){
    this.classList.add('del')
    anims();
}




function startanim(el,classad, sec){
    let cl = '.' + el;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector(cl).classList.add(classad);
            resolve();
        },sec)
    })
}
function showz(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector('.zanovo').classList.remove('del');
            resolve();
        },1000)
    })
}


async function anims(){
    await startanim('r1','anim_r1',100);
    await startanim('r2','anim_r2',500);
    await startanim('vodka','anim_vodka',1000);
    await startanim('konyak','anim_konyak',800);
    await startanim('rom','anim_rom',800);
    await startanim('shamp','anim_shamp',800);
    await startanim('visk','anim_visk',800);
    await startanim('content','anim_content',800);
    await startanim('text1','anim_text1',500);
    await startanim('text2','anim_text2',500);
    await showz();
}


function delclass(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector('.zanovo').classList.add('del');
            document.querySelector('.r1').classList.remove('anim_r1');
            document.querySelector('.r2').classList.remove('anim_r2');
            document.querySelector('.vodka').classList.remove('anim_vodka');
            document.querySelector('.konyak').classList.remove('anim_konyak');
            document.querySelector('.rom').classList.remove('anim_rom');
            document.querySelector('.shamp').classList.remove('anim_shamp');
            document.querySelector('.visk').classList.remove('anim_visk');
            document.querySelector('.text1').classList.remove('anim_text1');
            document.querySelector('.text2').classList.remove('anim_text2');
            document.querySelector('.content').classList.remove('anim_content');
            resolve();
        },1000)
    })
}

async function zn(){
    document.querySelector('.contain').classList.add('del');
    await delclass();
    document.querySelector('.contain').classList.remove('del');
    anims();
}

