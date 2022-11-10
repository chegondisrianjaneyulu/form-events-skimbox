import {useState, React, useRef, useEffect} from 'react'

export default function FormEvents() {
  const [username, setUserName] = useState('')
  const [userData, setUserData] = useState([])

  

  const onClickSubmit = () => {
    let input = {'name':username}
    setUserData((prevArr) => [...prevArr,input])
    setUserName('')
  }

  console.log(userData)

  

  return (
    <div className='shadow-lg p-3 flex flex-col items-center max-w-lg w-1/2 max-h-96'>
        <div className='flex flex-row space-x-2  justify-around'>
            <div className='flex flex-col'>
                <label>User_Name</label>
                <input   value={username} onChange={(event) => setUserName(event.target.value)} type="text" className='border-black bg-red-500'/>
            </div>
            <button onClick={onClickSubmit} className='self-start mt-3 ml-4  bg-rose-400 text-white rounded-sm p-1' type="submit">Submit</button>
       </div>
    </div>
  )
}
 