export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "629d40932ef52521f75a2735",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-p79ib7ih",
                  apiId: "b5a857a4-02d2-4b4a-b2da-8834e8c2d01b",
                },
                {
                  buildHookId: "629d4093b6d18e1a56d0089d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-bfenc6hj",
                  apiId: "6bebf146-8acd-4392-be18-671fbd219f5f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/patrickklima/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-bfenc6hj.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
