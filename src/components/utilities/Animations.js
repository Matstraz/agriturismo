import { StyleSheet } from "aphrodite";
import { fadeInRight, fadeInLeft, tada } from "react-animations";

const styles = StyleSheet.create({
  fadeInRight: {
    animationName: fadeInRight,
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
