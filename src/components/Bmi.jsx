import React, {useState} from 'react'
import './pages.css'

function Bmi() {

	const [data, setData] = useState({
		height:"",
		weight:"",
		result:""
	})

console.log(typeof data.height)

	function CalculateBmi(){
			let result = data.weight / (data.height ** 2) * 10000
			result = result.toFixed(1)
			setData({...data, result:result})
		/*
			
		*/
	}

	return (
		<div className='bmi-body'>
			<h1 className="bmi-title">Bmi Calculator👩‍💻</h1>
			<div className="input-body">
				How Tall Are You?
				<input onChange={(e) => setData({...data, height:e.target.value})} value={data.height} type="number" placeholder='Cm' className="input" />
			</div>
			<div className="input-body">
				How Much Do You Weight?
				<input onChange={(e) => setData({...data, weight:e.target.value})} value={data.weight} type="number" placeholder='Kg' className="input" />
			</div>
			<button onClick={() => CalculateBmi()} className="submit">
				Calculate
			</button>
			<p className="result">🏁The Result Is: {data.result}</p>
		</div>
	)
}

export default Bmi