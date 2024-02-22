var todos=getTodos()
showTodos()
var month = ["Jan","Feb","Mar","Apr","May","June","July","Augu","Sept","Oct","Nov","Dec"];
function getTodos(){
    const todosJson=localStorage.getItem('todos')
    return JSON.parse(todosJson)|| []

}

function setTodos(todos){

    var todosJson = JSON.stringify(todos);

    localStorage.setItem('todos', todosJson);

}
function clearTodos(){
    const title=document.getElementById('inpTitle')
    const desc=document.getElementById('inpDesc')
    localStorage.clear()
    title.value=''
    desc.value=''
    console.log(getTodos())
    showTodos()
}


function showTodos(){


    todos=getTodos()
    const notask=document.getElementsByClassName('tasks')[0]
    const clrbtn=document.getElementsByTagName('button')[1];

    if(todos.length==0){


        notask.style.display='flex'
        clrbtn.style.display="none"
    }
    else{
        clrbtn.style.display="block"
        notask.style.display='none'

    }

    const disp=document.getElementsByClassName('display')[0];
    disp.innerHTML=""
    todos.map(todo=>{
    makeTodo(todo)

    })
}

function deleteTodo(id){
    todos=todos.filter(todo=>todo.id!=id)
    setTodos(todos)
    showTodos()
}



function makeTodo(todo){
    const disp=document.getElementsByClassName('display')[0];
    const task=document.createElement('div')
    task.setAttribute("class","task")

    const taskTitle=document.createElement('div')
    const taskTitlehead=document.createElement('div')
    taskTitlehead.setAttribute('class','taskHead')
    taskTitlehead.innerText=todo.title.toUpperCase()
    const taskTitleDate=document.createElement('div')
    taskTitleDate.setAttribute('class','taskDate')
    const d= new Date()
    const m=month[d.getMonth()]
    taskTitleDate.innerText=d.getDate()+' '+ m
    taskTitle.appendChild(taskTitlehead)
    taskTitle.appendChild(taskTitleDate)
    taskTitle.setAttribute("class","task-title")
    const taskDesc=document.createElement('div')
    taskDesc.innerText=todo.desc
    taskDesc.setAttribute("class","task-desc")
    deltbtn=document.createElement('button')
    deltbtn.setAttribute('onclick',`deleteTodo(${todo.id})`)
    deltbtn.innerText='Delete'
    deltbtn.setAttribute('class','delete-btn')

    task.appendChild(taskTitle)
    task.appendChild(taskDesc)
    taskDesc.appendChild(deltbtn)
    disp.appendChild(task)
}




function addTask(){

    const title=document.getElementById('inpTitle').value
    const desc=document.getElementById('inpDesc').value
    if(title=='' || desc=='') return;
   todos=getTodos()
    todos.push({id:todos.length,title:title,desc:desc})

    setTodos(todos)
    todos=getTodos()


    showTodos()
    console.log(desc)


}

