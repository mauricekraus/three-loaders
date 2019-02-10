import DracoLoader from "./THREEDracoLoader";

export default path => {
  const loader = DracoLoader;
  loader.setDecoderPath(path);
  return new DracoLoader();
};
