const deepChild=document.querySelector('.deepChild');
const blockNm=document.querySelector('.blockName');


function catchParent(el, drawColor){
    drawColor (el);
    const parent=el.parentNode;
    const cls = parent.getAttribute('class');
    const nameTag = parent.tagName;

    if (!cls){
        setTimeout(()=>{
            drawColor (parent);
            blockNm.innerHTML=nameTag;
            catchParent(parent, drawColor);
        }, 300);
    }
    else{
        blockNm.innerHTML=nameTag;
    }
}
function drawRed(el){
    el.style.border='3px solid red';
    el.style.margin='10px';
}
function drawGreen(el){
    el.style.border='3px solid green';
    el.style.margin='10px';
}
function drawPurple(el){
    el.style.border='3px solid purple';
    el.style.margin='10px';
}
function drawWhite(el){
    el.style.border='3px solid white';
    el.style.margin='10px';
}

catchParent(deepChild, drawPurple);


const childChild=document.querySelector('.childChild');
const sibling1=document.querySelectorAll('.sibling')[0];

function catchChild(el, drawColor){
    const child = filterChild(el)[0];

    if (child){
        setTimeout(()=>{
            drawColor(child);
            catchChild(child, drawColor);
        },300);
    }

}

function filterChild(el) {
    const collection = Array.from(el.childNodes);
    return collection.filter(c=>c.tagName==='DIV');
}


catchChild(sibling1, drawWhite);
catchParent(childChild, drawRed);
const nxtSibling = sibling1.nextElementSibling;
const child2=document.querySelectorAll('.childChild')[1];
catchChild(nxtSibling, drawGreen);


const dataTable=[
    {name:'name1',
    value:'1'},
    {name:'name2',
    value:'2'},
    {name:'name3',
    value:'3'},
    {name:'name4',
     value:'4'},
];
const divTable=document.createElement('TABLE');
divTable.setAttribute('id', 'data-table');
document.body.appendChild(divTable);

dataTable.forEach((item)=>{
    const divTr=document.createElement('TR');
    divTable.appendChild(divTr);

    const divTd1=document.createElement('TD');
    divTr.appendChild(divTd1);
    divTd1.innerHTML=item.name;

    const divTd2=document.createElement('TD');
    divTd2.setAttribute('class', 'value');
    divTr.appendChild(divTd2);
    divTd2.innerHTML=item.value;

});
divTable.style.border='2px solid green';

