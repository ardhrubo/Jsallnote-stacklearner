let names = document.getElementById('name')

names.addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        document.getElementById('show-name').innerHTML = `Your name is
        ${event.target.value}`
        event.target.value = ''
    }
})

let skills = document.getElementsByName('skills')
let result = document.getElementById('result')


let checkedskills = [];

[...skills].forEach(skill=>{
    skill.addEventListener('change',function(event){
        if(event.target.checked){
            checkedskills.push(event.target.value)
            outputSkill(result,checkedskills)
        } else {
            let ind = checkedskills.indexOf(event.target.value)
            checkedskills.splice(ind,1)
            outputSkill(result,checkedskills)
        }

        console.log(event.target.checked)
    })
})


function outputSkill(parent,skills){

        let result = ''

        skills.forEach((skill,index)=>{

            result += `(${index +1}) ${skill}<br>`

        })

        parent.innerHTML = result

}

let list = document.getElementById('list')
list.addEventListener('dblclick',function(e){
    if(this.contains(Event.target)){
        let innerText = Event.target.value
    }
})



