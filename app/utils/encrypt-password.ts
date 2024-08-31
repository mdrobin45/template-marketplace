import bcrypt from "bcrypt";

export default async function hashPassword(password: string) {
   const hashedPwd = await bcrypt.hash(password, 10);
   return hashedPwd;
}
