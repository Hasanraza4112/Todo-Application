var list=document.getElementById("list");




firebase.database().ref('todos').on('child_added',function(data){
       var li=document.createElement('li')
   var listText=document.createTextNode(data.val().value)

    li.appendChild(listText)
    
//      //delete
var del=document.createElement("button")
var delText=document.createTextNode("DELETE")
del.setAttribute("class","Btn")
del.setAttribute("onclick","del(this)")
del.setAttribute("id",data.val().key)
del.appendChild(delText)
li.appendChild(del)
list.appendChild(li)
todo.value=""
  
// //edit btn
var edit=document.createElement("button")
var eidtText=document.createTextNode("EDIT")
edit.setAttribute("class","Btn")
edit.setAttribute("onclick","edit(this)")
edit.appendChild(eidtText)
edit.setAttribute("id",data.val().key)
li.appendChild(edit)
list.appendChild(li)
})










function addItem(){
//    input and list work

    var todo=document.getElementById('todo')
    // if (todo.value=="") {
    //     alert("Enter Some Thing in it")
    //     break;
    // }
    var database = firebase.database().ref("todos")
    var key = database.push().key
    var todos ={
        value:todo.value,
        key:key
    }
    database.child(key).set(todos)
        todo.value=""

    //    var li=document.createElement('li')
//    var listText=document.createTextNode(todo.value)

//     li.appendChild(listText)
//     todo.value=""
    
//      //delete
// var del=document.createElement("button")
// var delText=document.createTextNode("DELETE")
// del.setAttribute("class","Btn")
// del.setAttribute("onclick","del(this)")
// del.appendChild(delText)
// li.appendChild(del)
// list.appendChild(li)
// todo.value=""
  
// //edit btn
// var edit=document.createElement("button")
// var eidtText=document.createTextNode("EDIT")
// edit.setAttribute("class","Btn")
// edit.setAttribute("onclick","edit(this)")
// edit.appendChild(eidtText)
// li.appendChild(edit)
// list.appendChild(li)
} 




function del(e){
    firebase.database().ref('todos').child(e.id).remove()
    // console.log(e.id).remove()
    e.parentNode.remove()
}



function deleteAll(){
    // var database = firebase.database().ref("todos")
    // var key = database.push().key
    // var todos ={
    //     value:todo.value,
    //     key:key
    // }
    // database().once(todos).remove()
    list.innerHTML=""
    firebase.database().ref("todos").remove()
}



function edit(e){  
      var val=prompt("enter your todo",)
     var addtodo ={
         value : val,
         key: e.id
     }
    firebase.database().ref('todos').child(e.id).set(addtodo)

    e.parentNode.firstChild.nodeValue=val
}
