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
render.canvas.width = window.outerWidth
render.canvas.height = window.outerHeight
console.log("hieght: " + window.innerHeight);
// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, window.outerWidth, 60, { isStatic: true });
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
Composite.add(engine.world, [greetBox, boxA, boxB, ground]);

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

  
