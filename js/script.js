var app = new Vue(
  {
    el: '#root',
    data: {
      images: [
        'img/31.jpg',
        'img/30.jpg',
        'img/17.jpg',
        'img/8.jpg'
      ],
      imageIndex: 0,
      inputValue: '',
      autoplay: null
    },
    mounted: function () {
      this.autoplay = setInterval(this.nextImg, 1500); // Autoplay
      const keyPress = this; // Assegno this(app) a una const
      window.addEventListener('keydown', function (e) {
        if ( e.which == 39) {
          keyPress.clickNextImg();
        } else if ( e.which == 37) {
          keyPress.clickPrevImg();
        }
      })
    },
    methods: {
      nextImg: function () {
        this.imageIndex++;
        if ( this.imageIndex == this.images.length ) {
          this.imageIndex = 0;
        }
      },
      prevImg: function () {
        this.imageIndex--;
        if ( this.imageIndex < 0 ) {
          this.imageIndex = this.images.length - 1;
        }
      },
      addImg: function () {
        if ( this.images.length < 8 ) {
          this.images.push(this.inputValue);
          this.inputValue = '';
        } else {
          this.inputValue = '';
          alert('Hai raggiunto il numero massimo di immagini da poter inserire.');
        }
      },
      delImg: function () {
        if ( this.images.length > 1 ) {
          this.images.pop();
        } else {
          alert('Non puoi rimuovere altre immagini');
        }
      },
      clickNextImg: function () {
        this.nextImg();
        clearInterval(this.autoplay);
      },
      clickPrevImg: function () {
        this.prevImg();
        clearInterval(this.autoplay);
      }
    }
  }
);
