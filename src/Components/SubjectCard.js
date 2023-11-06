import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import colors, { grey } from '../Data/colors';
import DoughnutChart from './DoughnutChart.js';
import './Styles/SubjectCard.css';

const SubjectCard = ({ val, handlePresent, handleAbsent }) => {
	const [percentage, setPercentage] = useState(0);
	const navigate = useNavigate();
	const data = {
		datasets: [
			{
				data: [val.attendedClasses, val.totalClasses === 0 ? 2 : val.totalClasses - val.attendedClasses],
				backgroundColor: [`${colors[(val.id - 1) % 14]}`, grey],
				borderRadius: 100,
				borderWidth: 0,
				spacing: 2,
			},
		],
	};

	const options = {
		cutout: 38,
	};

	function handleHybridPresent(e) {
		e.stopPropagation();
		handlePresent(e);
		setPercentage(Number(((val.attendedClasses / val.totalClasses) * 100).toFixed(0)));
	}

	function handleHybridAbsent(e) {
		e.stopPropagation();
		handleAbsent(e);
		setPercentage(Number(((val.attendedClasses / val.totalClasses) * 100).toFixed(0)));
	}

	useEffect(() => {
		function findPercentage() {
			return Number(((val.attendedClasses / val.totalClasses) * 100).toFixed(0));
		}

		if (val.totalClasses !== 0 && percentage < findPercentage()) {
			const val = findPercentage();
			const time = Number((1000 / val).toFixed(5));
			const interval = setTimeout(() => {
				setPercentage((currState) => currState + 1);
			}, time);
			return () => {
				clearInterval(interval);
			};
		}
	}, [percentage, val.attendedClasses, val.totalClasses]);

	useEffect(() => {
		if (val.totalClasses !== 0) {
			setPercentage(Number(((val.attendedClasses / val.totalClasses) * 100).toFixed(0)));
		}
	}, [val.attendedClasses, val.totalClasses]);

	return (
		<>
			<div
				className='subject-card'
				onClick={() => navigate(`/subject/${val.id}`)}
				style={{
					backgroundColor: `${colors[(val.id - 1) % 14]}`,
				}}
			>
				<div className='subject-info-wrappper'>
					<p
						className='subject'
						style={{
							color: `${colors[(val.id - 1) % 14]}`,
						}}
					>
						{val.subject}
					</p>
					<p className='attendence'>
						attendence:{' '}
						<span>
							{val.attendedClasses}/{val.totalClasses}
						</span>
					</p>
					<div className='subject-button-wrapper'>
						<button type='button' className='present' data-id={val.id} onClick={handleHybridPresent}>
							Present
						</button>
						<button type='button' className='absent' data-id={val.id} onClick={handleHybridAbsent}>
							Absent
						</button>
					</div>
				</div>
				<div className='subject-chart-wrapper' data-percentage={`${percentage}%`}>
					<DoughnutChart data={data} options={options} />
				</div>
			</div>
		</>
	);
};

export default SubjectCard;
