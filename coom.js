class Slider{
    constructor(){
        this.images=[];
        this.images[0]="ab.jpg"
        this.images[1]="abb.jpg"
        this.images[2]="abbb.jpg"
        this.links=["","",""];
        this.counter=0;
        this.playslider();
        setInterval(()=>{
            this.playslider()
        },1000)
}
playslider(){
    if(this.counter<this.images.length-1 ){
  this.counter++    
}
else{
        this.counter=0;
    }
    document.ima.src=this.images[this.counter];
    document.getElementById("aa").href =this.links[this.counter]
}
}
onload=new Slider();
