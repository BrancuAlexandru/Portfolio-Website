const projectsData = [
  {
    photos: {
      pages: [
        {
          imageSrc: './',
          title: '',
          body: '',
          madeIn: ''
        }
      ]
    },
    technology: {
      body: '',
      skills: []
    },
    caseStudy: {
      pages: [
        {
          challenge: '',
          solution: ''
        }
      ]
    }
  },
  {
    photos: {
      pages: [
        {
          imageSrc: './images/landingPage.webp',
          title: 'Landing Page',
          body: "This is the landing page, built after the design. It deviates from the design in a lot of ways, but the design was meant to be flexible and improved upon.",
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
          solution: "Passing a function and the state it changes into the child's props",
          learned: "How to make a parent and child components interact, I also now have a better understanding of React's data flow"
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
          imageSrc: './',
          title: '',
          body: '',
          madeIn: ''
        }
      ]
    },
    technology: {
      body: '',
      skills: []
    },
    caseStudy: {
      pages: [
        {
          challenge: '',
          solution: ''
        }
      ]
    }
  }
];

export default projectsData;