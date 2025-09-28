## Frontend app

Services used and instructions to setup

- NextJs - ReactJs framework - on MVVM and strict types
- Auth0 - Identity management isolation
- Use jotai Atom for local storage
- LocalStack can be used for local AWS Services
- Pre-commit hooks added for high quality code
  - `fix: feat: build:, chore:, ci:, docs:, style:, refactor:, perf:, test:` are supported
- Serverless motive

  - Netlify - `https://labour-connect-lk.netlify.app/`

- Shortcut for managing project

  - https://app.shortcut.com/labour-connect/iterations

- Run `types:gen` in API generate `openapi.json`
- Cursor rules for this project - ` .cursor/rules/rule.mdc`

## Instruction for commits using `Semantic commits`

- `feat: allow provided config object to extend other configs` -- Typical feature development
- `feat!: breaking change`
- `feat(api)!: scoped commit message. api app in the this mono repo has a breaking change`
- `fix: fixing a bug`
- It will run `lint-staged`- only staged files will be checked
- Or do this
- Commit using semantic commits

````
✗ npm run commit
? Select the type of change that you're committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter to skip) api
? Write a short, imperative tense description of the change (max 89 chars):
(14) initial commit
? Provide a longer description of the change: (press enter to skip)

? Are there any breaking changes? No
? Does this change affect any open issues? (y/N) n```

````
