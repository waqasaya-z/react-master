import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

export function auth() {
  return getServerSession(authOptions);
}
