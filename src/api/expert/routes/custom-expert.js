module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/experts/:id/collections',
            handler: 'expert.getCollections'
        }
    ]
}