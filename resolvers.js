const photos = [
    {
        id: '1234',
        name: 'photo1',
        category: 1,
        price: 70,
        tags: ['red', 'dress'],
        urls: []
    },
    {
        id: '5678',
        name: 'photo2',
        category: 2,
        price: 90,
        tags: ['white', 'dress'],
        urls: []
    }

];

export default {
    Query: {
        photos: () => photos
    }
};
