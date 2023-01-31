// 44 = White key
// 47 = Black key
const keyPattern = [44,47,44,47,44,47,44,44,47,44,47,44]

const blackKeys = document.querySelectorAll('.black-key')
const whiteKeys = document.querySelectorAll('.white-key')

let patternIndex = 0
let whiteIndex = 0
let blackIndex = 0
const pianoKeys = []
let whiteRemining = whiteKeys.length > 0
let blackRemining = blackKeys.length > 0

while(whiteRemining || blackRemining) {
    const keyType = keyPattern[patternIndex]
    patternIndex++
    if(patternIndex === keyPattern.length){
        patternIndex = 0
    } 

    if(keyType === 44 && whiteRemining) {
        const key = whiteKeys[whiteIndex]
        whiteIndex++
        pianoKeys.push(key)
        whiteRemining = whiteIndex < whiteKeys.length         
        
    } else if (keyType === 47 && blackRemining) {
        const key = blackKeys[blackIndex]
        blackIndex++
        pianoKeys.push(key)
        blackRemining = blackIndex < blackKeys.length
        
    }
}

function playSound(newUrl){
    new Audio(newUrl).play()
}

pianoKeys.forEach((pianoKey,i) => { 
    const number = i < 9 ? '0' + (i + 1) : (i + 1)
    const newUrl = '24-piano-keys/key' + number + '.mp3'

    pianoKey.addEventListener('click', () => playSound(newUrl))
})