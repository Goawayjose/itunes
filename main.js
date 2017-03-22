var app = new Vue({
  el: '#app',
  data: {
    songs: {
      song1: {
        id: '100',
        title: 'Famous',
        artist: 'Kanye West',
        cover: 'img/pablo.jpg',
        trackMp3: 'tunes/Famous.mp3'
      },
      song2: {
        id: '40',
        title: 'Let it Happen',
        artist: 'Tame Impala',
        cover: 'img/currents.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3'
      },
      song3: {
        id: '400',
        title: 'Let it Happen',
        artist: 'Tame Impala',
        cover: 'img/currents.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3'
      }
    },
    song: {

    }
  }
});


var $newdiv = $('.circle-btn-xsSmall');
var $newdivSiblings = $('.circle-btn-xsSmall').parent().siblings().children();


var posx = (Math.random() * ($(document).width())).toFixed();
var posy = (Math.random() * ($(document).height())).toFixed();


if($newdivSiblings.css('height') === 'auto'){}
   $newdiv.css({
       'position':'absolute',
       'left':posx+'px',
       'top':posy+'px'
     });



console.log(app.$data.songs);

console.log(app.$data.song);
