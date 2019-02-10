import DracoLoader from "./THREEDracoLoader";

export default class Loader {
  constructor(path) {
    const loader = DracoLoader;
    loader.setDecoderPath(path);
  }
}
