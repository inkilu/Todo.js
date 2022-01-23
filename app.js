/* 
ink 2022
Not linking any databases because im still learning ES6. 
*/

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const subbtn = document.querySelector('.btn-prop');
const genTemplate = todo => {
    const html =`
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>`;
list.innerHTML+=html;
};

// add todo through submit event (Enter Key event)

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
    genTemplate(todo);
    addForm.reset();
    }
});
// submit button logic
subbtn.addEventListener('click',()=>{
    const todo = addForm.add.value.trim();
    if(todo.length){
    genTemplate(todo);
    addForm.reset();
    }
        });

// delete todo

list.addEventListener('click',e=>{

if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}
});

// searching

const searchFunc= (term) =>{
Array.from(list.children)
    .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
        .forEach(todo=>{
            todo.classList.add('filtered');
        })
Array.from(list.children)
    .filter((todo)=> todo.textContent.toLowerCase().includes(term))
        .forEach(todo=>{
            todo.classList.remove('filtered');
        })
};

search.addEventListener('keyup',()=>{
const term = search.value.toLowerCase();
searchFunc(term);
});