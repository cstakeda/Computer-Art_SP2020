function polygon(posX,posY,radius,numSides){ //Polygon generator
    const rotAngle = 360 / numSides
    beginShape()
    for (let i=0; i < numSides; i++){
      const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
      vertex(thisVertex.x, thisVertex.y)
    }
  endShape(CLOSE)
  }
  
  function pointOnCircle(posX,posY,radius,angle){ //Finds points along a circle and create vectors
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x,y)
  
  }

  function randomSelectTwo(){ //Random selector of either true or false
    const rando = random(1)
    if (rando > .5){
      return true
    }else{
      return false
    }
  }
  
  function getRandomFromPalette(){ // Get a random color from the defined list
    const rando2 = floor(random(0,PALETTE.length))
    return PALETTE[rando2]
  }