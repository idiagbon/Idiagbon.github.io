//*********************LEVIOOSA ONLINE GROCERY BOX*********************//


//PAGE LOADER
var myLoad;
function preLoader() {
  myLoad = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myPageShow").style.display = "block";
}


//SHOW MENU BAR ON SCROLL
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("scroll-up").style.display = "block";
  } else {
    document.getElementById("navbar").style.top = "-60px";
    document.getElementById("scroll-up").style.display = "none";
  }
}



//RESPONSIVE TOPNAV
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




//ANIMATED TEXT
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  
  
  
  
 $(document).ready(function(){
		pagenum = 1;
		function AutoRotate() {
		   var myele = null;
		   var allElements = document.getElementsByTagName('label');
		   for (var i = 0, n = allElements.length; i < n; i++) {
			   var myfor = allElements[i].getAttribute('for');
			   if ((myfor !== null) && (myfor == ('slide_2_' + pagenum))) {
				   allElements[i].click();
				   break;
			   }
		   }
		   if (pagenum == 4) {
			   pagenum = 1;
		   } else {
			   pagenum++;
		   }
		}
		setInterval(AutoRotate, 5000);
});
	
	
//SEARCH MODAL	
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}



//SCROLL ANIMATE
var scroll = window.requestAnimationFrame ||
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}
loop();

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}




//SCROLL ANIMATE
var scroll2 = window.requestAnimationFrame ||
             function(callback2){ window.setTimeout(callback2, 1000/60)};
