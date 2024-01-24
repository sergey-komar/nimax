$(function () {

})

window.addEventListener('DOMContentLoaded', () => {
    const tabsItem = document.querySelector('.tabs__item');
const tabsItemBtn = document.querySelectorAll('.tabs__item-btn');
const tabsContent = document.querySelectorAll('.tabs__content');

function tabsHide(){
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });

    tabsItemBtn.forEach(btn =>{
        btn.classList.remove('tabs-active');
    })
}
function tabsShow(i){
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabsItemBtn[i].classList.add('tabs-active');
}

tabsItem.addEventListener('click', (e)=>{
    const target = e.target;
    
    if(target && target.classList.contains('tabs__item-btn')){
        tabsItemBtn.forEach((item, i)=>{
            if(target == item){
                tabsHide();
                tabsShow(i);
            }
           
        })
       
    }
})

tabsHide();
tabsShow(0);
})