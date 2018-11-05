// Action creators
import { getPlanetData } from './planets'

const StartUserLogin = () => ({
    type: 'START_USER_LOGIN'

});

const EndUserLogin = () => ({
    type: 'END_USER_LOGIN'
});

const AddError = () => ({
    type: 'ADD_ERROR'
});

const FetchingData= () => ({
    type: 'GET_TODOS_REQUEST'
});

const EndFetchingData= () => ({
    type: 'GET_TODOS_SUCCESS'
});

const WrongUserAuthentication= () => ({
    type: 'WRONG_USER_AUTH'
});


export const startUserLogin = (userData, props) => {
    return (dispatch) => {
    	dispatch(fetchingData())
        return fetch('https://swapi.co/api/people/')
            .then(response => response.json())
            .then(data => {
            	dispatch(endFetchingData());
                let userLoginData = data.results.filter(item => {
                    if (userData.user === item.name && userData.password === item.birth_year) {
                        dispatch(StartUserLogin());
                        dispatch(getPlanetData(props));
                        return true;
                    }
                });
                (!userLoginData.length) ? dispatch(wrongUserAuthentication()) : '';
            }, error => console.log('something went wrong', error))
    }

}


export const setLoadingMsg = () => {
    return (dispatch) => {
        dispatch(AddError())
    }
}

export const endUserLogin = () => {
    return (dispatch) => {
        dispatch(EndUserLogin())
    }
}

export const fetchingData = () => {
    return (dispatch) => {
        dispatch(FetchingData())
    }
}

export const endFetchingData = () => {
    return (dispatch) => {
        dispatch(EndFetchingData())
    }
}

export const wrongUserAuthentication = () => {
    return (dispatch) => {
        dispatch(WrongUserAuthentication())
    }
}