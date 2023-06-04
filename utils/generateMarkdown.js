// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return "https://opensource.org/licenses/MIT";
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
      
      Licensed under the ${license} license`;
  }
  return "";

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Table Of Contents
  * [Description](#description)
  * [Requirements](#requirements)
  * [Licenses](#licenses)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Contact-Me](#contact-me)
  * [Testing](#testing)
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Requirements
  ${data.require}
  ## Usage
  ${data.usage}
  ## Contact-Me
  * Name - ${data.name}
  * Email - ${data.email}
  * Github - [${data.creator}](https://github.com/${data.creator}/)
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}
  ## Questions
  Please send your questions [here](malito:${data.email})
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
