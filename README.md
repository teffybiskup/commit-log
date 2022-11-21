
# Commit Log

Web application screen that provides a visual GUI for software engineers who want to review the commit log for a given Git repository.
The application does not connect to a real Git repository for now - it is faking the commit log messages, branch names, authors and other data.
Most of the application is static with the exception of the filter toolbar, which allow the user to filter the visible commit history items based on what the user enters into the input field.

## Features

The screen contains three sections:
- A left-hand sidebar which allows the user to see a list of local and remote Git branches, as well as the name & organization of the repository. This area is not interactive for now.
- A top-head toolbar which contains a filter input and button which would allow the user to filter the commit history by a text string. When the user types into the filter input, it immediately shows the filtered results and hides the graph header and content.
  - BONUS: When the user clicks on the Filter button, it modifies the URL query string.
- A commit table which shows a list of Git commits for that project with their description, commit hash number, author and date. A graph component shows a visual representation of the commits and branches in the project.
- When the width of the browser screen is less than 800 pixels, the sidebar disappears from view.
## Screenshots

![Commit Log](https://user-images.githubusercontent.com/33550545/202973450-f78dfbec-cee7-4390-bd60-1792a81f6404.png)

![Filtering](https://user-images.githubusercontent.com/33550545/202973688-94aee411-025f-4813-bccb-1e8d856b0c81.png)

![Mobile Version](https://user-images.githubusercontent.com/33550545/202973705-b604d34f-8a03-44f6-9052-ccd393abd6b0.png)

## Run Locally

Pre-requisites

- [node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Clone the project

```bash
  git clone https://github.com/teffybiskup/commit-log
```

Go to the project directory

```bash
  cd commit-log
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Tech Stack

**Client:** React 18.2.0

**Technologies and third-party libraries**
- [Prettier](https://prettier.io)
  - Code formatter

- [React Icons](https://react-icons.github.io/react-icons/)
  - Popular icons - currently using a down arrow icon and a circle icon for the branch tree view component

- [GitGraph.js](https://www.nicoespeon.com/gitgraph.js/)
  - Draw Git graph
  
- [Jest](https://jestjs.io)
  - Unit testing

## Roadmap

- Connect to a real Git repository

- Login page

- Error handling

- Implement
  - [Context API](https://reactjs.org/docs/context.html)
  - [SASS](https://sass-lang.com)
  - Table pagination
  - Interactive branch list
  - Ellipsis for real commit hash
  - Commit date formatting

- Filter by different fields besides commit description/message

- Show Spinner/Loader component when:
  - Getting branches info
  - Getting commit history
  - Filtering commits

- GitGraph.js without mock data

- Additional tests

- Additional browser support

## FAQ

####  If as soon as the user types in the input field the system should immediately show the filtered results, why is the Filter button necessary?

A functionality to store the commit message filter was added to the button. Therefore, if the user refreshes the page, the filter will still be present.

#### How to decide branch colors and when to show branch information in commit list?

It is assumed that the API will provide values ​​related to colors and it will handle the business rule of showing branch data only for the most recent commit.


## Lessons Learned

- How to create a React app from scratch without using create-react-app package
  - Followed:
    - [Setting up React + TypeScript app from scratch without create-react-app](https://dev.to/alekseiberezkin/setting-up-react-typescript-app-without-create-react-app-oph)
    - [Create React App without create-react-app (Typescript)](https://dev.to/riddhiagrawal001/create-react-app-without-create-react-app-typescript-5ea2)
    - [Create React App without Create React App](https://blog.bitsrc.io/create-react-app-without-create-react-app-b0a5806a92)

- How to use GitGraph.js
  - Commit graph component was created based on the [@gitgraph/react example](https://github.com/nicoespeon/gitgraph.js/tree/master/packages/gitgraph-react)

- How to use [useSearchParams](https://reactrouter.com/en/main/hooks/use-search-params)
## Optimizations

**Browsers tested:** 
- Chrome
- Firefox
- Safari
