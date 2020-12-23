"use strict"
/*
$( document ).ready(function() {
    $(".travel-day").click(function(){
        $(".img-responsive").attr('src',$(this).attr('src'));
    });
});

var lastX=0;
var p1,p2,p3,p4,p5;
 p1=parseInt($('.cloud:nth-child(1)').css('right').replace(/px/gi,''));
 p2=parseInt($('.cloud:nth-child(2)').css('right').replace(/px/gi,''));
 p3=parseInt($('.cloud:nth-child(3)').css('right').replace(/px/gi,''));
 p4=parseInt($('.cloud:nth-child(4)').css('right').replace(/px/gi,''));
 p5=parseInt($('.cloud:nth-child(5)').css('right').replace(/px/gi,''));
var w = window.innerWidth/2;

$( ".service" ).mousemove(function( event ) {
    if(event.pageX>lastX )
    {

        $('.cloud:nth-child(1)').css('right', 60 +p1+'px' );
        $('.cloud:nth-child(2)').css('right', 50 +p2+'px' );
        $('.cloud:nth-child(3)').css('right', 30 +p3+'px' );
        $('.cloud:nth-child(4)').css('right', 40 +p4+'px' );
        $('.cloud:nth-child(5)').css('right', 20 +p5+'px' );
       // $('.cloud').removeClass('left-cloud');
       // $('.cloud').addClass('right-cloud');
    }
    else {
        $('.cloud:nth-child(1)').css('right',p1 - 60 +'px' );
        $('.cloud:nth-child(2)').css('right',p2 - 50 +'px' );
        $('.cloud:nth-child(3)').css('right',p3 - 30 +'px' );
        $('.cloud:nth-child(4)').css('right',p4 - 40 +'px' );
        $('.cloud:nth-child(5)').css('right',p5 - 20 +'px' );
       // $('.cloud').removeClass('right-cloud');
       // $('.cloud').addClass('left-cloud');
    }
    lastX=event.pageX;
});

$(".service").mouseout(function(){
    $('.cloud:nth-child(1)').css('right',p1+'px' );
    $('.cloud:nth-child(2)').css('right',p2+'px' );
    $('.cloud:nth-child(3)').css('right',p3+'px' );
    $('.cloud:nth-child(4)').css('right',p4+'px' );
    $('.cloud:nth-child(5)').css('right',p5+'px' );
});
*/
/** Our wonderfull little clock **/
class Clock {

    /**
     * Clock initialization
     */
    constructor() {
      this.hourHand   = document.querySelector('.hour.hand');
      this.minuteHand = document.querySelector('.minute.hand');
      this.secondHand = document.querySelector('.second.hand');
      this.timer();
      
      setInterval(() => this.timer(), 1000);
    }
    
    /**
     * Timer of the clock
     */
    timer() {
      this.sethandRotation('hour');
      this.sethandRotation('minute');
      this.sethandRotation('second');
    }
  
    /**
     * Changes the rotation of the hands of the clock
     * @param  {HTMLElement} hand   One of the hand of the clock
     * @param  {number}      degree degree of rotation of the hand
     */
    sethandRotation(hand) {
      let date = new Date(), hours, minutes, seconds, percentage, degree;
      
      switch (hand) {
        case 'hour':
          hours       = date.getHours();
          hand        = this.hourHand;
          percentage  = this.numberToPercentage(hours, 12);
          break;
        case 'minute':
          minutes     = date.getMinutes();
          hand        = this.minuteHand;
          percentage  = this.numberToPercentage(minutes, 60);
          break;
        case 'second':
          seconds     = date.getSeconds();
          hand        = this.secondHand;
          percentage  = this.numberToPercentage(seconds, 60);
          break;
      }
    
      degree                = this.percentageToDegree(percentage);
      hand.style.transform  = `rotate(${degree}deg) translate(-50%, -50%)`;
    }
  
    /**
     * Converting a number to a percentage
     * @param  {number} number Number
     * @param  {number} max    Maximum value of the number
     * @return {number}        Return a percentage
     */
    numberToPercentage(number = 0, max = 60) {
      return (number / max) * 100;
    }
  
    /**
     * Converting a percentage to a degree
     * @param  {number} percentage Percentage
     * @return {number}            Return a degree
     */
    percentageToDegree(percentage = 0) {
      return (percentage * 360) / 100;
    }
  
  }
  
  let clock = new Clock();
const date = new Date();
const faDate = new Intl.DateTimeFormat("fa", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(date);
const day = new Intl.DateTimeFormat("fa", {
    weekday: "long"
  }).format(date);
$(".date").text(day+" - "+faDate);


/******************************************* */

  

var pagination=0;

$( ".travel-day" ).click(function() {
  dailySchedule(days=9);
});

function dailySchedule(days)
{
 
  for(let n=1;n<=7;n++)
  {
  $( ".phone" ).append( "<div class='card1'>"+
  "<div class='card__contents'>"+
    "<div class='card__title'>Welcome</div>"+
    "<div class='card__body'>"+
      "<p>Are you too tired of high premiums?</p>"+
      "<p>We're the insurance company that sends you the money directly!</p>"+
      "<p>Interested? Jump in!</p>"+
    "</div>"+
    "<div class='card__next'> → بعدی</div>"+
  "</div>"+
  "<div class='card__shadow'>"+
    "<div class='card__shadow-inner'></div>"+
  "</div>"+
  "<div class='card__index'>"+n+"</div>"+
"</div>" );
  }
  const cards = document.querySelectorAll('.card1'),
  nexts = document.querySelectorAll('.card__next'),
  ixs = document.querySelectorAll('.card__index');
  
  $(".card__index").css({"height": (100/cards.length)+"%" });
nexts.forEach((next, i) => {
next.addEventListener('click', function() {
    pagination= pagination + (100/cards.length);
   
$(".card1:nth-child("+(i+2)+")  .card__contents").css({"clip-path": "polygon(10% 0%, 10% "+pagination+"%, 0% "+pagination+"%, 0% 100%, 100% 100%, 100% 0%)", "-webkit-clip-path": "polygon(10% 0%, 10% "+pagination+"%, 0% "+pagination+"%, 0% 100%, 100% 100%, 100% 0%)"});
$(".card1:nth-child("+(i+2)+")  .card__shadow").css({"height": pagination+"%"});
$(".card1:nth-child("+(i+2)+")  .card__index").css({"top": pagination+"%" });

cards[i + 1].style.transform = 'none';
});
});
ixs.forEach((index, i) => {
index.addEventListener('click', () => {
for (let j = ixs.length - 1; j > i; j--) {
  cards[j].style.transform = 'translateX(100%)';
}
console.log(i);
})
});
}

