import Movements from "./movements.js";

const scene = new THREE.Scene();
scene.background=new THREE.Color(0x0000b3);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const ambientLight=new THREE.AmbientLight(0xbda555);
const directionLight= new THREE.DirectionalLight(0xffffff,1);
ambientLight.add(directionLight);
scene.add(ambientLight);

//Plane
const plane_geom = new THREE.BoxGeometry( 100, 0.2, 50 );
const material_plane = new THREE.MeshPhongMaterial( { color: 0xeafafa } );
const plane = new THREE.Mesh( plane_geom, material_plane );
scene.add( plane );

//Cube
const geometry = new THREE.BoxGeometry( 10, 10, 10 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(10,20,0)
scene.add( cube );

//cube 2
const geometry2 = new THREE.BoxGeometry( 10, 10, 10 );
const material2 = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube2 = new THREE.Mesh( geometry2, material2 );
cube2.position.set(30,20,0)
scene.add( cube2 );



//camera.position.z =5;
camera.position.set(10,5,40);


function animate() {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;
    cube2.rotation.z += 0.01;
    //camera.position.x-=0.01
  
   
	requestAnimationFrame( animate );
    //   left
      if (Movements.isPressed(37))
      {
          camera.position.x-=0.5
      }
    //   up
    if (Movements.isPressed(38))
    {
        camera.position.x+=0.5
        camera.position.y+=0.5
    }
    //right
    if (Movements.isPressed(39))
    {
        camera.position.x+=0.5
    }
    //down
    if (Movements.isPressed(40))
    {
        camera.position.x-=0.5
        camera.position.y-=0.5
    }
    camera.lookAt(plane.position)
	renderer.render( scene, camera );
}
animate();

//renderer.render( scene, camera );