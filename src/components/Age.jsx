import React, {useState} from 'react'

function Age() {

	const [data, setData] = useState({
		age:'',
		result:'',
	})

	function Calculate(){
		let result = data.age * 31104000
		setData({...data, result:result})
	}

	return (
		<div className='age-body'>
			<h1 className="age-title">Age Calculator👩‍💻</h1>
			<input style={{marginBottom:'30px'}} value={data.age} onChange={(e) => setData({...data, age:e.target.value})} placeholder='How Old Are You?' type="number" className="input" />
			<button onClick={() => Calculate()} className="submit">Calculate</button>
			<p className="result">You Have Lived <span className="red">{data.result}</span> Seconds</p>
		</div>
	)
}

export default Age