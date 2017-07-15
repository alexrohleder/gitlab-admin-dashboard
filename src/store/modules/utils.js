import _ from 'lodash';
import Axios from 'axios';

export function getParams(query) {
  return { params: Object.assign({ per_page: 100 }, query) };
}

export function fetch(url, params, type = _.isArray) {
  return new Promise((resolve, reject) => {
    Axios.get(url, params).then(({ data }) => {
      if (!type(data)) {
        throw Error;
      }

      resolve(data);
    }).catch(() => {
      if (process.env.NODE_ENV !== 'production') {
        /* eslint-disable no-console */
        console.error(`[store] falha ao buscar ${url}.`);
      }

      reject();
    });
  });
}
