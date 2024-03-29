$(function () {
    $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });


     $('.answer-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });

     $('.calculator-content__price').on('click', function(){
        $('.calculator-hidden').slideToggle(500); 
        return false;
     });

     $('.work-slide__thumb').slick({
		asNavFor: '.work-slide__big',
		focusOnSelect: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		draggable: false
		
	  });

	  $('.work-slide__big').slick({
		asNavFor: '.work-slide__thumb',
		draggable: false,
		arrows: false,
		fade: true
	  });


      $('.reviews-home__box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                
              }
            },
           
              {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
              },
          ]

      });

      $('.certificates-slider__inner').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
                
              }
            },
            {
                breakpoint: 950,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                  
                }
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                  
                }
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                  
                }
              },
          ]
      })

//product
      $('.product-slide__thumb').slick({
		asNavFor: '.product-slide__big',
		focusOnSelect: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		draggable: false
		
	  });

	  $('.product-slide__big').slick({
		asNavFor: '.product-slide__thumb',
		draggable: false,
		arrows: false,
		fade: true
	  });


//peculiarities
$('.peculiarities-slide__thumb').slick({
    asNavFor: '.peculiarities-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false
    
  });

  $('.peculiarities-slide__big').slick({
    asNavFor: '.peculiarities-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });




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


const tabsItemProduct = document.querySelector('.work-one__item');
const tabsItemBtnProduct = document.querySelectorAll('.work-one__item-btn');
const tabsContentProduct = document.querySelectorAll('.work-one__content');

function tabsHideProduct(){
    tabsContentProduct.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });

    tabsItemBtnProduct.forEach(btn =>{
        btn.classList.remove('work-one__item-btn--active');
    })
}
function tabsShowProduct(i){
    tabsContentProduct[i].classList.add('show');
    tabsContentProduct[i].classList.remove('hide');
    tabsItemBtnProduct[i].classList.add('work-one__item-btn--active');
}

if(tabsItemProduct && tabsItemBtnProduct && tabsContentProduct){
    tabsItemProduct.addEventListener('click', (e)=>{
        const target = e.target;
        
        if(target && target.classList.contains('work-one__item-btn')){
            tabsItemBtnProduct.forEach((item, i)=>{
                if(target == item){
                    tabsHideProduct();
                    tabsShowProduct(i);
                }
               
            })
           
        }
    })
    
    tabsHideProduct();
    tabsShowProduct(0);
}


const tabsItemColor = document.querySelector('.tabs-color__item-top');
const tabsItemBtnColor = document.querySelectorAll('.tabs-color__item-btn');
const tabsContentColor = document.querySelectorAll('.tabs-color__content');

function tabsHideColor(){
    tabsContentColor.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });

    tabsItemBtnColor.forEach(btn =>{
        btn.classList.remove('tabs-color__item-btn--active');
    })
}
function tabsShowColor(i){
    tabsContentColor[i].classList.add('show');
    tabsContentColor[i].classList.remove('hide');
    tabsItemBtnColor[i].classList.add('tabs-color__item-btn--active');
}

if(tabsItemColor && tabsItemBtnColor && tabsContentColor){
    tabsItemColor.addEventListener('click', (e)=>{
        const target = e.target;
        
        if(target && target.classList.contains('tabs-color__item-btn')){
            tabsItemBtnColor.forEach((item, i)=>{
                if(target == item){
                    tabsHideColor();
                    tabsShowColor(i);
                }
               
            })
           
        }
    })
    
    tabsHideColor();
    tabsShowColor(0);
}





const tabsItemCalculator = document.querySelector('.calculator-tabs__item');
const tabsItemBtnCalculator = document.querySelectorAll('.calculator-tabs__item-btn');
const tabsContentCalculator = document.querySelectorAll('.calculator-content');

function tabsHideCalculator(){
    tabsContentCalculator.forEach(item => {
        item.classList.add('hide-calculator');
        item.classList.remove('show-calculator');
    });

    tabsItemBtnCalculator.forEach(btn =>{
        btn.classList.remove('calculator-tabs__item-btn--active');
    })
}
function tabsShowCalculator(i){
    tabsContentCalculator[i].classList.add('show-calculator');
    tabsContentCalculator[i].classList.remove('hide-calculator');
    tabsItemBtnCalculator[i].classList.add('calculator-tabs__item-btn--active');
}

if(tabsItemCalculator && tabsItemBtnCalculator && tabsContentCalculator){
    tabsItemCalculator.addEventListener('click', (e)=>{
        const target = e.target;
        
        if(target && target.classList.contains('calculator-tabs__item-btn')){
            tabsItemBtnCalculator.forEach((item, i)=>{
                if(target == item){
                    tabsHideCalculator();
                    tabsShowCalculator(i);
                }
               
            })
           
        }
    })
    
    tabsHideCalculator();
    tabsShowCalculator(0);
}







    const questionsAccardionTitle = document.querySelectorAll('.questions-accardion__title');
        if(questionsAccardionTitle){
            questionsAccardionTitle.forEach(item => {
                item.addEventListener('click', () => {
                    item.classList.toggle('open');
                });
            });
        }
   

    const questionsWrapper = document.querySelectorAll('.questions__wrapper');
        if(questionsWrapper){
            questionsWrapper.forEach(item => {
                item.addEventListener('click', () => {
                    item.classList.toggle('border-bottom');
                });
            });
        }
      

        const answerAccardionBtn = document.querySelectorAll('.answer-accardion__btn');
        if(answerAccardionBtn){
            answerAccardionBtn.forEach(item => {
                item.addEventListener('click', () => {
                    item.classList.toggle('title__color');
                });
            });
        }
        
        //menu-mobile
        const menu = document.querySelector('.menu');
        const mobile = document.querySelector('.nav-icon');
        
        mobile.addEventListener('click', function(){
            this.classList.toggle('nav-icon--active');
            menu.classList.toggle('nav--active');
        
        });

       

})