import './calc.css';
import {useState} from "react";

const Calc = () => {
	const [midEnd, setMidEnd] = useState(0)
	const [midCalc, setMidCalc] = useState({
		material: '1',
		allLength: '',
		floorHeight: '1',
		partLength: '',
		partWidth: '',
		count: '',
	})

	const [brickCount, setBrickCount] = useState()
	const [showResult, setShowResult] = useState(false)

	const endSumMid = () => {
		const size = ((+midCalc.allLength * +midCalc.floorHeight)) + ((+midCalc.partLength * +midCalc.partWidth + +midCalc.floorHeight));
		setBrickCount(size * (+midCalc.count * 128))
		return size * (midCalc.material === '1' ? 200 : 250)
	}
	const handleChangeMid = (e, trigger) => {
		setMidCalc((prevCalc) => ({
			...prevCalc,
			[trigger]: e.target.value
		}))
	}
	const handleClick = () => {
		const endBotMid = endSumMid()
		setMidEnd(endBotMid)
		setShowResult(!showResult)
	}

	return (
		<div className='content-wrapper'>
			<h2 className='desc'>Выберите какую часть дома хотите расчитать?</h2>
			<div className='top-content'>
				<div className='top-house'>
					<div>
						<img
							className='img-mid'
							src={midCalc.material === '1' ? 'https://pngimg.com/uploads/brick/brick_PNG3332.png' : 'https://lh3.googleusercontent.com/proxy/AdpPIxACijQ41dLqqGtSwxMLm_X6DVKVWo-Tt4zBSRvPlkM4-JrwLyXCZj8hpUDz2lM1ig1zSCBGdJYvuJ26BTCiQ7qEc7sGfVx7DgwVwc07qCrN3SD9MtiA0xNVkg'}
							alt="middle"
						/>
					</div>
				</div>
				<div className='select-type'>
					<span style={{marginRight: '10px', fontSize: '20px'}}>Выберите вид кирпича:</span>
					<select
						value={midCalc.material}
						onChange={(e) => handleChangeMid(e, 'material')}
						name=""
					>
						<option value="1">Облицовочный</option>
						<option value="2">Силикатный</option>
					</select>
				</div>
			</div>

			<div className='middle-content'>
				{showResult ? <div className='rows'>
						<div>
							Количество кирпичей: {brickCount} шт.
							Стоимость: {midEnd} р.
						</div>
					</div>
					: <div className='rows'>
						<div className='row2'>
							<div className='select-type'>
								Толщина стен:
								<select value={midCalc.count} onChange={(e) => handleChangeMid(e, 'count')}
												name="">
									<option value="1.25">Половина кирпича</option>
									<option value="1">В 1 кирпич</option>
									<option value="0.75">В 1.5</option>
									<option value="0.5">В 2</option>
								</select>
							</div>

							<div className='input-type'>
								Общая длина всех стен:
								<input
									onChange={(e) => handleChangeMid(e, 'allLength')}
									placeholder='Периметр, м'
									type="text"/>
							</div>

							<div className='input-type'>
								Высота одного этажа
								<input
									onChange={(e) => handleChangeMid(e, 'floorHeight')}
									placeholder='м'
									type="text"
								/>
							</div>

							<div className='input-type'>
								Длинна перегородок
								<input
									onChange={(e) => handleChangeMid(e, 'partLength')}
									placeholder='м'
									type="text"
								/>
							</div>

							<div className='input-type'>
								Толщина перегородок
								<input
									onChange={(e) => handleChangeMid(e, 'partWidth')}
									placeholder='м'
									type="text"
								/>
							</div>
						</div>
					</div>}
				<div className='button'>
					<button onClick={handleClick}>{showResult ? 'Назад' : 'Расчитать'}</button>
				</div>
			</div>
		</div>
	);
}

export default Calc;
