# Lab 02 – Task Decomposition

## Exercise 1: Building Mini-React VNode & Mounting Engine

**Estimated Duration:** 35 minutes

**Technology:** HTML5, Vanilla JavaScript (ES6 Modules), Browser DOM API

### 1. Objective

Implement a simplified React-like virtual node creation and DOM mounting engine from scratch.

The engine must support:

- Virtual node creation.
- Text node creation.
- Conversion from virtual nodes into real DOM elements.
- Semantic HTML elements.
- Safe text rendering.
- Basic event handling.
- Verification through browser DevTools.

### 2. Functional Requirements

**FR-01: Virtual Node Factory**

Implement `createElement(type, props, ...children)`.

The function must produce a JavaScript object representing an element and its children.

**FR-02: Text Node Factory**

Implement `createTextElement(text)`.

The function must create a virtual representation of a text node.

**FR-03: DOM Mounting Engine**

Implement `renderToDOM(vnode)`.

The function must recursively convert a virtual node tree into real DOM nodes.

**FR-04: Semantic HTML**

The rendered structure must preserve semantic tags such as `main`, `header`, `section`, `h1`, `p`, and `button`.

Avoid unnecessary wrapper elements.

**FR-05: Event Handling**

Support event properties such as `onClick` by attaching DOM event listeners.

**FR-06: Security**

User-provided text must be rendered safely.

Do not use `innerHTML`, `outerHTML`, `insertAdjacentHTML`, or `eval`.

Use `document.createElement()`, `document.createTextNode()`, and safe DOM APIs.

**FR-07: Type Guards**

Validate virtual node types and handle unsupported input explicitly.

### 3. Task Breakdown

| Task ID | Task | Expected Output | Status |
|---|---|---|---|
| T01 | Create project structure | Lab2 and exercise-1 directories | Not Started |
| T02 | Implement `createTextElement()` | Text VNode factory | Not Started |
| T03 | Implement `createElement()` | Element VNode factory | Not Started |
| T04 | Implement type guards | Input validation | Not Started |
| T05 | Implement `renderToDOM()` | DOM mounting engine | Not Started |
| T06 | Implement event handling | Functional button click | Not Started |
| T07 | Create test runner | Browser verification | Not Started |
| T08 | Verify XSS resistance | Malicious text rendered safely | Not Started |
| T09 | Perform DevTools audit | DOM matches VNode tree | Not Started |
| T10 | Review Git history | Atomic commits | Not Started |

### 4. Implementation Plan

**Phase 1 – Virtual Node Factory**

- Implement `createTextElement()`.
- Implement `createElement()`.
- Handle nested children.
- Verify the VNode structure.

Commit:

`feat(core): implement createElement factory`

**Phase 2 – DOM Mounting Engine**

- Implement `renderToDOM()`.
- Create semantic DOM elements.
- Render text nodes.
- Attach event listeners.
- Mount the application to `#app`.

Commit:

`feat(core): implement renderToDOM`

**Phase 3 – Verification**

- Run the provided test scenario.
- Verify semantic HTML output.
- Check text rendering against XSS payloads.
- Inspect the DOM using Chrome DevTools.
- Record actual test results.

### 5. Security Checklist

- [ ] No unsafe HTML string injection
- [ ] No use of `innerHTML`
- [ ] Text nodes rendered using `document.createTextNode()`
- [ ] Event handlers attached using `addEventListener()`
- [ ] Unsupported node types handled explicitly
- [ ] XSS test payload displayed as plain text

### 6. Acceptance Criteria

Exercise 1 is complete when:

1. The VNode factory produces the expected tree.
2. The mounting engine renders the VNode tree successfully.
3. Semantic tags are preserved.
4. The button click event works.
5. The malicious HTML payload is displayed as text.
6. Browser DevTools shows the expected DOM structure.
7. The required two implementation commits exist.

### 7. Constraints

- Vanilla JavaScript only.
- No React, Vue, Angular, or other frameworks.
- No unnecessary wrapper elements.
- No unsafe HTML injection APIs.
- Maintain readable, modular code.
- Follow the Git commit structure specified in the exercise.

## Task Completion

- [x] T01 Create project structure
- [x] T02 Implement createTextElement()
- [x] T03 Implement createElement()
- [x] T04 Implement type guards
- [x] T05 Implement renderToDOM()
- [x] T06 Implement event handling
- [x] T07 Create test runner
- [x] T08 Verify XSS resistance
- [x] T09 DevTools audit
- [ ] T10 Review Git history