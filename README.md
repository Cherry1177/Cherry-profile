# CHANG JUI FANG - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, skills, education, and contact information.

## Features

- **Fully Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Contact Form**: Integrated contact form with email functionality
- **Animated Sections**: Fade-in animations as you scroll
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Scroll to Top**: Button appears when scrolling down

## Sections

1. **Hero Section**: Eye-catching introduction with profile image
2. **Profile/About**: Professional summary
3. **Work Experience**: Detailed work history with technology stack
4. **Skills**: Visual skill cards with icons
5. **Education**: Timeline of educational background
6. **Certificates**: Showcase of certifications
7. **Contact**: Contact information and form

## Setup Instructions

1. **Replace Profile Image**:
   - Add your profile photo to the project folder
   - Update the `src` attribute in `index.html` (line with `profile-image` class)
   - Or use an online image URL

2. **Update GitHub Link**:
   - Replace `https://github.com` with your actual GitHub profile URL in:
     - Contact section
     - Footer social links

3. **Customize Colors** (Optional):
   - Edit CSS variables in `styles.css`:
     ```css
     :root {
         --primary-blue: #1e3a5f;
         --light-blue: #4a90e2;
         --dark-blue: #0f1f3a;
     }
     ```

4. **Deploy**:
   - Upload all files to your web hosting service
   - Or use GitHub Pages, Netlify, Vercel, etc.

## File Structure

```
Profile/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive features and animations
└── README.md      # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons (via CDN)

## Customization Tips

- **Add More Sections**: Copy an existing section structure and modify the content
- **Change Animations**: Modify the `observerOptions` in `script.js`
- **Add Projects Portfolio**: Create a new section with project cards
- **Add Blog Section**: Include links to articles or blog posts
- **Social Media Links**: Add more social icons in the footer

## Contact Form

The contact form currently uses a `mailto:` link to open the user's email client. For production use, consider:
- Integrating with a backend service (e.g., Formspree, EmailJS)
- Adding server-side form handling
- Implementing reCAPTCHA for spam protection

## License

This portfolio template is free to use and modify for personal and commercial projects.

---

**Note**: Remember to replace placeholder images and update all links with your actual information before deploying!

