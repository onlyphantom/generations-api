'use strict';

/**
 *  expert controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::expert.expert', ({strapi}) => ({
    async getCollections(ctx) {
         const {id} = ctx.params;
         const expert = await strapi.service('api::expert.expert').findOne(id, {
             populate: {collections: true}
         });
         return expert ? this.transformResponse(expert.collections) : [];
    }
}));
