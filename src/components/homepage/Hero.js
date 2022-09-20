import { css } from "aphrodite";
import { useRef } from "react";
import styles from "../utilities/Animations";
import { Waypoint } from "react-waypoint";

export default function Hero() {
  const _ref = useRef();

  function enterAnimation() {
    _ref.current.classList.add(`${css(styles.fadeInLeft)}`);
  }
  return (
    <div className="bg-gradient-to-t from-slate-700 to-slate-400 w-full text-slate-100 ">
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <p>xd</p>
      <Waypoint onEnter={enterAnimation} />
      <p ref={_ref}>animated</p>
      My Hero HERE
    </div>
  );
}
