	function setup() {
		createCanvas(100,100)
		background(200)
	}

	function drawCross(x,y,radius,angle) {
		push()
			translate(x,y)
			rotate(angle)
			line(0,-radius,0,radius)
			line(-radius,0,radius,0)
		pop()
	}

	function draw() {

		noLoop()

		const max = TWO_PI //Rotation max
	  	const min = -TWO_PI //Rotation min
	  	const borderoffset  = 10 //Border from edge width/40
	  	const c = 400//Tuning parameter
	  	const spacing = 6.1 //Spacing inbetween crosses
		var t = 0 

	  	strokeWeight(1)

		
		//MAIN DRAW LOOP - DRAWS CROSSES BASED UPON SPACING
		for (x = borderoffset; x <= width - borderoffset; x+=spacing) { 
			for (y = borderoffset; y <= height - borderoffset; y+=spacing) {

				const radius = map(noise(x/c,y/c,t+c),0,1,3,7)
				const angle = map(noise(x/c,y/c,t+c),0,1,min,max)

				drawCross(x,y,radius,angle)
			}
		}
			t+= .0001
		}

		

	