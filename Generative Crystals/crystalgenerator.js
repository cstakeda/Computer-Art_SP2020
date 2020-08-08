
const HEX_SIZE = 500
const SIDES = 6
let PALETTE = []

let layers = [] //Contains chosen layers to be drawn

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

  // PALETTE = [ //Weisman foundry colors for making community art.
  //   '#efb120',
  //   '#dcd155',
  //   '#5cbcb8',
  //   '#1b5173',
  //   '#6c943e'
  // ]

}

function draw() { // Main function call for p5.js

  background(230)

  //Loops through the array, checks the weight against a random number. If it is greater than then it initializes that object. Pushed to layers array
  layerConstructors.forEach(layercon => {
    let picker = random(1)
    if(picker > layercon.weight){
      layers.push(layercon.init())
    }
  })

  layers.forEach(layer => {
    layer.render()
  })

}