const fruta = {
    sandia:"🍉",
    fresa:"🍓",
    banana:"🍌",
    kiwi:"🥝",
    limon:"🍋",
    uva:"🍇",
    cereza:"🍒",
    naranja:"🍊",
    piña:"🍍"

}


export default function aleatorio(){

    
   return (fruta[Object.keys(fruta)[ Object.keys(fruta).length * Math.random() << 0]])



}


