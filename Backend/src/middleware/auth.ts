import { NextFunction , Request , Response } from "express";
import { JsonWebTokenError, JwtPayload } from "jsonwebtoken";
import jwt from 'jsonwebtoken'
declare global{
    namespace Express{
        interface Request{
            userId:string
        }
    }
}

const verifyToken=(req:Request,res:Response,next:NextFunction)=>{
    const token=req.cookies["auth_token"];
    if(!token){
        return res.status(401).json({message:"unauthorised"})
    }
    try {
        const decode=jwt.verify(token,process.env.JWT_SECRET_KEY as string)
        req.userId=(decode as JwtPayload).userId;
        next();
    } catch (error) {
        return res.status(401).json({message:"unauthorised"})
    }
}
export default verifyToken;