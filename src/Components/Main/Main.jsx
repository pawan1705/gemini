import React, { useContext } from 'react'
import './Main.css';
import {assets} from '../../assets/assets';
import { Context } from '../../Context/Context';
const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);
    // console.log("receprompt",input);
  return (
    <div className='main'>
        <div className="nav">
            {/* <p>SearchAI</p> */}
            <img className='logo' src={assets.logo_full} alt="" />
            <img className='userD' src={assets.user_icon} alt="" />
        </div>
        {
            !showResult
            ?<>
            <div className="greet">
                <p><span>Hello ,Buddy.</span></p>
                <p>How Can I Help you Today ?</p>
            </div>
            <div className="cards">
                <div onClick={()=>onSent("Suggest Best Sunset Point in India")} className="card">
                    <p>Suggest Best Sunset Point in India</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div onClick={()=>onSent("Briefly summarized this concept : urban planning")} className="card">
                    <p>Briefly summarized this concept : urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div onClick={()=>onSent("Brainstorm team bonding activities for our work retreat")} className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div onClick={()=>onSent("Improve the readability of the following code")} className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :
            <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.logo_icon} alt="" />
                    {
                        loading
                        ?<div className='loader'>
                            <img className='lod' src={assets.loader} alt="" />
                        </div>
                        :
                        <p dangerouslySetInnerHTML={{__html:resultData}}>
                        </p>

                    }
                    
                </div>
            </div>
        }
        <div className="main-container">
            
            <div className="main-bottom">
                <div className="search-box">
                    <input  type="text" onChange={(e)=>setInput(e.target.value)} placeholder='Enter a prompt here...' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img  src={assets.send_icon} alt="" onClick={()=>onSent()}/>:null}
                    </div>
                </div>
                <p className="bottom-info">
                searchAI may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main