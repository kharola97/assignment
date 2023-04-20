
import React, { useState } from 'react'

function App() {
    const [info, setInfo] = useState({name:"",phone:"",email:"",course:""})
    const [infoList, setInfoList] = useState([])

    const handleInfo = async(e)=>{
     
      const {name,value} = e.target
      setInfo({...info,[name]:value})
    }

    const handleData = async(e)=>{
      e.preventDefault()
      setInfoList([...infoList,info])
      setInfo({name:"",phone:"",email:"",course:""})
    }
  return (
    <div>
        <div style={{display:"flex", flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start",margin:"20px"}} className='app'>
            <form style={{border:"2px solid black", padding:"50px" }} className='form'>
                <h1 style={{marginLeft:"20px"}}>Student Details</h1>
                <div style={{padding:"20px"}}  className='detail'>
                <label style={{width:"50px", padding:"20px"}} htmlFor='name'>name</label>
                <input  type='text' id='name' name='name' value={info.name} onChange={handleInfo}></input>
                </div>
                <div style={{padding:"20px"}} className='detail'>
                <label style={{width:"50px", padding:"20px"}}  htmlFor='number'>phone</label>
                <input  type='tel' id='phone' name='phone' value={info.phone} onChange={handleInfo}></input>
                </div>
                <div style={{padding:"20px"}} className='detail'>
                <label style={{width:"50px",padding:"20px"}}  htmlFor='number'>email</label>
                <input  type='email' id='email' name='email' value={info.email} onChange={handleInfo}></input>
                </div>
                <div style={{padding:"20px"}} className='detail'>
                <label style={{width:"50px",padding:"20px"}}  htmlFor='number'>course</label>
                <input  type='text' id='course' name='course' value={info.course} onChange={handleInfo}></input>
                </div>
                <button style={{marginLeft:"150px"}} type='submit' onClick={handleData}>Submit</button>
            </form>
            <table style={{border:"2px solid green", height:"150px",margin:"20px", width:"100px"}}>
              <thead >
                <tr>
                  <th style = {{padding:"2px", textAlign:"left"}}>srno</th>
                  <th style = {{padding:"2px", textAlign:"left"}}>name</th>
                  <th style = {{padding:"2px", textAlign:"left"}}>phone</th>
                  <th style = {{padding:"2px", textAlign:"left"}}>email</th>
                  <th style = {{padding:"2px", textAlign:"left"}}>course</th>
                </tr>
              </thead>
              <tbody>
               
                {infoList.map((info,index)=>(
                   <tr key={index}>
                    <td style = {{padding:"2px", textAlign:"left"}}>{index+1}</td>
                    <td style = {{padding:"2px", textAlign:"left"}}>{info.name}</td>
                    <td style = {{padding:"2px", textAlign:"left"}}>{info.phone}</td>
                    <td style = {{padding:"2px", textAlign:"left"}}>{info.email}</td>
                    <td style = {{padding:"2px", textAlign:"left"}}>{info.course}</td>
                  
                  </tr>
                ))}
               
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default App
