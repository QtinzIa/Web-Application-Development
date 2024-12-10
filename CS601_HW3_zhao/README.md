CS601 Module 3 Assignment: Portfolio

# Description
This project is a responsive portfolio webpage designed to showcase personal information, professional projects, and contact details. It incorporates advanced CSS techniques such as "Flexbox", "Grid", "pseudo-classes", "pseudo-elements", and "combinators". 

The portfolio is structured to adapt seamlessly to both desktop and mobile viewports, providing an excellent user experience across devices.

# Features
1. Web Page Structure
- Header: Includes the title ("Welcome to My Portfolio"), navigation links to     "About," "Projects," and "Contact."
- Main Section: Displays a grid of projects with descriptions and links to their repositories.
- Sidebar: Contains personal contact information and links to LinkedIn, GitHub, and Instagram. The sidebar is omitted on "About" and "Projects" pages for a cleaner layout.
- Footer: Includes copyright details and a decorative background image.

2. Responsive Design
- Fully responsive design using CSS media queries to adapt to various screen sizes.
- Grid layout adjusts dynamically to display projects in rows of three, two, or one based on the viewport width.

3. CSS Techniques
# Flexbox:
- Used in the header and footer for consistent alignment and spacing.
# Grid:
- Applied to the main section to organize projects into a multi-column layout.
# Pseudo-classes:
- ":hover": Adds interactivity to links and project cards.
- ":focus": Enhances accessibility for keyboard navigation.
- ":nth-child(n)": Styles specific elements dynamically.
# Pseudo-elements:
- "::before": Adds decorative emojis to projects, with a unique emoji for music-related content.
- "::after": Appends emojis to social media links.
# Combinators:
- Direct children <h3> elements inside .project are styled with custom text properties.
- Adjacent <p> are styled with custom text properties.
- Attribute selectors ([attribute], href*) are utilized to style elements based on relationships and attributes.



# File Structure
- index.html: The homepage displaying a welcome message, sidebar, and project grid.
- about.html: About page detailing the creator’s background and focus areas.
- project.html: Dedicated project page showcasing portfolio projects in a grid format.
- style.css: The main stylesheet defining the layout, design, and responsiveness of the portfolio.


