import { SelfieSegmentation } from  "@mediapipe/selfie_segmentation"


const selfie = new SelfieSegmentation();
selfie.setOptions({
  modelSelection: 1,
})