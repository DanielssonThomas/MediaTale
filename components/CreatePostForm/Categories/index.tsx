"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const Categories = async () => {
  const supabase = await createServerComponentClient({ cookies });
};

export default Categories;
