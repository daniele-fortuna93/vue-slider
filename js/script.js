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
      imageIndex: 0
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
      }

    }
  }
);
