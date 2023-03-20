const projectsData = [
  {
    photos: {
      pages: [
        {
          imageSrc: './images/authentication.webp',
          title: 'Log In',
          body: 'This is where the user can create a new account.',
          madeIn: ''
        }
      ]
    },
    technology: {
      body: 'This is a simple authentication app I used to learn how to work with a database, a serverside language and a framework for it, and how routing works.',
      skills: [
        'AJAX',
        'JavaScript',
        'PHP',
        'Code Igniter4',
        'MySql',
        'Apache',
        'XAMPP',
        'Routing',
        'CSS'
      ]
    },
    caseStudy: {
      pages: [
        {
          challenge: 'Converting a PHP application to use AJAX',
          solution: 'Inserting JavaScript code using PHP to implement AJAX functionality',
          learned: 'I deepened my understanding of both PHP and AJAX'
        },
        {
          challenge: 'Using Code Igniter\' htaccess file',
          solution: 'Found what parts of which htaccess files are relevant',
          learned: 'XAMPP requires a lot of initial configuration to work correctly'
        },
        {
          challenge: '\'Page Not Found\' errors',
          solution: 'Creating routes in code igniter\'s configuration files that point to PHP functions',
          learned: 'How to work with routes'
        },
      ]
    }
  },
  {
    photos: {
      pages: [
        {
          imageSrc: './images/landingPage.webp',
          title: 'Landing Page',
          body: 'This is the landing page, built after the design. It deviates from the design in a lot of ways, but the design was meant to be flexible and improved upon.',
          madeIn: 'Made in Photoshop.'
        },
        {
          imageSrc: './images/initialDesign.webp',
          title: 'Initial Design',
          body: 'This is the initial design I drew for this portfolio website. It had very few iterations as I mostly knew what I wanted from the beginning.',
          madeIn: 'Made in Photoshop.'
        },
        {
          imageSrc: './images/finalDesign.webp',
          title: 'Final Design',
          body: 'This is the final design I arrived at after many iterations. The hardest part was deciding the color theme.',
          madeIn: 'Made in Photoshop.'
        }
      ]
    },
    technology: {
      body: 'I designed this website in Photoshop, made all of it through Jsx in React functional components and used CSS to style it. I used Firebase for hosting and the contact form, Git and Github for version control and I configured Webpack for bundling.',
      skills: [
        'React',
        'JavaScript',
        'HTML',
        'SCSS',
        'Firebase',
        'Git',
        'npm',
        'Webpack',
        'Photoshop'
      ]
    },
    caseStudy: {
      pages: [
        {
          challenge: 'Changing child component state from parent',
          solution: 'Passing a function and the state it changes into the child\'s props',
          learned: 'How to make a parent and child components interact, I also now have a better understanding of React\'s data flow'
        },
        {
          challenge: 'Working with .svg files and inline svg',
          solution: 'Practicing with many SVGs, using viewport and viewbox',
          learned: 'Inline svg is better than svg in file form because it can easily be edited'
        }
      ]
    }
  },
  {
    photos: {
      pages: [
        {
          imageSrc: './images/gamefinderScreenshot.webp',
          title: 'Gamefinder Extension',
          body: 'This is an extension I made as a free commission for a youtuber named Bluedrake42. It shows you what game is featured in a video without having to click on it.',
          madeIn: ''
        }
      ]
    },
    technology: {
      body: 'I used google\'s content script system to interact with YouTube pages with JavaScript, Git and Github for version control.',
      skills: [
        'JavaScript',
        'HTML',
        'Git',
        'Google Extension API'
      ]
    },
    caseStudy: {
      pages: [
        {
          challenge: 'Interacting with YouTube\'s page population system',
          solution: 'Using a content script to dynamically inject various scripts into the page depending on the URL',
          learned: 'The difference between background scripts and content scripts, and how Google Extension API interacts with webpages'
        },
        {
          challenge: 'Loading and \"unloading\" scripts',
          solution: 'Refreshing the user\'s page upon detecting a new URL',
          learned: 'Unloading scripts is extremely difficult if not impossible in some contexts'
        }
      ]
    }
  }
];

export default projectsData;