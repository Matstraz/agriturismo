import { StyleSheet } from "aphrodite";
import { fadeInLeft, tada, fadeInUp } from "react-animations";

const styles = StyleSheet.create({
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: "1s",
  },
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: "0.5s",
  },
  tada: {
    animationName: tada,
    animationDuration: "3.5s",
    animationIterationCount: "infinite",
  },
});

export default styles;
