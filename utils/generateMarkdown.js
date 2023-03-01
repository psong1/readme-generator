// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  return license ? `![badge](https://img.shields.io/badge/license-${license}-blue)` : ' ';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  return license ? [`${license}`](`https://choosealicense.com/licenses/${license}`) : ' ';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
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

  ##[Contributions](#table-of-contents)

  ${data.contribute}

  ## [Test](#table-of-contents)

  ${data.test}

  ## [License](#table-of-contents)

  ${data.license}

  ## [Contact](#table-of-contents)

  * Link to Github: ${data.github}

  * Email me: ${data.email}

`;
}

module.exports = generateMarkdown;
