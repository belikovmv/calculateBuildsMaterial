import './calc.css';
import {useState} from "react";

const Calc1 = () => {
	const [topCalc, setTopCalc] = useState({
		type: 'Односкатная',
		material: 'Металочерепица',
		size: {
			width: 0,
			height1: 0,
			height2: '',
		},
		warm: false,
	})
	const [topEnd, setTopEnd] = useState(0)

	const [showResult, setShowResult] = useState(false)

	const endSumTop = () => {
		if (topCalc.type === 'Односкатная') {
			const size = topCalc.size.width * topCalc.size.height1;
			return size * ((topCalc.material === 'Металочерепица' ? 950 : 'Профнастил' ? 750 : 1050) + (topCalc.warm ? 250 : 0));
		} else {
			const size = (topCalc.size.height1 + topCalc.size.height2) * (topCalc.size.width / 2);
			return size * ((topCalc.material === 'Металочерепица' ? 950 : 'Профнастил' ? 750 : 1050) + (topCalc.warm ? 250 : 0));
		}
	}
	const handleChangeTop = (e, trigger) => {
		if (trigger === 'warm') {
			setTopCalc((prevCalc) => ({
				...prevCalc,
				[trigger]: !topCalc.warm
			}))
		} else if (trigger === 'width' || trigger === 'height1' || trigger === 'height2') {
			setTopCalc((prevCalc) => ({
				...prevCalc,
				size: {
					...prevCalc.size,
					[trigger]: e.target.value
				}
			}))
		} else {
			setTopCalc((prevCalc) => ({
				...prevCalc,
				[trigger]: e.target.value
			}))
		}
	}

	const handleClick = () => {
		if (topCalc.material) {
			const endTopSum = endSumTop()
			setTopEnd(endTopSum)
		}
		setShowResult(!showResult)
	}

	return (
		<div className='content-wrapper'>
			<h2 className='desc'>Выберите какую часть дома хотите расчитать?</h2>
			<div className='top-content'>
				<div className='top-house'>
					<div>
						<img
							className='img-top'
							src={'https://www.grandline.ru/glroof/img/step2/dvusk/dvuskiw.png'}
							alt="top"
						/>
					</div>
			</div>
			</div>

			<div className='middle-content'>
				{showResult ? <div className='rows'>
						<div>
							{topEnd} р.
						</div>
					</div>
					: <div className='rows'>
						<div className='row1'>
							<div className='select-type'>
								Выберите тип кровли:
								<select value={topCalc.type} onChange={(e) => handleChangeTop(e, 'type')} name="">
									<option value="Односкатная">Односкатная</option>
									<option value="Двускатная">Двускатная</option>
								</select>
							</div>

							<div className='select-type'>
								Материал:
								<select value={topCalc.material} onChange={(e) => handleChangeTop(e, 'material')}
												name="">
									<option value="Металочерепица">Металочерепица</option>
									<option value="Профнастил">Профнастил</option>
									<option value="Фальцевая">Фальцевая</option>
								</select>
							</div>

							<div className='input-type'>
								Размеры вашей кровли:
								{topCalc.type === 'Односкатная' ? <>
										<input
											onChange={(e) => handleChangeTop(e, 'width')}
											placeholder='Ширина ската, м'
											type="text"/>
										<input
											onChange={(e) => handleChangeTop(e, 'height1')}
											placeholder='Длинна ската, м'
											type="text"/>
									</>
									: <>
										<input
											onChange={(e) => handleChangeTop(e, 'width')}
											placeholder='Ширина ската, м'
											type="text"/>
										<input
											onChange={(e) => handleChangeTop(e, 'height1')}
											placeholder='Длинна ската 1, м'
											type="text"/>
										<input
											onChange={(e) => handleChangeTop(e, 'height2')}
											placeholder='Длинна ската 2, м'
											type="text"/>
									</>}

							</div>

							<div className='checkbox-type'>
								<label>
									<input value={topCalc.warm} onChange={(e) => handleChangeTop(e, 'warm')}
												 type="checkbox"/>
									Сделать расчет с утеплителем?
								</label>
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

export default Calc1;
