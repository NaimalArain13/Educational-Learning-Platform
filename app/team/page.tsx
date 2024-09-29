import Achievement from "@/app/components/achievement"
import TeamCard, { TeamProp } from "@/app/components/teamCard"
import React from "react"


export default function Team(){
    const teamMembers:TeamProp[] = [
        {
            image:"/profile.jpg",
            teamMem:"Kanwal Heer",
            memTitle:"Full-stack Developer"
        },
        {
            image:"/profile.jpg",
            teamMem:"Filza Danish",
            memTitle:"Front-end Developer"
        },
        {
            image:"/profile.jpg",
            teamMem:"Joseph Murryambu",
            memTitle:"Nursing Assistant"
        },
        {
            image:"/profile.jpg",
            teamMem:"Joseph Ngumbau",
            memTitle:"Medical Assistant"
        },
        {
            image:"/profile.jpg",
            teamMem:"Erick Kipkemboi",
            memTitle:"Web Designer"
        },
        {
            image:"/profile.jpg",
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