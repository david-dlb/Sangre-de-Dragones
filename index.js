const life = document.getElementById('life')
const text = document.getElementById('text')
const textScene = document.getElementById('text-scene')
const first = document.getElementById('first')
const second = document.getElementById('second')
const scene = document.getElementById("scene")
const content = document.getElementById("content")
const next = document.getElementById("continue")
let view = 0

const options = (e) => {
    const id = e.srcElement.id
    if (db[view] == null) {
        return
    }
    switch (id) {
        case "first":
            showScene(db[view].option.o1.scene)
            break
        
        case "second":
            showScene(db[view].option.o2.scene)
            break
        
        default:
            break;
    }
    view++
    setView()
}

const showScene = (s) => {
    textScene.innerHTML = s
    scene.style.display = "block"
    content.style.display = "none"
    next.style.display = "block"
    console.log(next)
}

const showMessage = (s) => {

}

const setView = () => {
    const actual = db[view]
    if (actual == null) {
        return
    }
    console.log(actual)
    text.innerHTML = actual.text
    if (view < db.length - 1){
        first.innerText = actual.option.o1.text
        second.innerText = actual.option.o2.text
    }
    else {
        first.style.display = "none"
        second.style.display = "none"
    }
}

first.addEventListener("click", options)
second.addEventListener("click", options)
next.addEventListener("click", () => {
    scene.style.display = "none"
    content.style.display = "block"
    next.style.display = "none"
})
setView()