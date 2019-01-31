# three-loaders

- This Repository wraps the original [three.js] loaders to use it in modern javascript applications
- Until now it only wraps the gltf loader and the draco loader with no additional needed draco files
- It is important to make the files available in the draco folder.
- To use the Draco loader, please serve the files on the endpoint `/draco`.

## Installation

- To install use either npm

```bash
npm install three
npm install three-loaders
```

- or yarn

```bash
yarn add three
yarn add three-loaders
```

## Usage

All credit goes to [DRACOLoader.js][original_dracoloader] contributors and to [GLTFLoader.js][original_gltfloader] contributors.

```javascript
import * as THREE from "three";
import { THREEGLTFLoader, THREEDracoLoader } from "three-loaders";

// Init THREE scene (add your code)
const loader = THREEGLTFLoader();
loader.setDRACOLoader(new THREEDRACOLoader());
loader.load("file.gltf", gltf => {
  const model = gltf.scene;
  scene.add(model);
});
```

## License

License is the same as [three.js], i.e. [MIT].

[original_dracoloader]: https://github.com/mrdoob/three.js/blob/d3bff25fc38c6143665b7ef482f2ebef3073b3af/examples/js/loaders/DRACOLoader.js "DracoLoader.js"
[original_gltfloader]: https://github.com/mrdoob/three.js/blob/d3bff25fc38c6143665b7ef482f2ebef3073b3af/examples/js/loaders/GLTFLoader.js "GLTFLoader.js"
[three.js]: http://threejs.org/ "three.js"
[mit]: https://github.com/mrdoob/three.js/blob/master/LICENSE "three.js license"
