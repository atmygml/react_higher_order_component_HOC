const HOC = (Component) => {
	const sampleObjectProps = {
		name: 'React Name Test',
		others: 'React Trialler',
		company: 'WTH React 002',
	};

	return () => <Component value={sampleObjectProps} />;
};

export default HOC;
