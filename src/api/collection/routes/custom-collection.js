module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/collections/:id/bookmarks',
            handler: 'collection.getBookmarks'
        },
        {
            method: 'GET',
            path: '/collections/:id/experts',
            handler: 'collection.getExperts'
        }
    ]
}