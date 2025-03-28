# Mightyfin - FRONTEND WEBSITE

## Project Structure

> Each page should go under pages/ directory
> Here is the project stucture

```bash
|_ components/
  |_ index.ts # this will be the file that will export all the components, but each component should have a folder like
  |_ component-name
    |_ index.ts # or js
    |_ types.ts # if necessary
|_ helpers
  |_ index.ts # this will be the file that will export all the helpers functions and classes, but each component should have a folder or file
  |_ apiService.ts # for example
|_ constants
  |_ index.ts # to export all the constants
```

## Getting started

Depending on the task you got assigned, you can test on a dedicated environment

- Install all dependencies

  `$ yarn`

- Start the whole app in dev mode using:

  `$ yarn dev`

## Contribution guideline

- After all the changes, make sure there is no linting error
- Make sure to run builds for your working project, eg, if I am working on auth, I would run: `$ yarn build`
- Make sure husky hooks executes successfully (if not the first time you may consider running `$ npx husky`)
- Make a meaninfull PR describing the work you did, with a short loom record

### Commits formats

Since we have multiple apps in one, making meaningful commits is crutial, otherwise PRs won't be accepted, make sure the following appears in the commit:

- The name of the folder or page changes belong to
- A short desctiption of the changes

Here is an example of a valid / invalid commit:

```bash
# BAD COMMIT MESSAGE PLEASE AVOID AS MUCH AS POSSIBLE
$ git commit -m 'update the loader on the page'

# A MEANINGFUL COMMIT MESSAGE
$ git commit -m 'feat(landing-page): update the loader component accross the landing page'

```

### Pull Request Formats

A valid PR should contain:

- The name of the platform the PR belongs to
- A tag to the issue you are resolving
- A loom/zoom recording or screenshots of visible changes
- A short description that summarizes all the commits added
