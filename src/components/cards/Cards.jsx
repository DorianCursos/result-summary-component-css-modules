import styles from './cards.module.css';

const Cards = ({ children }) => {
	return <div className={styles.cards}>{children}</div>;
};

export default Cards;
