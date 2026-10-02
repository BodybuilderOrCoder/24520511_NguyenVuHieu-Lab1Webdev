# Task Decomposition

## Project
Lab 1 - Modern Web Development & AI-Assisted Engineering

## Technology Constraints
- Semantic HTML5
- Modern CSS
- Vanilla JavaScript ES6+
- No jQuery
- No Bootstrap
- No Tailwind CSS
- No external CDN
- Mobile-first design
- Minimum supported viewport: 375px

## Tasks

### T-01 Semantic HTML
- Build the semantic landmark structure.
- Use header, nav, main, section, and footer appropriately.
- Include an accessible skip link.
- Avoid unnecessary div elements.

### T-02 CSS Foundation
- Implement CSS custom properties.
- Implement box-sizing reset.
- Establish typography and spacing tokens.

### T-03 Responsive Layout
- Build responsive layouts using CSS Grid and Flexbox.
- Ensure the page works at 375px without horizontal scrolling.

### T-04 JavaScript
- Implement JavaScript functionality using Vanilla JS and ES6+.
- Use querySelector/querySelectorAll and classList where appropriate.

### T-05 Accessibility and Quality
- Verify keyboard navigation.
- Verify semantic landmarks.
- Check responsive behavior.
- Check console errors.
- Check for XSS risks and unsafe innerHTML usage.


## T-01 Semantic HTML Contract

### Landmark hierarchy

The page must contain:

- Header
- Navigation
- Main
- Section
- Footer

### Accessibility requirements

- Include a skip link pointing to #main.
- Use exactly one h1.
- Do not skip heading levels.
- Use semantic elements instead of unnecessary div elements.
- All form inputs must have visible labels.

### Acceptance Criteria

- Semantic landmark structure is present.
- Skip link works.
- Exactly one h1 exists.
- No unnecessary div elements are used.
- Chrome DevTools Accessibility panel shows the expected landmark tree.

## Exercise 3 - Resilient Component

### State Machine

- Loading: show loading skeleton while data is being fetched.
- Live Data: show the fetched data when the request succeeds.
- Empty: show an empty state when the request succeeds but returns no data.
- Error: show an error message and Retry button when the request fails.
- Retry: allow the user to retry the failed request.

### Acceptance Criteria

- The component has explicit loading, live, empty, and error states.
- The Retry button triggers the data request again.
- The UI must not remain stuck in the loading state.
- No unescaped innerHTML is used.
- No console errors.