/*
Descrizione:
Far funzionare lo slider partendo dall’html ricevuto.
Al click su una freccia, l’immagine mostrata cambia.
la lista delle thumbs deve essere generata tramite un v-for
Bonus:
1- al click su una thumb, visualizzare in grande l’immagine corrispondente
2 - Al click sulle frecce, cambia l’immagine, ma si evidenzia anche la thumbnail corrispondente
3- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente (vi servirà l’evento mounted() di vue)
4- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
*/

const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

const sliderVue = new Vue({
    el: "#app",
  

    data: {
     slider : slides,
     indice : 0 ,
    },
  
    methods: {
        scorriSu : function(){
            console.log(this.slider.title);
        },
       
        scorriGiu : function(){
            console.log(this.slider[this.indice].image);
            if(this.indice<5)
            this.indice++;
            else if (this.indice===5)
            this.indice = 0 ;

            
            console.log(this.indice)

        },


    }
    
 
  });