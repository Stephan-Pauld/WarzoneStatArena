import React, { useState } from 'react'
import ReactPlayer from "react-player"
import Iframe from 'react-iframe'

function Streams ({match, location}) {
 
  // showing live Twitch on our Server
  const [state, setState] = useState("")

  // const url = `location.href=https://www.twitch.tv/search?term=${state}`
  return ( 
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", color:"rgb(255, 211, 105)"}}>
      <h1 style={{fontSize:"30px", marginTop:"30px"}}>Watching {match.params.id}'s Stream</h1>
      <h2 style={{margin: "40px"}}>
        <strong className='text-primary'>{location.state.views}</strong> Viewers
      </h2>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", }}>
        <ReactPlayer 
          url={`http://twitch.tv/${location.state.username}`}
        />
      </div>
      <div> https://www.twitch.tv/embed/Aydan/chat?darkpopout&parent=cq-esports.com
      <ReactPlayer 
          url={`http://twitch.tv/embed/${location.state.username}/chat?ldarkpopout&parent=cq-esports.com`}
        />
      </div>
      <div>
      <Iframe
          id="chat_embed"
          url={`https://www.twitch.tv/embed/Aydan/chat?darkpopout&parent=cq-esports.com`}
          height="500"
          width="350"></Iframe>
      </div>

    </div>
    
  )
}

export default Streams;