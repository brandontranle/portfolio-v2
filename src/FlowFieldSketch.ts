import p5 from 'p5';

export default function FlowFieldSketch(p: p5) {
  const points: p5.Vector[] = [];
  const initialPoints: p5.Vector[] = [];
  const paths: p5.Vector[][] = [];
  let mult: number;
  let buildPhase = true;
  let phaseCounter = 0;
  const maxPhaseDuration = 1000;
  let debounceTimer: number;

  function initSketch() {
    localStorage.getItem("darkMode") === "true" ? p.background(30) : p.background(255);
    p.angleMode(p.DEGREES);
    p.noiseDetail(1, 0.5);
    points.length = 0;
    initialPoints.length = 0;
    paths.length = 0;

    const density = 30;
    const space = p.width / density;
    for (let x = 0; x < p.width; x += space) {
      for (let y = 0; y < p.height; y += space) {
        const point = p.createVector(x + p.random(-10, 10), y + p.random(-10, 10));
        points.push(point);
        initialPoints.push(point.copy());
        paths.push([]);
      }
    }

    p.shuffle(points, true);
    mult = p.random(0.002, 0.01);
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    localStorage.getItem("darkMode") === "true" ? p.background(30) : p.background(255);
    p.angleMode(p.DEGREES);
    p.noiseDetail(1, 0.5);

    const density = 30;
    const space = p.width / density;

    for (let x = 0; x < p.width; x += space) {
      for (let y = 0; y < p.height; y += space) {
        const point = p.createVector(x + p.random(-10, 10), y + p.random(-10, 10));
        points.push(point);
        initialPoints.push(point.copy());
        paths.push([]);
      }
    }

    p.shuffle(points, true);
    mult = p.random(0.002, 0.01);
  };

  
  function debounce(func: () => void, delay: number) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(func, delay) as unknown as number;
  }

  p.windowResized = () => {
    debounce(() => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      initSketch();
    }, 250); // Delay of 250 milliseconds
  };

  p.draw = () => {
    p.noStroke();

    if (!buildPhase) {
      localStorage.getItem("darkMode") === "true" ? p.fill(30, 30, 30, 25) : p.fill(255, 255, 255, 5); // White overlay with low opacity
      p.rect(0, 0, p.width, p.height);
    }

    points.forEach((point, i) => {
      const brightness = p.map(point.x, 0, p.width, 100, 140);
      const alpha = p.map(p.dist(p.width / 2, p.height / 2, point.x, point.y), 0, 350, 255, 0);
      p.fill(brightness, brightness, brightness, alpha);
     

      let moveVec: p5.Vector;

      if (buildPhase) {
        const angle = p.map(p.noise(point.x * mult, point.y * mult), 0, 1, 0, 720);
        moveVec = p.createVector(p.cos(angle), p.sin(angle));
        point.add(moveVec);
        paths[i].push(moveVec.copy());
      } else {
        if (paths[i].length > 0) {
          moveVec = paths[i].pop()!;
          point.sub(moveVec);
        }
      }

      if (p.dist(p.width / 2, p.height / 2, point.x, point.y) < 350) {
        p.ellipse(point.x, point.y, 1);
      }

      point.x > p.width ? point.x = 0 : point.x < 0 ? point.x = p.width : null;
      point.y > p.height ? point.y = 0 : point.y < 0 ? point.y = p.height : null;
    });

    phaseCounter++;
    if (phaseCounter > maxPhaseDuration) {
      buildPhase = !buildPhase;
      phaseCounter = 0;
      if (buildPhase) {
        paths.forEach((path, i) => {
          paths[i] = [];
        });
        mult = p.random(0.002, 0.01);
        localStorage.getItem("darkMode") === "true" ? p.background(30) : p.background(255);
      }
    }
  };

 
}

