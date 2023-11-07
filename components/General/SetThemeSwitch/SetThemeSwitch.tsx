import { setCookie } from "./setCookie";
import Button from "../Button";
export const SetThemeSwitch = () => {
  return (
    <form action={setCookie}>
      <Button text="Switch theme" type="default" />
    </form>
  );
};
