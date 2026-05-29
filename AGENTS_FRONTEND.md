# AI Frontend Developer Guide

Use this file as the default set of project conventions for future AI contributors working on the frontend.
These rules apply only to frontend code and frontend-related structure in this repository.

## Folder conventions

- Create a dedicated folder for every new page under `src/[page]`.
- Keep page-specific components inside `src/[page]/components`.
- Apply the same page-level structure for hooks, services, stores, and any other page-scoped code:
  - `src/[page]/hooks`
  - `src/[page]/services`
  - `src/[page]/stores`
- Put shared or generic code in underscore-prefixed folders at the `src` root.
- Generic folder names must always start with `_`, for example:
  - `src/_components`
  - `src/_hooks`
  - `src/_services`
  - `src/_stores`
- Follow the same underscore rule for any additional shared folders such as `src/_utils`, `src/_types`, or `src/_constants`.
- Default to page-local placement first. Promote code into a shared `_...` folder only when it is clearly generic or reused.

## Data flow rules

- Never make HTTP calls directly inside React components.
- Every HTTP call must be implemented in a service.
- Use stores to keep fetched or shared data.
- Components should consume stores and trigger actions instead of owning API logic.
- Keep services typed and scoped to the feature, page, or domain they support.

## Recommended libraries

- Prefer Zustand when a store is needed.
- Prefer react-i18next when internationalization is needed.
- Add any other library only when it solves a clear problem and fits the existing stack.

## Linting rules

- Always follow the repository ESLint rules when creating or editing code.
- Do not introduce formatting or syntax that conflicts with ESLint.
- Keep the current style enforced by ESLint, including required semicolons and trailing commas.
- Run the project lint command after meaningful code changes when possible.

## Suggested structure

```text
src/
  home/
    components/
    hooks/
    services/
    stores/
  _components/
  _hooks/
  _services/
  _stores/
```

## Working rules for future AI contributors

- Start new features inside the page folder by default.
- Move code to a shared `_...` folder only after it becomes reusable.
- Keep names explicit and domain-oriented.
- Do not bypass the service-plus-store flow, even for simple API requests.