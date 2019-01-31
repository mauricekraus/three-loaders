import DracoLoader from "./THREEDracoLoader";

const Loader = DracoLoader;
Loader.setDecoderPath("./draco/");
Loader.setDecoderConfig({ type: "js" });

export default Loader;
