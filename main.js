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
        leftNom: '283',
        topNom: '442'
      },
      song2: {
        id: '40',
        title: 'Let it Happen',
        artist: 'Tame Impala',
        cover: 'img/currents.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '120',
        topNom: '184'
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
        leftNom: '205',
        topNom: '364'
      },
      song5: {
        id: '105',
        title: 'Goosebumps',
        artist: 'Travis Scott ft. Kendrick Lamar',
        cover: 'img/goosebumbs.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '168',
        topNom: '155'
      },
      song6: {
        id: '200',
        title: 'Fake Love',
        artist: 'Drake',
        cover: 'img/moreLife.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '220',
        topNom: '-15'
      },
      song7: {
        id: '220',
        title: 'Starboy',
        artist: 'The Weeknd',
        cover: 'img/Starboy.png',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '0',
        topNom: '225'
      },
      song8: {
        id: '170',
        title: 'Bad and boujee',
        artist: 'Migos',
        cover: 'img/badnboujee.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '0',
        topNom: '25'
      },
      song9: {
        id: '60',
        title: 'Bad and boujee',
        artist: 'Migos',
        cover: 'img/broccoli.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '0',
        topNom: '185'
      },
      song10: {
        id: '134',
        title: 'Caroline',
        artist: 'Amine',
        cover: 'img/CarolineAmine.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '268',
        topNom: '190'
      },
      song11: {
        id: '68',
        title: 'Cold Water',
        artist: 'Major Lazer',
        cover: 'img/coldWater.png',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '224',
        topNom: '294'
      },
      song12: {
        id: '68',
        title: 'Cold Water',
        artist: 'Major Lazer',
        cover: 'img/coldWater.png',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '224',
        topNom: '294'
      },
      song13: {
        id: '154',
        title: 'EveryDay Ft. Future',
        artist: 'Ariana Grande',
        cover: 'img/dangerousWomen.png',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '327',
        topNom: '494'
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
        topNom: '437'
      },
      song16: {
        id: '86',
        title: 'It Aint Me',
        artist: 'Kygo w/Selena Gomez',
        cover: 'img/itAintMe.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '307',
        topNom: '337'
      },
      song17: {
        id: '286',
        title: 'Let me love you',
        artist: 'DJ Snake w/Justin Bieber',
        cover: 'img/letmeloveyou.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '400',
        topNom: '620'
      },
      song18: {
        id: '66',
        title: 'Passionfruit',
        artist: 'Drake',
        cover: 'img/moreLife.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '3',
        topNom: '700'
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
        leftNom: '198',
        topNom: '730'
      },
      song21: {
        id: '206',
        title: 'Shape of You',
        artist: 'Ed Sheeran',
        cover: 'img/shapeofyou.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '475',
        topNom: '10'
      },
      song22: {
        id: '106',
        title: 'Tunnel Vision',
        artist: 'Kodak Black',
        cover: 'img/tunnelVision.jpg',
        trackMp3: 'tunes/Let_It_Happen.mp3',
        leftNom: '65',
        topNom: '759'
      }
    }
  }
});




$('.circleBtn').click(function(){
  $(this).children('.audioWrap').addClass('show');
});


  $('.clearFront').click(function(){
    $('this').parent().parent().removeClass('show');
  });



/*function timer(seconds, cb) {
  var remaningTime = seconds;
  var minutes = 0;
  window.setTimeout(function() {
    cb();
    console.log(remaningTime);
    if (remaningTime < 60) {
      timer(remaningTime + 1, cb);
    }
    else{
      timer(0, cb);
    }
  }, 1000);
}

var callback = function() {

};

timer(0, callback);
minuteTimer( ) */
