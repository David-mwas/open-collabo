# Open Collabo Project

Welcome to the Open Collabo Project! This project aims to showcase the collaborative efforts of developers from various backgrounds. Each participant contributes their details, showcasing their skills and social handles.

## Getting Started

To get started with contributing to this project, follow the steps below:

### Prerequisites

- Basic knowledge of Git and GitHub.
- Understanding of JavaScript, HTML, and CSS.

### Setup

1. Fork this repository to your GitHub account.
2. Don't forget to star the repo
3. Clone your forked repository to your local machine using `git clone <your-forked-repo-url>`.
4. Navigate to the project directory: `cd open-collabo`.
5. Create your own branch

```bash
git branch yourname
git checkout yourbranch
```

example

```bash
git branch mwas
git checkout mwas
```

### Adding Your Information

1. Create a new JavaScript module file in the appropriate team directory. Name it `<yourname>.mjs`. For example, `johndoe.mjs`.
2. Use the template provided below to add your details:

```js
const yourNameData = {
  teamName: "Your Team Name",
  firstname: "Your First Name",
  lastname: "Your Last Name",
  email: "your.email@example.com",
  role: "Your Role",
  skills: ["Skill1", "Skill2", "Skill3"],
  socials: [
    {
      git: "YourGitHubUsername",
    },
    {
      twitter: "YourTwitterHandle",
    },
  ],
};

export default yourNameData;
```

### importing your data in main file(name.mjs)

1. Open name.mjs file and import your data as :

```js
import yourNameData from "./teamX/yourname.mjs";

const data = [, /* existing entries */ yourNameData];
export default data;
```

for example

```js
import davidData from "./teamA/david.mjs";
import someoneData from "./teamB/someone.mjs";
import yourNameData from "./teamX/yourname.mjs";

const data = [davidData, someoneData, yourNameData];
export default data;
```

# Making a Contribution

To contribute to this project, follow these steps:

1. After adding your details, stage your changes:

```bash
git add .
```

2. Commit your changes with a meaningful message: describe what you changed or added

```bash
git commit -m "Your message"
```

example

```bash
git commit -m "Added <Your Name> details"
```

3. Push your changes to your fork:

```bash
 git push origin yourbranch
```

example

```bash
 git push origin mwas
```

4. Create a pull request to the original repository.

# Contribution Guidelines

- Ensure your code adheres to the project structure and standards.
- Only submit your details. Do not alter the contributions of others.
- Be respectful and constructive in your pull requests and comments.

# Project Structure

- The project is divided into teams. Each team has its directory under `teamA`, `teamB`, etc.
- Your details should be added in a `.mjs` file within your team's directory.

# Support

For support, please open an issue in the GitHub repository, and we'll get back to you as soon as possible.

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Acknowledgments

Thank you to all the contributors who make this project possible!
