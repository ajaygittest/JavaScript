const todoList=[{
  name: 'Watch',
  dueDate:'22-02-2024'

}];
updateHTML();
function updateHTML(){
  let toDoListHtml='';
  for(let i=0; i<todoList.length; i++){
   const toDo=todoList[i];
    const {name,dueDate}=toDo;
   const html=`
   <p>
   ${name}  ${dueDate} 
   <button onclick="todoList.splice(${i},1);
   updateHTML();">Delete</button>
   </p>
   `;
   toDoListHtml+=html;
 }
 console.log(toDoListHtml);
 document.querySelector('.result').innerHTML=toDoListHtml;
}
function addToDo(){
 const inputElement= document.querySelector('.js-name-input');
 const dateInputElement=document.querySelector('.js-date');

 const dateInput=dateInputElement.value;

 const name =inputElement.value;
 todoList.push({name,dueDate:dateInput
 });
 inputElement.value='';
 updateHTML();
}