module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://tmarafon.netlify.app/`,
    // Your Name
    name: 'Thiago Marafon',
    // Main Site Title
    title: `Thiago Marafon | Software Development Manager`,
    // Description that goes under your name in main bio
    description: `Software Development Manager`,
    // Optional: Twitter account handle
    author: `@thiagomarafon`,
    // Optional: Github account URL
    github: `https://github.com/tmarafon`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/thiagomarafon/`,
    // Content of the About Me section
    about: `Experienced AI startup founder/CTO with over 20 years of experience in the software industry. Proficient in Mobile, APIs, cloud technologies, and Generative AI. More than 13 years leading both large teams (100+) and small teams (2 engineers). Excels in dynamic, collaborative environments and takes pride in nurturing and developing team members to foster a culture of growth and success.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Youper',
        description:
          'Empathetic, safe, and clinically validated chatbot for mental healthcare',
        link: 'https://youper.ai',
      },
      {
        name: 'Prompt Engineering Multi-turn conversation simulation',
        description:
          'Proprietary platform for massive conversation simulation and prompt evaluation',
        link: 'https://www.youper.ai/safety',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        "name": "Youper Inc",
        "description": "CTO, January 2017 - Present",
        "link": "https://youper.ai"
      },
      {
          "name": "Softplan",
          "description": "Software Development Manager, June 2014 - April 2016",
          "link": "https://www.softplan.com.br"
      },
      {
          "name": "Softplan",
          "description": "Project Management Officer, October 2010 - December 201",
          "link": "https://www.softplan.com.br"
      },
      {
          "name": "Softplan",
          "description": "Full-Stack Developer, August 2005 - October 2010",
          "link": "https://www.softplan.com.br"
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), TypeScript, Python, Node.js, Express.js, Angular, NestJS',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL',
      },
      {
        name: 'Cloud (AWS)',
        description: 'SageMaker, ECS, Beanstalk, EC2, RDS, S3, Cloudfront'
      },
      {
        name: 'Other',
        description:
          'Chatbots, Gen AI, Docker, CI / CD, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return {
                  title: edge.node.frontmatter.title,
                  // Other fields you want to include
                };
              });
            },
            query: `
              {
                allMarkdownRemark {
                  edges {
                    node {
                      frontmatter {
                        title
                        # Other frontmatter fields
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your RSS Feed Title",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-9BV1L3WH4R`, 
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
