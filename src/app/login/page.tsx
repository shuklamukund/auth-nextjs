"use client"
import Link from "next/link";
import React,{useState} from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";


export default function Login(){
    const [user,setUser]=useState({
        email:"",
        password:"",
       
    })

    const onLogin=async()=>{
        
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr/>
            
            <label htmlFor="emai">username</label>
            <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type="text"
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
                placeholder="Enter email"
            />
            <label htmlFor="password">username</label>
            <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                value={user.password}
                onChange={(e)=>setUser({...user,password:e.target.value})}
                placeholder="Enter password"
            />
            <button 
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login</button>
            <Link href="/login">Visit signup page</Link>
        </div>

    );
}