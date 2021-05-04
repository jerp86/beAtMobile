import { Dimensions, PixelRatio } from "react-native";

const { width } = Dimensions.get('window');

export const px = (valuePx: number) => {
  const widthPercent = (valuePx / 375) * 100;
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * widthPercent) / 100,
  );

  return screenPixel;
};