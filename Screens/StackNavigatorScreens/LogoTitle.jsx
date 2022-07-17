import { Image } from "react-native";

function LogoTitle({ src }) {
  return <Image style={{ width: 50, height: 50 }} source={src} />;
}

export default LogoTitle;
