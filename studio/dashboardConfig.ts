export default {
  widgets: [
    {
      name: "netlify",
      options: {
        title: "My Netlify deploys",
        sites: [
          {
            buildHookId: "<#<deployments.studio.providerInfo.buildHookId>#>",
            title: "Sanity Studio",
            name: "<#<deployments.studio.providerInfo.siteName>#>",
            apiId: "<#<deployments.studio.providerInfo.siteId>#>",
          },
          {
            buildHookId: "<#<deployments.web.providerInfo.buildHookId>#>",
            title: "Capri Website",
            name: "<#<deployments.web.providerInfo.siteName>#>",
            apiId: "<#<deployments.web.providerInfo.siteId>#>",
          },
        ],
      },
    },
  ],
};
