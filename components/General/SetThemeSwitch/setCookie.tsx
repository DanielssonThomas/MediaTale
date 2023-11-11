import { cookies } from "next/headers";

export async function setCookie() {
  const currentTheme = cookies().get("theme");
  cookies().delete("theme");
  cookies().set("theme", currentTheme?.value === "dark" ? "" : "dark");
}
