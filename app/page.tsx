import * as css from "./page.css";
import ThreeCanvas from "./components/three/ThreeCanvas";

export default function Home() {
  return (
    <div className={css.wrapper}>
      <ThreeCanvas />
    </div>
  );
}
