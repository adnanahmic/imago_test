import apiInstance from '..';

export const getMedia = (searchString = '') => apiInstance.get(`/search?query=${searchString}`);
