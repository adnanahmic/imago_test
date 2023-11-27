import apiInstance from '..';

export const getMedia = (searchString = '') => apiInstance.get(`/search?query=${searchString}`);

export const getMediaDetails = (mediaId) => apiInstance.get(`/media/${mediaId}`);
