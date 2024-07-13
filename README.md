# MohOnlineTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Table Rendering Task Description

### Objective:

The objective of this test is to evaluate the candidate's proficiency in Angular development. The task involves dynamically rendering a table based on a given data structure (`TableData`, `TableHeader`, `Row`). The candidate will need to handle various UI types (`text`, `dropdown`, `dateTime`, `input`) as defined in the header data.

### Framework Choice:

- Angular: Implementing the solution using Angular is preferred since we use Angular in-house.
- React: React is acceptable, If you choose React, create a new React project, copy the data structure from data.ts, and implement the table rendering logic using React components. Ensure your solution includes all necessary dependencies and setup instructions in the README.md

### Assessment Criteria:
TL;DR render a table based on given data as the screenshot below:
![image](https://github.com/yeweinan/moh-test/assets/8102308/e352b690-3c0b-4783-8dfa-d7293e7a8d27)

- A complete Angular component (`TableRendererComponent`) that dynamically renders a table based on `TableData`.
- Integration of the component into a parent component (`AppComponent` or similar) where `tableData` is provided.
- Ensure the table displays data accurately according to the configuration in `TableData.header`.
- Utilize Angular features such as `*ngFor`, and data binding to render `TableData` dynamically.
- Handling of different UI types (`text`, `dropdown`, `dateTime`, `input`) as specified in `TableData.header`.
- Code readability, organization, and adherence to Angular best practices.
- Basic styling of the rendered table and presents data clearly.

### UI Types Explanation:
- **`text`:** Renders plain text in the table cell.
- **`input`:** Displays a text input field in the table cell.
- **`dropdown`:** Renders a dropdown menu in the table cell, populated with options defined in `TableData.header`. Each row's value is pre-selected.
- **`dateTime`:** Displays date and time in text format respecting the specified date format (`dd/MM/YYYY` or `dd/MM/YYYY hh:mm`) in `TableData.header`.

### Documentation and Best Practices:

- Use descriptive variable and function names.
- Provide meaningful git history of each major steps
- Correctly use the type narrowing of the TypeScript (https://www.typescriptlang.org/docs/handbook/2/narrowing.html) instead of type casting, **NEVER** use (any) annotation

### How to submit your result:
 1. [Create a new private repository on Github](https://help.github.com/articles/creating-a-new-repository/) and name it `yourname-moh-test`.
    (Make sure it is private)
 2. Clone this repository.
 3. Set the remote url to your own repo
    ```
    git remote set-url origin `<your_repo_url>`
    git push   
    ```
 5. Coding
 6. Share the access of your repo as adding a collaborators (https://github.com/<yourusername>/<your_repo>/settings/access) to the user that mentioned in the email and reply
