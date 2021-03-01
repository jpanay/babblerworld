let scene, camera, renderer, controls

let init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.000001, 10000000000 );
  camera.position.set(6, 0, 0)

  let ambLight = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( ambLight );

  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.querySelector('#main').appendChild( renderer.domElement );

  // controls = new THREE.OrbitControls( camera, renderer.domElement );
  // controls.update()
}

let userControls = () => {
  let body = document.body
  let floorTo = (num, points) => { return (Math.floor(num * points) / points) }
  let angleCalc = (num) => {
    let radian = num % (Math.PI * 2)
    let angle = radian * 57.2958
    return angle
  }
  // Walking Controls
  body.addEventListener('keydown', (e) => {
    console.log(camera.position)
    console.log(camera.rotation)
    let angle = angleCalc(camera.rotation.y)
    console.log('Angle: ' + angle)

    if (e.code === 'KeyW') {

    }
    if (e.code === 'KeyS') {

    }
    if (e.code === 'KeyA') {
      camera.rotation.y += Math.PI / 90;
    }
    if (e.code === 'KeyD') {
      camera.rotation.y -= Math.PI / 90;
    }
  })
  // Clicking Controls
}

let basicLand = () => {
  let planeGeo = new THREE.BoxGeometry(1000,20,1000, 100, 4, 100);
  let planeMat = new THREE.MeshNormalMaterial( { wireframe: true } );
  let plane = new THREE.Mesh( planeGeo, planeMat );
  plane.position.set(0, -20, 0)
  scene.add( plane );

  let markerGeo = new THREE.BoxGeometry(50,50,50);
  let markerMat = new THREE.MeshNormalMaterial( { } );
  let marker = new THREE.Mesh( markerGeo, markerMat );
  marker.position.set(0, 10, -200)
  scene.add( marker );
}

let animate = () => {
  requestAnimationFrame( animate );
  // controls.update();
  renderer.render( scene, camera );
}

init()
userControls()
basicLand()
animate()