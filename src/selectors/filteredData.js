export const getFilteredData = (planetList, { text, sortBy }) => {
	return planetList.filter((data) => {
        const updatedData = data.name.toLowerCase().includes(text.toLowerCase())
         return updatedData
        }).sort((a,b) => {
        	if(a.population == 'unknown' || b.population == 'unknown'){
        		a.population = 0;
        		b.population = 0;
        	}
           	return b.population - a.population 
        });
      
}	