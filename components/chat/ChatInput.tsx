"use client";

import { useState } from "react";


interface Props{
sendMessage:(text:string)=>void;
}


export default function ChatInput({
sendMessage
}:Props){


const [text,setText]=useState("");



function submit(){

if(!text.trim()) return;

sendMessage(text);

setText("");

}



return (

<div
className="
border-t
p-3
flex
gap-2
bg-white
"
>


<input

value={text}

onChange={(e)=>setText(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter")
submit();

}}

placeholder="Ask about properties..."

className="
flex-1
border
rounded-lg
px-3
py-2
text-sm
outline-none
"

/>


<button

onClick={submit}

className="
bg-[#1F5E58]
text-white
px-4
rounded-lg
"

>

Send

</button>


</div>

);


}