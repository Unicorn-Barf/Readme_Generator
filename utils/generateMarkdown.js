// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No License') {
    return `- [License](#license)\n`
  }
  else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `## License\n
The license used is MIT found here:\n
${renderLicenseBadge(license)}`;
    case 'GPLv3':
      return `## License\n
The license used is GPL v3 found here:\n
${renderLicenseBadge(license)}`;
    case 'Apache 2.0':
      return `##License\n
The license used is Apache 2.0 found here:\n
${renderLicenseBadge(license)}`;
    case 'BSD 3':
      return `## License\n
The license used is BSD 3 found here:\n
${renderLicenseBadge(license)}`;
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badgeLic = renderLicenseBadge(data.license);
  let sectionLic = renderLicenseSection(data.license);
  let linkLic = renderLicenseLink(data.license);
  return `# ${data.title}\n
${badgeLic}\n
## Description\n
${data.description}
## Table of Contents\n
- [Installation](#installation)\n
- [Usage](#usage)\n
${linkLic}
- [Contributing](#contributing)\n
- [Tests](#tests)\n
- [Questions](#questions)\n
## Installation\n
${data.install}\n
## Usage\n
${data.usage}\n
${sectionLic}\n
## Contributing\n
${data.contributions}\n
## Tests\n
${data.test}\n
## Questions\n
${data.contactIns}\n
- Github [${data.username}](github.com/${data.username})\n
- Email ${data.email}\n
`;
}

module.exports = generateMarkdown;
