---
paths:
  - 'src/**/*.mdx'
  - 'src/**/*.stories.tsx'
  - '.storybook/**'
---

# Storybook Documentation

The docs exist to help designers and engineers choose and use what Saguaro
provides. The previews already show *what* the values are, so the written pages
explain *when* and *why* to use them. Every page has to earn its place: write
less, describe how things work today, and leave out anything a reader doesn't
need in order to make the right choice.

## Write for designers as much as engineers

- Name tokens as the previews show them: `text-accent-contrast`, `spacer-md-2`,
  `border-radius-lg`, `blue-70`, `neutral-transparent-1`. Never write the code
  spelling (`textAccentContrast`, `palettes.blue[70]`).
- Write groups and ranges out in full: `accent-*`, `spacer-sm-1`–`spacer-sm-3`.
- Leave out code-level details: hooks, theme keys, provider components, file
  paths, string-versus-integer keys, library names, error messages. Describe a
  code snippet in words ("`spacer-sm-2` top and bottom, `spacer-md-2` sides").

## Page structure

Each level of the sidebar has a job:

| Page | What it is | How it's built |
|---|---|---|
| **Overview** | Introduction to a section: what lives there and how to choose within it. | Unattached MDX, `<Meta title="<Section>/Overview" />`. Sorts first in its section. |
| **Guide** | Usage guidance for one category: which token to use for what, and when. | `Guide.mdx` next to the story, attached with `<Meta of={Stories} />`. |
| **Preview** | The live preview of the tokens. | The story. Name it `Preview`, not a repeat of its folder name. |

**A Guide must say how and when to use the tokens.** If there is nothing to say,
the category has no Guide. Never publish a Guide that only repeats the preview,
and don't embed the preview in it.

## Writing guidance

- When the code and the intent disagree, add a short **Known gaps** section
  instead of bending the guidance. The guidance states the intent. An exception
  changes the guidance only after it has been discussed and agreed on in the
  `#design-system` Slack channel.
- Give the reason behind a preference. For example: a brand palette is preferred
  over a custom hex because our palettes guarantee contrast; hex exists because
  some customers want full control of their accent color.
- Keep pages short. Leave out implementation notes ("defined in…", "change it
  there and…") and contributor how-tos.

## Mechanics

- Import doc blocks from `@storybook/addon-docs/blocks`.
- Sidebar order is set by `storySort.order` in `.storybook/preview.tsx`. It only
  works when passed through the default export's `parameters`; otherwise
  Storybook ignores it without warning.
- Before you open a PR: `yarn build-storybook` exits 0, every `?path=/docs/` link
  matches an id in `storybook-static/index.json`, and tables render as tables.
