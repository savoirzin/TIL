const items = document.querySelector('.items');
const input = document.querySelector('.footer-input');
const addBtn = document.querySelector('.footer-button');

//add버튼 눌렀을때 이벤트 처리
function onAdd(){
    // 1. 사용자가 입력한 텍스트를 받아오기
    const text = input.value;
    console.log(text);
    if(text === ''){
        input.focus();
        return;
    }
    // 2. 받아온 텍스트로 새로운 아이템을 만든다. ( 텍스트 + 삭제버튼)
    const item = createItem(text);
    // 3. items 컨테이너 안에 새로만든 아이템을 추가한다.
    items.appendChild(item);
    //4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block:'center'});
    // 5. 인풋을 초기화한다.
    input.value='';
    input.focus(); // 사용자가 다시 입력할 수 있게 포커스 추가
}
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item-row');

    const item = document.createElement('div');
    item.setAttribute('class','item');

    const name = document.createElement('span');
    name.setAttribute('class','item-name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','item-delete');
    deleteBtn.innerHTML = '<i class="fas fa-plus"></i>';
    deleteBtn.addEventListener('click',() => {
        items.removeChild(itemRow);
    });

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class','item-divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
}

addBtn.addEventListener('click',()=> {
    console.log(this);
    console.log(addBtn);
    onAdd();

    /*
    addBtn에 할당된 클래스가 없는데 클릭 이벤트를 줬을때
    Uncaught TypeError : cannot read property 'addEventListenr' of null
    -> 즉 , addBtn이 NULL이라는 뜻으로 담기지 않았다는 것

     */
});
input.addEventListener('keypress',event =>{
    if(event.key == 'Enter'){
        onAdd();
    }
});
