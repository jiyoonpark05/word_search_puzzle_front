import * as css from "./page.css";

export default function User() {
  return (
    <div className={css.container}>
      <div>
        <div>
          header
          <div className={css.profile} />
        </div>
        <div>
          <div>name</div>
        </div>
      </div>
      <div>?</div>
    </div>
  );
}
