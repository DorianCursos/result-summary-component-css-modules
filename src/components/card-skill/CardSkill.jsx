import styles from './card-skill.module.css';

const CardSkill = ({ icon, title, score, color }) => {
	const { skill, iconTitleContainer, value, total } = styles;

	return (
		<div className={`${skill} ${styles['skill-' + color]}`}>
			<div className={iconTitleContainer}>
				<img src={icon} alt={'icon ' + title} />
				<span>{title}</span>
			</div>
			<div>
				<span className={value}>{score}</span>
				<span className={total}> / 100</span>
			</div>
		</div>
	);
};

export default CardSkill;
