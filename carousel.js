let carouselArr = [];

class Carousel {
    constructor(image, title, url){
        this.Image = image;
        this.Title = title;
        this.Url = url;
    }

    static Init(arr){
        if(arr && arr.length > 0){
            carouselArr = arr;
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel.UpdateView();
        } else {
            throw "Method Init needs a valid Array Variable.";
        }
    }

    static Next(){
        Carousel._sequence++;
        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }
        Carousel.UpdateView();
    }

    static Prev(){
        Carousel._sequence--;
        if(Carousel._sequence < 0){
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel.UpdateView();
    }

    static UpdateView(){
        let item = carouselArr[Carousel._sequence];
        let carouselDiv = document.getElementById("carousel");

        if (carouselDiv && item) {
            carouselDiv.style.backgroundImage = "url('img/" + item.Image + "')";
            carouselDiv.style.backgroundRepeat = "no-repeat";
            carouselDiv.style.backgroundSize = "cover";
            carouselDiv.style.backgroundPosition = "center";
            
            document.getElementById("carousel-title").innerHTML =
                `<a href="${item.Url}">${item.Title}</a>`;
        }
    }
}