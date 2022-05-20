'use strict';

/**
 *  collection controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::collection.collection', ({strapi}) => ({
    async getBookmarks(ctx) {
         const {id} = ctx.params;
         const collection = await strapi.service('api::collection.collection').findOne(id, {
             populate: {bookmarks: true}
         });
         return collection ? this.transformResponse(collection.bookmarks) : [];
    },

    async getExperts(ctx) {
        const {id} = ctx.params;
        const collection = await strapi.service('api::collection.collection').findOne(id, {
            populate: {experts: true}
        });
        return collection ? this.transformResponse(collection.experts) : [];
   }
}));
