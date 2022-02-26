const Categories = ({ categories, filterItems, activeCategory }) => {
	return (
		<div className='btn-container'>
			{categories.map((category, index) => {
				return (
					<button key={index} type='button' className={category === activeCategory ? 'filter-btn active' :'filter-btn'} onClick={() => filterItems(category)}>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
