// Array storage class
let carouselArr = [];

// Classe Carousel
class Carousel {

    constructor(image, title, url){
        this.Image = image;
        this.Title = title;
        this.Url = url;
    }

    static Start(arr){

        if(arr){

            if(arr.length > 0){

                carouselArr = arr;
                Carousel._sequence = 0;
                Carousel._size = arr.length;

                Carousel.Next();

                // Troca a cada 2 segundos
                Carousel._interval = setInterval(function(){
                    Carousel.Next();
                }, 2000);

            }

        }else{

            throw "Method Start need a Array Variable.";

        }

    }

    static Next(){

        let item = carouselArr[Carousel._sequence];

        // Atualiza a imagem
        document.getElementById("carousel").style.backgroundImage =
            "url('img/" + item.Image + "')";

        document.getElementById("carousel").style.backgroundRepeat = "no-repeat";
        document.getElementById("carousel").style.backgroundSize = "cover";
        document.getElementById("carousel").style.backgroundPosition = "center";

        // Atualiza o título
        document.getElementById("carousel-title").innerHTML =
            `<a href="${item.Url}">${item.Title}</a>`;

        // Próxima imagem
        Carousel._sequence++;

        // Reinicia quando chegar ao fim
        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }

    }

}