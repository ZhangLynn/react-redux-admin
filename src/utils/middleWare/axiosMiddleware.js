
import axios from 'axios';


const axiosMiddleware = store =>
    next => action => {
        if (!action.hasOwnProperty('api') || !action.hasOwnProperty('types')) {
            return next(action);
        }
        const {
            types,
            api,
            params,
            handleResult,
            handleError,
        } = action;
        const data = params ? params : null;
        const [START, SUCCESS, FAILED] = types;
        const options = {
            url: api.url,
            method: api.method ? api.method : 'get',
            headers: {},
        };
        if (options.method !== 'get') {
            options.headers['Accept'] = 'application/json';
            options.headers['Content-Type'] = 'application/json;charset=UTF-8';
            options.data = data;
        }
        if (options.method === 'get') {
            options.params = data;
        }
        next({
            type: START,
            loading: true,
            ...action
        });
        return axios(options).then((res) => {
            return next({
                type: SUCCESS,
                loading: false,
                result: handleResult(res.data)
            })
        })
        .catch((error) => {
            return next({
                type: FAILED,
                loading: false,
                error: handleError(error)
            })
        })
    }

export default axiosMiddleware;

