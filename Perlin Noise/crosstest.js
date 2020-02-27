

function setup(){
    createCanvas(200,200)
    angleMode(DEGREES)
    noLoop()
    console.log(map(1,0,noise(1),0,360))

}

function draw(){

    const radius = 20
    const numShapes = 10
    const angle = 360/numShapes
    const weight = 1
    const space = 10

    strokeWeight(weight)

    for(let i = 0; i <= numShapes; i+=space){


        push()

            translate(width/2,height/2)
            rotate(20)
            line(-radius,0,radius,0)
            line(0,-radius,0,radius)
        pop()
        console.log(i)
    }
}