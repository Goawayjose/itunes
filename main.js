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
        leftNom: '30',
        topNom: '454'
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
      }
    }
  }
});


$('.circleBtn').click(function(){
  $(this).children().addClass('show');
});

$('.blackback').click(function(){
  $('.audioWrap.show').toggleClass('show');
});
