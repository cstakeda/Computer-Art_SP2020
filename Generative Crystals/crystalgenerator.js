
const HEX_SIZE = 500
const SIDES = 6
let PALETTE = []

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

function draw() { // Main function call

  background(230)

  const circles = new Circles()
  circles.render()
  
  const simpleLines = new SimpleLines()
  simpleLines.render()

  const outlineShape = new OutlineShape()
  outlineShape.render()

}