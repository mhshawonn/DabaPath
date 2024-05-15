import type { NextAuthOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/model/user";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

export const options : NextAuthOptions ={
    providers :[
        GithubProvider ({
            clientId : "75580087e05a9a2f296e",
            clientSecret :"194eb3f4f01ac3f5157eb4391115cdaea28816ee",
        }),
        GoogleProvider ({
            clientId :"21595523971-6fasgq4a8fh2of3bdvoh4ptmo7eh5tdr.apps.googleusercontent.com",
            clientSecret :"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",

        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              username: {
                label: "Username",
                type: "text",
                placeholder: "Enter your username",
              },
              password: {
                label: "Password",
                type: "password",
                placeholder: "Enter your password",
              },
            },
            async authorize(credentials) {
              const user = { id: "1001", name: "shawon", password: "shawon" };
              if (
                credentials?.username === user.name &&
                credentials?.password === user.password
              ) {
                return user;
              } else {
                return null;
              }
            },
          }),
    ],

  
    
}