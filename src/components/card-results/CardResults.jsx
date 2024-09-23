import styles from './card-results.module.css';

const CardResults = () => {
	const { card, title, circle, points, total, resultTitle, resultText } =
		styles;

	return (
		<div className={card}>
			<h2 className={title}>Your Result</h2>
			<div className={circle}>
				<span className={points}>76</span>
				<span className={total}>of 100</span>
			</div>

			<span className={resultTitle}>Great</span>
			<p className={resultText}>
				Your scored higher than 65% of the people who have taken these tests.
			</p>
		</div>
	);
};

export default CardResults;
