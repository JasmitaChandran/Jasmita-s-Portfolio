# Recruiter terminal

The terminal executes only the local command registry. It never executes a shell,
calls an API, or connects to a production system. Trace and services outputs are
explicitly labeled simulations/Easter eggs.

## Updating content

- `profile.mjs`: positioning, metrics, technology categories, project details and URLs.
- `commands.mjs`: commands, aliases, autocomplete and pure history helpers.
- `InteractiveTerminal.jsx`: input, bounded history, keyboard behavior and fast typing.
- `TerminalOutput.jsx`: small output components selected through a renderer map.
- `ArchitectureOutput.jsx`: progressive desktop ASCII and narrow-screen vertical flow.
- `ProjectOutput.jsx`: project drill-downs and external links.
- `terminal.css`: scoped styles, motion and responsive behavior.

The hero, Work page and Achievements page reuse the same metric values. The
existing public resume PDF is unchanged and already contains these metrics.

The live LogFlow URL and both Stock Metrics URLs were recovered from the existing
`public/resume.pdf` links. The Stock Metrics repository was also confirmed in the
owner's public GitHub repository listing. The resume's LogFlow GitHub annotation
incorrectly points to Stock Metrics: `projects.logflow.github` is intentionally
empty until the owner supplies the correct repository. A disabled, labeled button
is shown instead of a guessed link.

## Behavior and verification

- Default: help output only. Clear leaves an empty prompt.
- Up/Down recall commands and restore an unfinished draft.
- Tab completes a unique prefix; an already-complete command permits normal focus navigation.
- Escape cancels typing and clears input; a new quick command cancels any pending animation.
- At most 60 output entries and 100 input-history commands are retained.
- Reduced-motion mode runs quick commands immediately and disables output animation.
- Resume opens `/resume` in a new tab within the original input event; a visible
  link remains available if the browser blocks popups.

Run `npm test` for command/data/history tests and `npm run build` for the production build.
