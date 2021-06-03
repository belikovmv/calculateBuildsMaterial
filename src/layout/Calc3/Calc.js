import './calc.css';
import {useState} from "react";

const Calc = () => {
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
			const endBotSum = endSumBot();
			setBotEnd(endBotSum)
		setShowResult(!showResult)
	}

	return (
		<div className='content-wrapper'>
			<h2 className='desc'>Выберите какую часть дома хотите расчитать?</h2>
			<div className='top-content'>
				<div className='top-house'>
					<div>
						<img
							className='img-bot'
							src={'https://stroy-calc.ru/img/1s.jpg'}
							alt="bottom"
						/>
					</div>
				</div>
			</div>

			<div className='middle-content'>
				{showResult ? <div className='rows'>
						<div>
							{botEnd} р.
						</div>
					</div>
					: <div className='rows'>
						<div className='row3'>
							<div className='select-type'>
								Марка бетона
								<select value={botCalc.mark} onChange={(e) => handleChangeBot(e, 'mark')} name="">
									<option value="М100">М100</option>
									<option value="M150">M150</option>
									<option value="M150">M200</option>
									<option value="M250">M250</option>
								</select>
							</div>

							<div className='input-type'>
								Размер ленты?
								<input
									onChange={(e) => handleChangeBot(e, 'width')}
									placeholder='Ширина ленты, м - A'
									type="text"/>
								<input
									onChange={(e) => handleChangeBot(e, 'length')}
									placeholder='Длина ленты, м - B'
									type="text"/>
								<input
									onChange={(e) => handleChangeBot(e, 'height')}
									placeholder='Высота ленты, мм - C'
									type="text"/>
								<input
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
