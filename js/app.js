
  "use strict";
  
const card = document.querySelectorAll('.card');
const cardInner = document.querySelectorAll('.card__inner');
card.forEach(function(element) {
    let cardText = element.querySelector('.card__text');
    let cardLink = element.querySelector('.card__link');
    
        const cardSubTitle = element.querySelector('.card__sub-title');
    if(element.classList.contains('_disabled')){
        
        if(cardSubTitle.textContent == 'с фуа-гра'){
            cardText.textContent = 'Печалька, с фуа-гра закончился.'; 
        }else if(cardSubTitle.textContent == 'с курой'){
            cardText.textContent = 'Печалька, с курой закончился.';  
        }else if (cardSubTitle.textContent == 'с рыбой'){
            cardText.textContent = 'Печалька, с рыбой закончился.';  
        };
    }
    element.addEventListener('mouseenter', function(){
        if(!this.closest('._disabled') && this.closest('._selected') && !this.closest('._selectedHover')){
            this.classList.add('_selectedHover'); 
        } 
    })
    element.addEventListener('mouseleave', function(){
        if(!this.closest('._disabled')  && this.closest('._selectedHover')){
            this.classList.remove('_selectedHover');     
        } 
    })
    element.addEventListener('mouseenter', function(){
        if(!this.closest('._disabled') && !this.closest('._selected') && !this.closest('._hover')){
            this.classList.add('_hover'); 
        } 
    })
    element.addEventListener('mouseleave', function(){
        if(!this.closest('._disabled')  || this.closest('._selected') && this.closest('._hover')){
            this.classList.remove('_hover');     
        } else if(!this.closest('._disabled')  && this.closest('._selected')){
            this.classList.remove('_hover');
      }
    })
    element.addEventListener('click', function(event){
        let cardSlogan = this.querySelector('.card__slogan');
        if(!this.closest('._disabled') && !this.closest('._selected')){
            
            this.classList.add('_selected');
            this.classList.remove('_hover');    
                cardSlogan.textContent = 'Котэ не одобряет?';
                if(cardSubTitle.textContent == 'с фуа-гра'){
                    cardText.textContent = 'Печень утки разварная с артишоками.'; 
                }else if(cardSubTitle.textContent == 'с курой'){
                    cardText.textContent = 'Филе из цыплят с трюфелями в бульоне.';  
                }else if (cardSubTitle.textContent == 'с рыбой'){
                    cardText.textContent = 'Головы щучьи с чесноком да свежайшая сёмгушка.';  
                };
        } else if (!this.closest('._disabled') && this.closest('._selected')){
            this.classList.remove('_selected');
            this.classList.add('_hover'); 
            cardSlogan.textContent = 'Сказочное заморское яство';
            cardText.innerHTML = '<span class="card__text">Чего сидишь? Порадуй котэ, <a href="#" class="card__link">купи.</a></span>'
        } 
    })
   
});