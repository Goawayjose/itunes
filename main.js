var app = new Vue({
  el: '#app',
  data: {
    songs: {
      song1: {
        id: '75',
        title: 'Famous',
        artist: 'Kanye West',
        cover: 'img/pablo.jpg',
        trackMp3: 'tunes/Famous.mp3',
        leftNom: '323',
        topNom: '472'
      },
      song2: {
        id: '40',
        title: 'Let it Happen',
        artist: 'Tame Impala',
        cover: 'img/currents.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '340',
        topNom: '584'
      },
      song3: {
        id: '300',
        title: '24k Magic',
        artist: 'Bruno Mars',
        cover: 'img/24k.png',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '20',
        topNom: '450'
      },
      song4: {
        id: '100',
        title: 'Both',
        artist: 'Gucci Mane ft. Drake',
        cover: 'img/gucciBoth.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '265',
        topNom: '886'
      },
      song45: {
        id: '200',
        title: 'Mask Off',
        artist: 'Future',
        cover: 'img/future-mask_off_s.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '527',
        topNom: '526'
      },
      song5: {
        id: '105',
        title: 'Goosebumps',
        artist: 'Travis Scott ft. Kendrick Lamar',
        cover: 'img/goosebumbs.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '648',
        topNom: '195'
      },
      song6: {
        id: '200',
        title: 'Fake Love',
        artist: 'Drake',
        cover: 'img/moreLife.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '185',
        topNom: '35'
      },
      song7: {
        id: '220',
        title: 'I feel it coming',
        artist: 'The Weeknd',
        cover: 'img/Starboy.png',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '10',
        topNom: '195'
      },
      song8: {
        id: '170',
        title: 'Bad and boujee',
        artist: 'Migos',
        cover: 'img/badnboujee.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '2',
        topNom: '5'
      },
      song9: {
        id: '60',
        title: 'Brocoli',
        artist: 'DRAM ft. lil Yachty',
        cover: 'img/broccoli.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '670',
        topNom: '452'
      },
      song10: {
        id: '134',
        title: 'Caroline',
        artist: 'Amine',
        cover: 'img/CarolineAmine.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '228',
        topNom: '330'
      },
      song11: {
        id: '68',
        title: 'Cold Water',
        artist: 'Major Lazer',
        cover: 'img/coldWater.png',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '394',
        topNom: '24'
      },
      song13: {
        id: '154',
        title: 'EveryDay Ft. Future',
        artist: 'Ariana Grande',
        cover: 'img/dangerousWomen.png',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '567',
        topNom: '760'
      },
      song14: {
        id: '270',
        title: 'Bounce Back',
        artist: 'Big Sean',
        cover: 'img/iDecided.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '397',
        topNom: '244'
      },
      song15: {
        id: '62',
        title: 'Moves',
        artist: 'Big Sean',
        cover: 'img/iDecided.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '0',
        topNom: '417'
      },
      song16: {
        id: '86',
        title: 'It Aint Me',
        artist: 'Kygo w/Selena Gomez',
        cover: 'img/itAintMe.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '307',
        topNom: '237'
      },
      song17: {
        id: '220',
        title: 'Let me love you',
        artist: 'DJ Snake w/Justin Bieber',
        cover: 'img/letmeloveyou.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '314',
        topNom: '660'
      },
      song18: {
        id: '66',
        title: 'Passionfruit',
        artist: 'Drake',
        cover: 'img/moreLife.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '3',
        topNom: '720'
      },
      song19: {
        id: '96',
        title: 'SWVNG',
        artist: 'Rae Sremmurd',
        cover: 'img/rae.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '396',
        topNom: '150'
      },
      song20: {
        id: '196',
        title: 'Black Beatles',
        artist: 'Rae Sremmurd',
        cover: 'img/rae.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '48',
        topNom: '770'
      },
      song21: {
        id: '206',
        title: 'Shape of You',
        artist: 'Ed Sheeran',
        cover: 'img/shapeofyou.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '490',
        topNom: '10'
      },
      song22: {
        id: '106',
        title: 'Tunnel Vision',
        artist: 'Kodak Black',
        cover: 'img/tunnelVision.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '401',
        topNom: '527'
      },
      song23: {
        id: '83',
        title: 'Love in the Brain',
        artist: 'Rhianna',
        cover: 'img/loveinthebrain.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '460',
        topNom: '890'
      },
      song24: {
        id: '53',
        title: 'Chained to the Rhythm',
        artist: 'Katy Perry',
        cover: 'img/Katy.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '698',
        topNom: '350'
      }
    }
  }
});


window.onload = function(){
  function insertDecimal(num) {
     return (num / 100).toFixed(2);
  }
}



$('.circleBtn').click(function(){
  $(this).siblings('.audioWrap').addClass('show');
});


  $('.clearFront').click(function(){
    $('.audioWrap').removeClass('show');
  });

var thumbsDown = $('.fa-thumbs-down');
var playBtn = $('.fa-play');
var pauseBtn = $('.fa-pause');

thumbsDown.on('click', function(){
  var innerWrap = $(this).parent().parent().parent().parent().parent();
  innerWrap.addClass('inner-disLiked');
  innerWrap.siblings().addClass('fade-inner-disLiked');
  innerWrap.parent().addClass('hide-disLiked');
  innerWrap.parent().siblings().animate({
    opacity: 0,
    height: "+=20",
    width: "+=20",
  }, 600, "linear");

  setTimeout(
   function() {
       innerWrap.parent().removeClass('show');
   }, 400);

});


playBtn.on('click', function(){
  $(this).addClass('hide');
  $(this).siblings().removeClass('hide');
  $(this).parent().parent().parent().parent().parent().addClass('playing');
});

pauseBtn.on('click', function(){
  $(this).addClass('hide');
  $(this).siblings().removeClass('hide');
  $(this).parent().parent().parent().parent().parent().removeClass('playing');
});
