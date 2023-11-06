import { setCookie } from "./setCookie";

export const SetThemeSwitch = () => {
  return (
    <form action={setCookie}>
      <button>Switch theme</button>
    </form>
  );
};
