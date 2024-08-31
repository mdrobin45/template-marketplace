import jwt from "jsonwebtoken";

export default async function generateToken(payload: {
   name: string;
   email: string;
   role: string;
}) {
   const token = await jwt.sign(payload, process.env.JWT_SECRET);
   return token;
}
