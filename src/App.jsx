import CardResults from './components/card-results/CardResults';
import CardSummary from './components/card-summary/CardSummary';
import Cards from './components/cards/Cards';

const App = () => {
	return (
		<>
			<h1>Curso de React</h1>
			<Cards>
				<CardResults />
				<CardSummary />
			</Cards>
		</>
	);
};

export default App;
