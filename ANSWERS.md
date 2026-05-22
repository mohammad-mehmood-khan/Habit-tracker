# Running the Project

## Local Development

1. Clone the repository
2. Open the project folder in VS Code
3. Install the VS Code "Live Server" extension
4. Right click `index.html`
5. Click "Open with Live Server"

No additional packages or build tools are required because the project uses plain HTML, CSS, and Vanilla JavaScript.

## Deployment

The project is deployed on Netlify.

Live URL: https://habitrackerps.netlify.app/


# Stack & Design Choices

I chose HTML, CSS, and Vanilla JavaScript because I wanted to strengthen my frontend fundamentals before moving to frameworks like React. Since this assessment had a short deadline and I am still learning frontend development, using Vanilla JS helped me better understand DOM manipulation, rendering, state management, and localStorage instead of relying on framework abstractions.

One important interaction decision was using a weekly table layout instead of a simple vertical list. Habit tracking is easier to scan visually when users can see multiple days side by side. This also made it possible to add week navigation and highlight the current day clearly.

Another design decision was implementing responsive horizontal scrolling for smaller screens instead of shrinking all columns to fit. On mobile devices, reducing the table width too much made the UI difficult to read and interact with. Allowing horizontal scrolling preserved readability and improved usability on 360px-wide screens.


# Responsive & Accessibility

On mobile devices around 360px width, the layout becomes more compact with smaller spacing and horizontally scrollable tables so the habit grid remains readable. Buttons and controls are stacked more cleanly to avoid layout breaking on narrow screens.

On larger laptop screens around 1440px width, the table uses the available width more effectively with better spacing and clearer visual hierarchy.

One accessibility consideration I handled was maintaining readable contrast between the text, table cells, and background colors. I also tried to keep buttons and interactive elements large enough to use comfortably on smaller touch devices.

Another accessibility-related improvement was making the UI responsive so content remains usable on both desktop and mobile devices.



# AI Usage

I used ChatGPT and GitHub Copilot frequently during development because I am still a beginner in frontend JavaScript development.

I mainly used AI for:
- understanding DOM manipulation
- improving JavaScript logic
- debugging rendering issues
- implementing localStorage persistence
- improving responsive CSS
- understanding streak calculation logic
- generating and improving UI styling ideas
- making the layout more mobile-friendly

One specific change I made manually was after GitHub Copilot suggested CSS changes while improving the UI styling. Those changes accidentally removed the visibility of some table borders and layout boundaries, which made the tracker harder to read. I manually adjusted the table border, contrast, and spacing styles to restore readability and maintain the structure of the tracker.

I also used AI explanations as learning material instead of only copying code directly. In several cases, I rewrote or modified the generated code after understanding how it worked.

One accessibility area I did not fully implement was complete keyboard navigation and screen reader optimization. Since I was focused mainly on learning frontend fundamentals and completing the core habit tracking functionality within the deadline, I prioritized responsive layout and usability first. With more time, I would improve focus states, add better semantic labels, and test the app more thoroughly with keyboard-only navigation and screen readers.


One part of the project that still feels unpolished is the overall UI refinement and code organization. While the application is functional and responsive, some parts of the styling and rendering logic became harder to manage as features like week navigation, streak tracking, and responsive layouts were added.

With another day, I would refactor parts of the JavaScript into smaller reusable functions, improve the visual consistency of the UI, and add smoother interactions such as better hover states, animations, and clearer mobile controls.