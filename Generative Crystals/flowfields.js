	float t = 0;
	float i = 4;
	float b = 20;

	void setup() {
	  size(600,600);
	}

	void draw() {
	  float max = TWO_PI;
	  float min = -TWO_PI;
	  background(245, 223, 152);
	  stroke(109, 153, 122);
	  fill(109, 153, 122);
	  strokeWeight(2);
	  for (float x = b; x <= width - b; x+=10) { 
		for (float y = b; y <= height - b; y+=10) {
		  float r = map(noise(x/200,y/200,t),0,1,min,max);
		  float s = map(noise(x/200,y/200,t+200),0,1,3,10);
		  drawCross(x,y,s,r);
		}
	  }
	  t += 0.001;
	  //noLoop();
	}

	void drawCross(float x, float y, float radius, float start) {
	  float x1 = x - (cos(start) * radius);
	  float y1 = y - (sin(start) * radius);
	  float x2 = x + (cos(start) * radius);
	  float y2 = y + (sin(start) * radius);
	  float x3 = x - (sin(start) * radius);
	  float y3 = y + (cos(start) * radius);
	  float x4 = x + (sin(start) * radius);
	  float y4 = y - (cos(start) * radius);
	  
	  line(x1,y1,x2,y2);
	  line(x3,y3,x4,y4);
	}