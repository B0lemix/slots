const fruta = {
    sandia:"ð",
    fresa:"ð",
    banana:"ð",
    kiwi:"ð¥",
    limon:"ð",
    uva:"ð",
    cereza:"ð",
    naranja:"ð",
    piÃ±a:"ð"

}


export default function aleatorio(){

    
   return (fruta[Object.keys(fruta)[ Object.keys(fruta).length * Math.random() << 0]])



}


