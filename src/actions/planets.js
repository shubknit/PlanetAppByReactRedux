// action creators 
import uuid from 'uuid';

export const setPlanets = (planets) => ({
    type: 'SET_PLANETS',
    planets
})

export const startSetPlanets = (data) => {
    const planets = [];
    return (dispatch) => {
        data.forEach(item => {
            planets.push({
                id: uuid(),
                ...item
            })
        })
        dispatch(setPlanets(planets));
    }

}

export const getPlanetData = (props) => {
    return (dispatch) => {
      return fetch('https://swapi.co/api/planets/')
        .then(reponse => reponse.json())
        .then( data => { 
            dispatch(startSetPlanets(data.results))
            props.history.push('/user');
                })
        .catch( error => console.log('something went wrong', error))
    }
}