import success from '../../img/success.png';
import './calc.css';
import {useState} from "react";

const Calc = () => {
	const [top, setTop] = useState(false);
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

	const [midEnd, setMidEnd] = useState(0)
	const [middle, setMiddle] = useState(false);
	const [midCalc, setMidCalc] = useState({
		allLength: '',
		floors: '',
		floorHeight: '',
		width: '',
		partLength: '',
		partWidth: '',
	})

	const [bot, setBot] = useState(false);
	const [botCalc, setBotCalc] = useState({
		mark: '',
		size: {
			depth: '',
			length: '',
			height: '',
			width: ''
		}
	})
	const [botEnd, setBotEnd] = useState(0)

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

	const endSumMid = () => {
		const size = ((midCalc.allLength * midCalc.floorHeight * midCalc.width) * midCalc.floors) + ((midCalc.partLength * midCalc.partWidth + midCalc.floorHeight) * midCalc.floors);
		return size * 200
	}
	const handleChangeMid = (e, trigger) => {
		setMidCalc((prevCalc) => ({
			...prevCalc,
			[trigger]: e.target.value
		}))
	}

	const endSumBot = () => {
		const size = ((botCalc.size.height * botCalc.size.length) - ((botCalc.size.height - botCalc.size.depth) * (botCalc.size.length - botCalc.size.depth))) * botCalc.size.height;
		return size * (botCalc.mark === 'M100' ? 2450 : 'M150' ? 2600 : 'M200' ? 2800 : 3050);
	}
	const handleChangeBot = (e, trigger) => {
		if (trigger === 'depth' || trigger === 'width' || trigger === 'height' || trigger === 'length') {
			setBotCalc((prevCalc) => ({
				...prevCalc,
				size: {
					...prevCalc.size,
					[trigger]: e.target.value
				}
			}))
		} else {
			setBotCalc((prevCalc) => ({
				...prevCalc,
				[trigger]: e.target.value
			}))
		}
	}

	const handleClick = () => {
		if (topCalc.material) {
			const endTopSum = endSumTop()
			setTopEnd(endTopSum)

			const endBotSum = endSumBot();
			setBotEnd(endBotSum)

			const endBotMid = endSumMid()
			setMidEnd(endBotMid)
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
							onClick={() => setTop(!top)}
							src={'https://www.grandline.ru/glroof/img/step2/dvusk/dvuskiw.png'}
							alt="top"
						/>
						{top && <img className='success1' src={success} alt="success"/>}
					</div>
					<div>
						<img
							className='img-mid'
							onClick={() => setMiddle(!middle)}
							src={'https://stroy-calc.ru/img/kb.jpg'}
							alt="middle"
						/>
						{middle && <img className='success2' src={success} alt="success"/>}
					</div>
					<div>
						<img
							className='img-bot'
							onClick={() => setBot(!bot)}
							src={'https://stroy-calc.ru/img/1s.jpg'}
							alt="bottom"
						/>
						{bot && <img className='success3' src={success} alt="success"/>}
					</div>
				</div>
			</div>

			<div className='middle-content'>
				{showResult ? <div className='rows'>
						<div>
							{topEnd} р.
						</div>
						<div>
							{midEnd} р.
						</div>
						<div>
							{botEnd} р.
						</div>
					</div>
					: <div className='rows'>
						<div style={top ? {opacity: 1} : {opacity: .3}} className='row1'>
							<div className='select-type'>
								Выберите тип кровли:
								<select value={topCalc.type} disabled={!top} onChange={(e) => handleChangeTop(e, 'type')} name="">
									<option value="Односкатная">Односкатная</option>
									<option value="Двускатная">Двускатная</option>
								</select>
							</div>

							<div className='select-type'>
								Материал:
								<select value={topCalc.material} disabled={!top} onChange={(e) => handleChangeTop(e, 'material')}
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
											disabled={!top}
											placeholder='Ширина ската, м'
											type="text"/>
										<input
											onChange={(e) => handleChangeTop(e, 'height1')}
											disabled={!top}
											placeholder='Длинна ската, м'
											type="text"/>
									</>
									: <>
										<input
											onChange={(e) => handleChangeTop(e, 'width')}
											disabled={!top}
											placeholder='Ширина ската, м'
											type="text"/>
										<input
											onChange={(e) => handleChangeTop(e, 'height1')}
											disabled={!top}
											placeholder='Длинна ската 1, м'
											type="text"/>
										<input
											onChange={(e) => handleChangeTop(e, 'height2')}
											disabled={!top}
											placeholder='Длинна ската 2, м'
											type="text"/>
									</>}

							</div>

							<div className='checkbox-type'>
								<label>
									<input disabled={!top} value={topCalc.warm} onChange={(e) => handleChangeTop(e, 'warm')}
												 type="checkbox"/>
									Сделать расчет с утеплителем?
								</label>
							</div>
						</div>

						<div style={middle ? {opacity: 1} : {opacity: .2}} className='row2'>
							<div className='input-type'>
								Общая длина всех стен:
								<input
									disabled={!middle} onChange={(e) => handleChangeMid(e, 'allLength')}
									placeholder='Пе
									риметр, м'
									type="text"/>
							</div>

							<div className='input-type'>
								Количество этажей
								<input
									disabled={!middle}
									onChange={(e) => handleChangeMid(e, 'floors')}
									placeholder='м'
									type="text"
								/>
							</div>

							<div className='input-type'>
								Высота одного этажа
								<input
									disabled={!middle}
									onChange={(e) => handleChangeMid(e, 'floorHeight')}
									placeholder='м'
									type="text"
								/>
							</div>

							<div className='input-type'>
								Толщина стен:
								<input
									disabled={!middle}
									onChange={(e) => handleChangeMid(e, 'width')}
									placeholder='м'
									type="text"
								/>
							</div>

							<div className='input-type'>
								Длинна перегородок
								<input
									disabled={!middle}
									onChange={(e) => handleChangeMid(e, 'partLength')}
									placeholder='м'
									type="text"
								/>
							</div>

							<div className='input-type'>
								Толщина перегородок
								<input
									disabled={!middle}
									onChange={(e) => handleChangeMid(e, 'partWidth')}
									placeholder='м'
									type="text"
								/>
							</div>
						</div>

						<div style={bot ? {opacity: 1} : {opacity: .2}} className='row3'>
							<div className='select-type'>
								Марка бетона
								<select value={botCalc.mark} disabled={!bot} onChange={(e) => handleChangeBot(e, 'mark')} name="">
									<option value="М100">М100</option>
									<option value="M150">M150</option>
									<option value="M150">M200</option>
									<option value="M250">M250</option>
								</select>
							</div>

							<div className='input-type'>
								Размер ленты?
								<input
									disabled={!bot}
									onChange={(e) => handleChangeBot(e, 'width')}
									placeholder='Ширина ленты, м - A'
									type="text"/>
								<input
									disabled={!bot}
									onChange={(e) => handleChangeBot(e, 'length')}
									placeholder='Длина ленты, м - B'
									type="text"/>
								<input
									disabled={!bot}
									onChange={(e) => handleChangeBot(e, 'height')}
									placeholder='Высота ленты, мм - C'
									type="text"/>
								<input
									disabled={!bot}
									onChange={(e) => handleChangeBot(e, 'depth')}
									placeholder='Толщина ленты, мм - D'
									type="text"/>
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