var elementsToShow2 = document.querySelectorAll('.show-on-scroll2'); 
function loop2() {

    Array.prototype.forEach.call(elementsToShow2, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible2');
      } else {
        element.classList.remove('is-visible2');
      }
    });

    scroll2(loop2);
}
loop2();

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect2 = el.getBoundingClientRect();
  return (
    (rect2.top <= 0
      && rect2.bottom >= 0)
    ||
    (rect2.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect2.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect2.top >= 0 &&
      rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}



//SCROLL ANIMATE
var scroll3 = window.requestAnimationFrame ||
             function(callback3){ window.setTimeout(callback3, 1000/60)};
var elementsToShow3 = document.querySelectorAll('.show-on-scroll3'); 
function loop3() {

    Array.prototype.forEach.call(elementsToShow3, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible3');
      } else {
        element.classList.remove('is-visible3');
      }
    });

    scroll3(loop3);
}
loop3();

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect3 = el.getBoundingClientRect();
  return (
    (rect3.top <= 0
      && rect3.bottom >= 0)
    ||
    (rect3.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect3.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect3.top >= 0 &&
      rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


          //first: 
          var slideIndex = 1;         
          showDivs(slideIndex);
          
          function plusDivs(n) {
            showDivs(slideIndex += n);
          }
          
          function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("slide1");
            if (n > x.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = x.length}
            for (i = 0; i < x.length; i++) {
               x[i].style.display = "none";  
            }
            x[slideIndex-1].style.display = "block";  
          }
          
          //--------------------------------------------------------------------
                                                //second: 
          var slideIndex2 = 1;         
          showDivs2(slideIndex2);
          
          function plusDivs2(n) {
            showDivs2(slideIndex2 += n);
          }
          
          function showDivs2(n) {
            var i;
            var x = document.getElementsByClassName("slide2");
            if (n > x.length) {slideIndex2 = 1}    
            if (n < 1) {slideIndex2 = x.length}
            for (i = 0; i < x.length; i++) {
               x[i].style.display = "none";  
            }
            x[slideIndex2-1].style.display = "block";  
          }
          //--------------------------------------------------------------------
                                               //third: using w3.js library
          myslide = w3.slideshow(".slide3",0)
          //--------------------------------------------------------------------
          
          var slideIndex3 = 1;              //fourth
          showDivs3(slideIndex3);
          
          function plusDivs3(n) {
            showDivs3(slideIndex3 += n);
          }
          
          function showDivs3(n) {
            var i;
            var x = document.getElementsByClassName("slide4");
            if (n > x.length) {slideIndex3 = 1}    
            if (n < 1) {slideIndex3 = x.length}
            for (i = 0; i < x.length; i++) {
               x[i].style.display = "none";  
            }
            x[slideIndex3-1].style.display = "block";  
          }
          
          
          //====================================================================
          var bag =[];                    // initialize price array   
                            // Animation:
          $(document).ready(function(){
            $('.cart').click(function(){
              $('.container').fadeToggle();
            });
            
            $('.checkout').addClass('disabled');
            $('#bin').addClass('disabled');
          });
          
          $(document).on('click','.add-to-cart',function(e){
            e.preventDefault();
            $('.empty').hide();
            
            //---------------------------------------------------------
            if($(this).hasClass('disable')){    //disable mutiple clicks
              return false;
            }
            $(document).find('.add-to-cart').addClass('disable');
            //---------------------------------------------------------
            
            
            
            var parent = $(this).parents('.snip');
            var src = parent.find('img').attr('src');
            var cart = $(document).find('.cart');
            
            var posTop = parent.offset().top;    //return the coordinates of a element
            var posLeft = parent.offset().left;
           
            $('<img />', { 
             class: 'animation-fly',
             src: src
          }).appendTo('body').css({
              'top': posTop,      
              'left': parseInt(posLeft)
            }); 
            
            setTimeout(function(){
              $(document).find('.animation-fly').css({
                'top': cart.offset().top,
                'left': cart.offset().left
              });
              setTimeout(function(){
                $(document).find('.animation-fly').remove(); //after fly
                var quantity = parseInt(cart.find('#count-item').data('count'))+1;
          //       if(quantity<2){
          //         cart.find('#count-item').text(quantity + ' item').data('count', quantity);
          //       }else{
          //         cart.find('#count-item').text(quantity + ' items').data('count', quantity);
          //       }
                cart.find('#count-item').text(quantity + (quantity<2 ?' item':' items')).data('count', quantity);
                
                                       //add item to cart
              var name = parent.find('h4').text();
              var price = parent.find('.real').text();
              var txt3 = document.createElement("hr");
              var txt4 = document.createElement("hr");
                 
              $('.col1-name').append(name,txt3);
              $('.col2-price').append(price,txt4);
              $('.checkout').addClass('add-animation');
              $('.checkout').removeClass('disabled');
              
              $('#bin').addClass('add-animation2');
              $('#bin').removeClass('disabled');
              
                                      //find total amount
              var price2 = parseFloat(parent.find('.real').data('price')); //get "data-price" from <div class="real">
              bag.push(price2);                                            
              var total = 0;
              $(".total-amount").text(function(){
               for(var i in bag){
                total += bag[i];    //calculate sum of all numbers in the array 
               }
               var last = "$ " + total.toFixed(2);
               $('.pay-last').text(last);
               return last;   // return total only -> bug.
               
              });
                
                $(document).find('.add-to-cart').removeClass('disable');
              },1000);
            },500);
            
            $('.bin').on('click',function(){     
             $('.col1-name').empty();
             $('.col2-price').empty();
             $('.empty').show();
             $('.checkout').removeClass('add-animation');
             $('#bin').removeClass('add-animation2');
             $('.checkout').addClass('disabled');
             $('#bin').addClass('disabled');
             bag = [];
             $('.total-amount').add('.pay-last').text("$ " + bag.length);
             cart.find('#count-item').text(0 + ' item').data('count', 0);
           });
            
          });
          
          
          
          
          //------------------BILL----------------------
          
          $(document).ready(function(){
            $('#coupon').on('click',function(){
              alert("minhquanghust.blogspot.com Coupon Code:" + '\n' + "25% off: 0511Q-1601CV" +'\n' + "15% off: 0511Q-1701NA" + '\n' + "10% off: 0511Q-1901QA")
            });
          })
          