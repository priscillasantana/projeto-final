import { apiLocal } from './api';

const beerService = {
    getBeer: () => apiLocal.get('/beers', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    newBeer: (beer: any) => apiLocal.post('/beers', beer, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    deleteBeer: (id: any) => apiLocal.delete(`/beers/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }),

};

export default beerService;