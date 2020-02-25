class Layer{
    constructor(){
        this.sides = SIDES
        this.numShapes = this.sides
        this.angle = 360/this.numShapes
        this.stepsOut = 8
        this.singleStep = (HEX_SIZE/2)/this.stepsOut
        this.thinStroke = 1
        this.thickStroke = 3
        this.strokeColor = getRandomFromPalette()

    }
}

class Circles extends Layer { //Keeps what is common and adds additional info to the calss
    constructor() {
      super() //Adds qualities from Layers class
      this.shapeSize = (HEX_SIZE / 2) * 0.93 //Only necessary for this class
      this.position = (HEX_SIZE / 2) - (this.shapeSize / 2) //specific to circles class
    }
  
    render() {
      noFill()
      stroke(this.strokeColor)
      strokeWeight(1)
      push()
      translate(width/2, height/2)
      for (let i = 0; i <= this.numShapes; i++) {
        ellipse(this.position, 0, this.shapeSize, this.shapeSize)
        rotate(this.angle)
      }
      pop()
    }
}

class SimpleLines extends Layer{
    constructor(){
        super()

        this.numSteps = randomSelectTwo() ? this.stepsOut: int(this.stepsOut*1.25)
        this.step = (HEX_SIZE/2)/this.numSteps
        this.start = floor(random(0,this.numSteps)) //Rounds down
        this.stop = floor(random(this.start,this.numSteps + 1))
        this.weight = randomSelectTwo()?this.thinStroke:this.thickStroke
        this.numShapes = randomSelectTwo()?this.sides:this.sides*2
        this.angle = 360/this.numShapes
    }

    render(){
        noFill()
        stroke(this.strokeColor)
        strokeWeight(this.weight)

        push()
            translate(width/2,height/2)
            for (let i=0; i<this.numShapes; i++){
            line(this.start * this.step,0,this.stop * this.step,0)
            rotate(this.angle)
            }
         pop()

    }
}

class OutlineShape extends Layer{
    constructor(){
        super()

        this.polygonTrue = randomSelectTwo()
        this.weight = randomSelectTwo()?this.thinStroke:this.thickStroke
    }

    render(){
        stroke(this.strokeColor)
        strokeWeight(this.weight)
        noFill()
      
        push()
          translate(width/2,height/2)
          if (this.polygonTrue){
            console.log('Making hexagon')
            console.log(this.numSides)
            polygon(0,0,HEX_SIZE/2,this.sides)
          }else{
            ellipse(0,0,HEX_SIZE, HEX_SIZE)
          }
        pop()
        

    }

}