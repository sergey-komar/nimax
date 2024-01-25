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

if(tabsItem && tabsItemBtn && tabsContent){
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
}


const tabsItemReviews = document.querySelector('.tabs__item-reviews');
const tabsItemBtnReviews = document.querySelectorAll('.tabs__item-btn--reviews');
const tabsContentReviews = document.querySelectorAll('.tabs__content-reviews');

function tabsHideReviews(){
    tabsContentReviews.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });

    tabsItemBtnReviews.forEach(btn =>{
        btn.classList.remove('active-reviews');
    })
}
function tabsShowReviews(i){
    tabsContentReviews[i].classList.add('show');
    tabsContentReviews[i].classList.remove('hide');
    tabsItemBtnReviews[i].classList.add('active-reviews');
}

if(tabsItemReviews && tabsItemBtnReviews && tabsContentReviews){
    tabsItemReviews.addEventListener('click', (e)=>{
        const target = e.target;
        
        if(target && target.classList.contains('tabs__item-btn--reviews')){
            tabsItemBtnReviews.forEach((item, i)=>{
                if(target == item){
                    tabsHideReviews();
                    tabsShowReviews(i);
                }
               
            })
           
        }
    })
    
    tabsHideReviews();
    tabsShowReviews(0);
}


})