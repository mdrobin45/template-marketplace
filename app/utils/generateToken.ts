import jwt from "jsonwebtoken";

export default async function generateToken(payload: {
   name: string;
   email: string;
   role: string;
}) {
   const token = await jwt.sign(
      { ...payload, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
      process.env.JWT_SECRET
   );
   return token;
}
