"use client"
import Link from "next/link";
import React,{useState} from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";


export default function Signup(){
    const [user,setUser]=useState({
        email:"",
        password:"",
        username:"",
    })

    const onSignup=async()=>{
        
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>SignUp</h1>
            <hr/>
            <label htmlFor="username">username</label>
            <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.username}
                onChange={(e)=>setUser({...user,username:e.target.value})}
                placeholder="Enter username"
            />
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
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Signup</button>
            <Link href="/login">Visit login page</Link>
        </div>

    );
}