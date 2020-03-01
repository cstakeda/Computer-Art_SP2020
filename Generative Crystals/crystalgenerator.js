
const HEX_SIZE = 500
const SIDES = 6
let PALETTE = []

let layers = []

function setup() {

  createCanvas(750,750,SVG)
  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)

  PALETTE = [
    '#00D2D6',
    '#7134BF',
    '#EDABC7'
  ]


  // PALETTE = [
  //   color(255,52,154), // pink
  //   color(4,0,152), // blue
  // ]
}

function draw() { // Main function call for p5.js

  background(230)

  // const circles = new Circles()
  // circles.render()
  
  // const simpleLines = new SimpleLines()
  // simpleLines.render()

  // const outlineShape = new OutlineShape()
  // outlineShape.render()

  // const centeredShape = new CenteredShape()
  // centeredShape.render()

  // const ringofShapes = new RingOfShapes()
  // ringofShapes.render()

  // const steppedHexagons = new SteppedHexagons()
  // steppedHexagons.render()

  let picker = random(1)
  if (picker > .3){
    layers.push(new Circles())
  }
  picker = random(1)
  if (picker > .3){
    layers.push(new SimpleLines())
  }
  picker = random(1)
  if (picker > .3){
    layers.push(new OutlineShape())
  }
  picker = random(1)
  if (picker > .3){
    layers.push(new CenteredShape())
  }
  picker = random(1)
  if (picker > .3){
    layers.push(new RingOfShapes())
  }
  picker = random(1)
  if (picker > .3){
    layers.push(new SteppedHexagons())
  }
  
  layers.forEach(layer =>{
    layer.render()
  })
}