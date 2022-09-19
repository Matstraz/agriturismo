import { StyleSheet } from "aphrodite";
import { bounce, fadeInRight, tada } from "react-animations";

const styles = StyleSheet.create({
  bounce: {
    animationName: bounce,
    animationDuration: "1s",
  },
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: "1s",
  },
  tada: {
    animationName: tada,
    animationDuration: "3.5s",
    animationIterationCount: "infinite",
  },
});

export default styles;
