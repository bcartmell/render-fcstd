(function () {
  'use strict';
  var scene = new THREE.Scene(); 
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  var light = new THREE.PointLight(0xffffff);

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var controls = new THREE.OrbitControls(camera, renderer.domElement);

  drawTeapot();
  render();

  function drawTeapot() {
    var material = new THREE.MeshLambertMaterial( {wireframe: false, color: 0x00ff00 });

    var sphereGeo = new THREE.SphereGeometry(5, 32, 32);
    var sphere = new THREE.Mesh(sphereGeo, material);
    sphere.position.x = 0;
    sphere.position.y = 0;
    scene.add(sphere);

    var boxGeo = new THREE.BoxGeometry(10, 10, 10, 1, 1, 1);
    var box = new THREE.Mesh(boxGeo, material);
    box.position.x = -5;
    box.position.y = -13;
    box.position.z = -4.8;
    scene.add(box);


  }

  camera.position.z = 25;
  camera.lookAt(scene.position);

  light.position.x = 10;
  light.position.y = 15;
  light.position.z = 25;

  scene.add(light);

  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }

  /* renderer.domElement.addEventListener('mousedown', function(event) {
    var startPos = relativePos(event, renderer.domElement);
    trackDrag(function(event) {
      camera.rotation.x += event.movementX / 10000;
      camera.position.x -= event.movementX / 100;

      camera.rotation.y -= event.movementY / 10000;
      camera.position.y += event.movementY / 100;

      // camera.rotation.z -= event.movementY / 1000;
    });
  }, false);

  function trackDrag(onMove, onEnd) {
    function end(event) {
      removeEventListener('mousemove', onMove);
      removeEventListener('mouseup', end);
      if (onEnd) onEnd(event);
    }
    addEventListener('mousemove', onMove);
    addEventListener('mouseup', end);
  }
 */
  function relativePos(event, element) {
    var rect = element.getBoundingClientRect();
    return {
      x: Math.floor(event.clientX - rect.left),
      y: Math.floor(event.clientY - rect.top)
    };
  }

}());
