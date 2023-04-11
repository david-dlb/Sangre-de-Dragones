const life = document.getElementById('life')
const text = document.getElementById('text')
const first = document.getElementById('first')
const second = document.getElementById('second')
let view = 0
life.innerHTML = 100

const options = (e) => {
    const id = e.srcElement.id
    if (db[view] == null) {
        return
    }
    switch (id) {
        case "first":
            life.innerHTML = Number(life.innerHTML) + db[view].option.o1.life
            break
        
        case "second":
            life.innerHTML = Number(life.innerHTML) + db[view].option.o2.life
            break
        
        default:
            break;
    }
    view++
    setView()
}

const setView = () => {
    const actual = db[view]
    if (actual == null) {
        return
    }
    console.log(actual)
    text.innerHTML = actual.text
    first.innerText = actual.option.o1.text
    second.innerText = actual.option.o2.text
}

first.addEventListener("click", options)
second.addEventListener("click", options)

setView()