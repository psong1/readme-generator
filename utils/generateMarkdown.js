// function that returns a license badge based on the license passed from the question;
// if no response, then an empty string will be returned
const renderLicenseBadge = (license) => {
  return license ? `![badge](https://img.shields.io/badge/license-${license}-blue)` : ' ';
}

// function that returns the license link based on the license passed in;
// if no response, then an empty string is returned
const renderLicenseLink = (license) => {
  return license ? `[${license}](https://choosealicense.com/licenses/${license})` : ' ';
}

// function that returns the license section in README
// if no response, then an empty string is returned
const renderLicenseSection = (license) => {
  return license ? 
  `## [License](#table-of-contents)

  This project is covered by the following license:

  ${renderLicenseLink(license)}
  ` : ' ';
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#install)
  * [Usage](#usage)
  * [Contributions](#contribute)
  * [Test](#test)
  * [License](#license)
  * [Contact](#contact)
  
  ## [Description](#table-of-contents)

  ${data.description}

  ## [Installation](#table-of-contents)

  ${data.install}

  ## [Usage](#table-of-contents)

  ${data.usage}

  ## [Contributions](#table-of-contents)

  ${data.contribute}

  ## [Test](#table-of-contents)

  ${data.test}

  ${renderLicenseSection(data.license)}

  ## [Contact](#table-of-contents)

  * Github: [${data.github}](https://github.com/psong1) 

  * Email me: ${data.email}

`;
}

module.exports = generateMarkdown;
