// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Body = Matter.Body;

// create an engine
var engine = Engine.create(
  {
    enableSleeping: false
  }),
  world = engine.world;

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      wireframes: false,
      background: 'transparent',
      setPixelRatio: 'auto'
    },
});

//biggen the canvas
render.canvas.width = window.innerWidth
render.canvas.height = window.innerHeight
console.log("hieght: " + window.innerHeight);
// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
var greetBox = Bodies.rectangle(445, 190, 650, 100, {
  isStatic: true,
  render: {
    fillStyle: '#79EDED',
  }
});

if (greetBox.isSleeping == true) {
  console.log('sleeping');
}


// add all of the bodies to the world
Composite.add(engine.world, [greetBox]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

// mouse control
  var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
              stiffness: 0.2,
              render: {
                  visible: false
              }
          }
      });

  Composite.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  //dark mode toggle
  document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});

//toggle headline highlight
document.getElementById("gravity").addEventListener("click", function(){

  Body.setStatic(greetBox, false);
  console.log(greetBox.isStatic);
  if (greetBox.isStatic) {
    Body.setStatic(greetBox, true);
    console.log('ping2');
  }
});
