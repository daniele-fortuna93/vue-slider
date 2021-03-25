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
      inputValue: ''
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

      }
    }
  }
);
