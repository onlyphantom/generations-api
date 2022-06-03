'use strict';

/**
 *  collection controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::collection.collection', ({strapi}) => ({
    async find() {
        const collections = await strapi.entityService.findMany('api::collection.collection', {
            populate: {
                experts: true,
                bookmarks: true
            },
        });
        let collections_full = [];
        collections.map(collection => {
            let {experts, bookmarks, ...col} = collection;
            const num_bookmarks = bookmarks.length;
            const num_articles = bookmarks.filter(bookmark => bookmark.medium == "article").length;
            const num_videos = bookmarks.filter(bookmark => bookmark.medium == "video").length;
            const num_courses = bookmarks.filter(bookmark => bookmark.medium == "course").length;
            const num_challenges = bookmarks.filter(bookmark => bookmark.medium == "challenge").length;
            collection = {
                ...col, 
                num_bookmarks: num_bookmarks,
                num_articles: num_articles, 
                num_videos: num_videos, 
                num_courses: num_courses, 
                num_challenges: num_challenges,
                experts
            };
            collections_full.push(collection);
        })

        return this.transformResponse(collections_full);
    },

    async getBookmarks(ctx) {
         const {id} = ctx.params;
         const collection = await strapi.service('api::collection.collection').findOne(id, {
             populate: {bookmarks: true}
         });
         return collection ? this.transformResponse(collection.bookmarks) : this.transformResponse(null);
    },

    async getExperts(ctx) {
        const {id} = ctx.params;
        const collection = await strapi.service('api::collection.collection').findOne(id, {
            populate: {experts: true}
        });
        return collection ? this.transformResponse(collection.experts) : this.transformResponse(null);
   }
}));
