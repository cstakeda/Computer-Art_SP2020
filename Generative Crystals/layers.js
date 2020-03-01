class Layer{
    constructor(){
        this.sides = SIDES
        this.numShapes = this.sides
        this.angle = 360/this.numShapes
        this.stepsOut = 8
        this.singleStep = (HEX_SIZE/2)/this.stepsOut
        this.thinStroke = 1
        this.thickStroke = 3
        this.layerColor = getRandomFromPalette()

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
      stroke(this.layerColor)
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
        stroke(this.layerColor)
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
        stroke(this.layerColor)
        strokeWeight(this.weight)
        noFill()
      
        push()
          translate(width/2,height/2)
          if (this.polygonTrue){
            polygon(0,0,HEX_SIZE/2,this.sides)
          }else{
            ellipse(0,0,HEX_SIZE, HEX_SIZE)
          }
        pop()
        

    }

}

class DottedLines extends Layer{
  constructor(){
    super()
    this.numShapes = randomSelectTwo() ? this.sides:this.sides*2
    this.angle = 360/this.numShapes
    this.shapeSize = 3
    this.centerOffset = this.singleStep
  }

  render(){
    fill(this.layerColor)
    noStroke()
    
    push()
      translate(width/2,height,2)
      for(let i=0; i<=this.numShapes; i++){
        for(let x=this.centerOffset; x <HEX_SIZE / 2; x += this.singleStep){
          rect(x,0,this.shapeSize,this.shapeSize)
        }
        rotate(this.angle)
      }
    pop()
  }
}

class CenteredShape extends Layer{
  constructor(){
    super()
    this.randomShape = random(1)
    this.shapeSize = floor(random(this.stepsOut/2,this.stepsOut)) * this.singleStep
  }

  render(){
    fill(this.layerColor)
    noStroke()

    push()
      translate(width/2,height/2)
      if(this.randomShape < 0.1){
        rect(0,0,this.shapeSize*2,this.shapeSize*2)
      }else if(this.randomShape >= 0.1 && this.randomShape < 0.6){
        ellipse(0,0,this.shapeSize,this.Shapesize)
      }else if(this.randomShape >= 0.6){
        rotate(this.angle/2)
        polygon(0,0,this.shapeSize,6)
      }
    pop()
  }
}

class RingOfShapes extends Layer {                    
  constructor () {
    super()
    this.steps = floor(random(1, this.stepsOut))
    this.center = this.steps * this.singleStep
    this.randomShape = random(1)
    this.direction = randomSelectTwo() // used for triangle only
    this.fillColor = randomSelectTwo() ? this.layerColor : color(0, 1)
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke

    if (this.steps < this.stepsOut / 2) {
      this.radius = floor(random(1, this.steps)) * this.singleStep
    } else if (this.steps > this.stepsOut / 2) {
      this.radius = floor(random(1, this.stepsOut - this.steps)) * this.singleStep
    } else {
      this.radius = floor(random(1, (this.stepsOut / 2) + 1)) * this.singleStep
    }
  }

  render () {
    stroke(this.layerColor)
    fill(this.fillColor)
    strokeWeight(this.weight)
    push()
    translate(width / 2, height / 2)
    for (let i = 0; i < this.numShapes; i++) {
      if (this.randomShape < 0.33) {
        ellipse(0, this.center, this.radius, this.radius)
      } else if (this.randomShape >= 0.33 && this.randomShape < 0.66) {
        rect(0, this.center, this.radius, this.radius)
      } else if (this.randomShape >= 0.66) {
        myTriangle(this.center, this.radius, this.direction)
      }
      rotate(this.angle)
    }
    pop()
  }
}

class SteppedHexagons extends Layer {                 
  constructor () {
    super()
    this.numSteps = randomSelectTwo() ? this.stepsOut : this.stepsOut * 1.25
    this.centerOffset = (HEX_SIZE / 2) * 0.15
    this.singleStep = ((HEX_SIZE / 2) - this.centerOffset) / this.numSteps
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
  }

  render () {
    stroke(this.layerColor)
    noFill()
    strokeWeight(this.weight)
    push()
    translate(width / 2, height / 2)
    rotate(this.angle / 2) 
    for (let i = 1; i < this.numSteps + 1; i++) {
      polygon(0, 0, this.centerOffset + (i * this.singleStep),6)
    }
    pop()
  }
}