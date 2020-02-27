	function setup() {
		createCanvas(1000,1000)
		background(254)
	}

	function mousePressed(){ // Attempt to get canvas to reload. Believed to be isse=ue with noise()
		clear()
		redraw()
	}


	function draw() {

		noLoop()

		const max = TWO_PI
	  	const min = -TWO_PI
	  	const borderoffset  = 25 //Border from edge
	  	const c = 1000 //Tuning parameter
	  	const spacing = 6.1 //Spacing inbetween crosses
		  var t = 0 
		  
	  	stroke(5)
	  	strokeWeight(1.9)


		for (x = borderoffset; x <= width - borderoffset; x+=spacing) { 
			for (y = borderoffset; y <= height - borderoffset; y+=spacing) {
				const radius = map(noise(x/c,y/c,t+c),0,1,min,max)
				const angle = map(noise(x/c,y/c,t+c),0,1,3,10)
				cross(x,y,angle,radius)
			}
		}
			t+= .001
		}

		function cross(x,y,radius,start) {
			push()
				translate(x,y)
				rotate(start)
				line(0,-radius,0,radius)
				line(-radius,0,radius,0)
			pop()
		}

	