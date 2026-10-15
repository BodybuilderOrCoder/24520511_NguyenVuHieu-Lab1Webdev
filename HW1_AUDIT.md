# HW1 – Production Portfolio Audit

## M1 – Accessibility Audit

### Objective
Evaluate the accessibility of the portfolio website using Lighthouse and manual browser testing.

### Test Environment
- Browser: Google Chrome
- Development server: VS Code Live Server
- Mobile viewport: 375px
- Accessibility standard: WCAG 2.2 AA

### Results
- Lighthouse Accessibility Score: 100/100.
- Semantic landmarks: Header, Navigation, Main, and Footer are present.
- Heading hierarchy: One H1 followed by H2 section headings.
- Responsive layout: No obvious horizontal overflow at 375px.
- Keyboard navigation: Manually tested.
- Automated accessibility audit: No failures reported.

### Limitations
A Lighthouse score of 100 does not guarantee full WCAG 2.2 AA compliance. Additional manual checks may be necessary.

### Conclusion
The website passed the initial accessibility audit. Further keyboard and security testing will be conducted in subsequent milestones.

## M2 – Keyboard Navigation & Focus Trap Audit

### Test Results
- Tab navigation follows a logical order.
- Shift+Tab supports reverse navigation.
- All interactive elements can be activated using the keyboard.
- Focus indicators are visible.
- Skip-to-content navigation works.
- No unintended keyboard focus traps were detected.
- No modal or dialog is present, so modal focus trapping is not applicable.

### Conclusion
The website passed the manual keyboard navigation audit.

