import { auth } from "@/auth";
import Navbar from "./navbar";

export async function AppNav() {
  const session = await auth();

  return <Navbar session={session} />;
}
