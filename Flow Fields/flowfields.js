	function setup() {
		noLoop()
	  	createCanvas(1000,1000)
		draw()
	}

	function draw() {

	  const max = TWO_PI
	  const min = -TWO_PI
	  var t = 0
	  const i = 4
	  const b = 20


	  stroke(0,0,255)
	  fill(109, 153, 122)
	  strokeWeight(2)


	  for (x = b; x <= width - b; x+=10) { 
		for (y = b; y <= height - b; y+=10) {
			const r = map(noise(x/200,y/200,t),0,1,min,max)
			const s = map(noise(x/200,y/200,t+200),0,1,3,10)
		 	 drawCross(x,y,s,r)
		}
	  }
		t+= 0.001
	}

	function drawCross(x,y,radius,start) {
		const x1 = x - (cos(start) * radius)
	  	const y1 = y - (sin(start) * radius)
	  	const x2 = x + (cos(start) * radius)
	  	const y2 = y + (sin(start) * radius)
	  	const x3 = x - (sin(start) * radius)
	  	const y3 = y + (cos(start) * radius)
	  	const x4 = x + (sin(start) * radius)
	  	const y4 = y - (cos(start) * radius)
	  
	  line(x1,y1,x2,y2)
	  line(x3,y3,x4,y4)
	}