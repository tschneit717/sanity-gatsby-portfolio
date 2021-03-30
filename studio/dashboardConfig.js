export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60633cc3079610007ba850d6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2juqp4pq',
                  apiId: 'ebf56d81-3bc5-435e-b950-0e5da389f6dd'
                },
                {
                  buildHookId: '60633cc338abea007e535d82',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-igxcuspt',
                  apiId: '98dfe8bf-6cf4-4c56-9165-1a1ce259ef68'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tschneit717/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-igxcuspt.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
