
const list = document.getElementById('list')
const add = document.getElementById('add')
const engInput = document.getElementById('eng')
const kgzInput = document.getElementById('kgz')

let data = [
    {eng:'map', kgz:'озгортуу', id:1, learn:false, know:false},
    {eng:'for', kgz:'учун', id:2, learn:false, know:false},
    {eng:'while', kgz:'азырынча', id:3, learn:false, know:false},

] 

function renderData(array) {
    list.innerHTML=''
    array.forEach(el => {
        list.innerHTML+=`
        <li class="list-group-item d-flex align-items-center">
                <span class="flex-grow-1">
                    <span>${el.eng}</span> -
                    <span>${el.kgz}</span>
                </span>
                <button class="btn btn-outline-danger" onclick='delWord(${el.id})'><i class="bi bi-trash2"></i></button>
                <button class="btn btn-outline-warning" onclick='impBtn(${el.id})'><i class="bi bi-exclamation-circle"></i></button>
            </li>
        `
    });
}

add.onclick = () => {
    let ids = data.map(el => el.id)
    // console.log(ids.at);
    let newWord = {
        eng: engInput.value, 
        kgz: kgzInput.value,
        id: ids.at(-1)+1 || 1,
        learn:false
    }
    // console.log(newWord);
    if(engInput.value.trim() && kgzInput.value.trim()) {
        data.push(newWord)
        setToLS(data)
        getFromLS()
        renderData(data)
        engInput.value=''
        kgzInput.value=''
        engInput.style.borderColor='black'
        kgzInput.style.borderColor='black'
    } else {
        engInput.style.borderColor='tomato'
        kgzInput.style.borderColor='tomato'
    }
}

function delWord(id) {
    console.log(id);
    const newData = data.filter(el => el.id!==id)
    setToLS(newData)
    getFromLS()
    // renderData(newData)
}

function setToLS(array) {
    const dataLS = localStorage.setItem('sozduk', JSON.stringify(array))
    // console.log(dataLS);
}

function getFromLS(array) {
    const dataLS = localStorage.getItem('sozduk')
    const updData = JSON.parse(dataLS)
    console.log(updData);
    data = updData
    renderData(data)

}
getFromLS()

function impBtn(id) {
    console.log(id);
    
}

//  dataFilter=data.filter(el=>el.done===true)
//  console.log(dataFilter);