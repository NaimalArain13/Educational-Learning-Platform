import Achievement from "@/app/components/achievement"
import TeamCard, { TeamProp } from "@/app/components/teamCard"
import React from "react"


export default function Team(){
    const teamMembers:TeamProp[] = [
        {
            image:"https://i.pinimg.com/236x/71/0a/fa/710afa86ad8720a492adfbde88c100bd.jpg",
            teamMem:"Kanwal Heer",
            memTitle:"Full-stack Developer"
        },
        {
            image:"https://i.pinimg.com/236x/d3/e6/1e/d3e61e5c9d8fc2eac93605064d0b9b4c.jpg",
            teamMem:"Filza Danish",
            memTitle:"Front-end Developer"
        },
        {
            image:"https://i.pinimg.com/474x/ae/fe/39/aefe397b9a3e93737b44a5fd0687c876.jpg",
            teamMem:"Joseph Murryambu",
            memTitle:"Nursing Assistant"
        },
        {
            image:"https://i.pinimg.com/736x/d8/83/4f/d8834f825cdcc8cf3c60b80cf05b1330.jpg",
            teamMem:"Joseph Ngumbau",
            memTitle:"Medical Assistant"
        },
        {
            image:"https://i.pinimg.com/564x/3f/02/ad/3f02ad09800f3d8a54e58288e40b0887.jpg",
            teamMem:"Erick Kipkemboi",
            memTitle:"Web Designer"
        },
        {
            image:"https://i.pinimg.com/564x/fb/65/49/fb6549ee1e6cbdeb6eba6aa1adbb80b7.jpg",
            teamMem:"Stephen Kerubo",
            memTitle:"President of Sales"
        },
    ]
    return(
        <>
        <Achievement />
        <div className="flex bg-[#F7F7F7] flex-col min-h-screen items-center text-center py-12">
            <h1 className="text-4xl font-bold mb-4">Our Team</h1>
            <p className="text-gray-600 mb-10 max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Au</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-8 w-full max-w-6xl">
            {teamMembers.map((team, index)=>
            <TeamCard key={index} {...team}/>)}
        </div>
        </div></>
        
        
    )
}