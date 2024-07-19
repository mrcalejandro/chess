//Para poder poner el color del board

var textoresultado= document.getElementById("textoresultado");

var m1content= document.getElementById("m1content");

var form1= document.getElementById("form1");

var contenttablero= document.getElementById("contenttablero");

var celdared= document.getElementsByClassName("celda red");

const aea= 0;

form1.addEventListener("submit", selectvalue);


function selectvalue(){
    let valormenu1= "";
    let color;
    event.preventDefault();
    const menu1= document.querySelector(".boxop:checked");

    if(menu1){
    valormenu1 = menu1.value }

    if(valormenu1 == "red"){
        textoresultado.innerText= "Es rojo"
        color= "rgb(130, 0, 0)";
        const red= new opusuario(m1content,contenttablero,celdared,color)
        red.dissapear();
    }
    else if(valormenu1 === "clasic"){
        color= "rgb(244, 230, 213)";
        const red= new opusuario(m1content,contenttablero,celdared,color)
        red.dissapear();
    }
    else if(valormenu1=== "green"){
        color="rgb(8, 63, 0)";
        const red= new opusuario(m1content,contenttablero,celdared,color)
        red.dissapear();
    }
    else if(valormenu1 === "blue"){
        color="rgb(0, 33, 124)";
        const red= new opusuario(m1content,contenttablero,celdared,color)
        red.dissapear();
    }   
   else{
        textoresultado.innerText= "Choose an option"
        error(m1content);
    }

}

 function error(objeto){
    var escala= 1;
    function movimiento(){
        for(let i=0; i<3;i++){
            setTimeout(function decrecer(){
                escala-=0.01
                objeto.style.transform= "scale("+escala+")";
        
            },i*40)
        }
        for(let i=0; i<3;i++){
            setTimeout(function crecer(){
                escala+=0.01
                objeto.style.transform= "scale("+escala+")";
        
            },i*10)
        }
    }
    movimiento();

 }


class opusuario{
    constructor(
        objeto1,
        objeto2,
        objeto3,
        color,
    ){
        this.objeto1= objeto1;
        this.color= color;
        this.objeto2= objeto2;
        this.objeto3= objeto3;
    }
    dissapear(){
        var scaleinicial=0;
    const ab = () =>{
            this.objeto1.style.transform= "rotateY("+ scaleinicial+"deg)";
            scaleinicial+=10;
    }

    
        const incress = () => {
           for(let i=0; i<10;i++){
            setTimeout(ab,i*20)
           } 
           setTimeout(() =>{
            this.objeto1.style.display= "none";
           },400)
           setTimeout(() =>{
            this.objeto2.style.display= "flex";
            for (let i = 0; i < this.objeto3.length; i++) {
                setTimeout(()=>{
                    this.objeto3[i].style.backgroundColor = this.color;
                },i*30)
                
            }
           },400)

    }
    incress();
 }
}



//Movimiento de piezas

const prueba= document.getElementById("prueba")

prueba.addEventListener("click", )


