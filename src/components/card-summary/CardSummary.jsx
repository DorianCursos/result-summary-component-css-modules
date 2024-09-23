import { SUMMARY_INFO } from '../../constants/summary-info';
import Button from '../button/Button';
import CardSkill from '../card-skill/CardSkill';
import styles from './card-summary.module.css';

const CardSummary = () => {
	const { card, title } = styles;

	return (
		<div className={card}>
			<h2 className={title}>Summary</h2>
			{SUMMARY_INFO.map(card => (
				<CardSkill key={card.id} {...card} />
			))}
			<Button>Continue</Button>
		</div>
	);
};

export default CardSummary;
