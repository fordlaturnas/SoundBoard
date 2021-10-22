const sounds = [
    'laugh', 
    'mario',
    'back',
    'spongebob', 
    'suspense',
    'wii',
    'rick'
]

// loop to this sounds
sounds.forEach(sound => {
    //create button
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    // loop to each button we add even listener on to each one
    btn.addEventListener('click', () =>{
        stopSongs()

        document.getElementById(sound).play()
    } )

    document.getElementById('buttons').appendChild(btn) 
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}