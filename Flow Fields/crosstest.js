

function setup(){
    createCanvas(50,50)
    angleMode(DEGREES)
    noLoop()
    console.log(map(1,0,noise(1),0,360))

}

function draw(){

    const radius = 5
    const numShapes = 10
    const angle = 360/numShapes
    const weight = 1

    strokeWeight(weight)

 //   for(i=)
    push()
        translate(width/2,height/2)
        rotate(45)
        line(-radius,0,radius,0)
        line(0,-radius,0,radius)

    pop()
}