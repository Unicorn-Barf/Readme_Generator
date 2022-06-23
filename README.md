# Weather Dashboard Web App
​
## Table of contents
​
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Instructions](#instructions)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
​
​
## Overview
​
### The challenge
​
The README.md generator is a command line application that will generate a professional README.md file from user input.  It is a NodeJS application that utilizes the Node Package Modules `inquirer` and `fs` to take user input in the command line and generate a new file using that input.  Professional README.md files are important for open source projects and this application will quickly generate the important sections and license badges for the user.
​
### User Story
​
```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```
​
### Acceptance Criteria
​
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

​
### Instructions
​
This application will run from the command line.  Make sure that you are in the directory of the index.js file for it to work; in the command line enter `node index.js` and follow the prompts.  The video linked below shows how to use the application.

[Demo Video](https://drive.google.com/file/d/1o3LM1j0h7-1baBTsfThNbIvUfKWbLdWm/view)
​
​
### Links
​
- Solution URL: [https://github.com/Unicorn-Barf/Weather_Dashboard](https://github.com/Unicorn-Barf/Readme_Generator)
​
## My process
​
### Built with
​
- JavaScript
- NodeJS
​
​
### What I learned
​
This project provided one of my first experiences utilizing APIs and the built in JavaScipt fetch API.  One of my first challenges was to read the Open Weather One Call API documentation to figure out how I can access the data that I needed.  Another difficult feature I needed to implement was a color coded background for the UV index data displayed on the current weather card.  Lastly, I implemented a `.catch` on the promise chain so that if the user entered a nonexistent city name, an alert modal would pop up.  I am proud of what I was able to accomplish and have a breakdown of these three challenging aspects of this web app below.


By reading the API documentation, I realized in order to use the free One Call weather API, it was neccessary to fetch weather by longitude and latititude.  I perused the documentation and found the same API provider also had a free geocoding service API that would convert the user input as city and state to longitude and latitude.  I implemented two fetch calls to get the appropriate data that I needed.  I am proud of the way I was able to incorporate user input into my fetch request URL parameters to effectively get the correct data.  Also, this taught me how to `console.log(data)` to observed the returned promise object and properly target the specific data I needed.  Below is an example of my fetch request code:

```js
// Geocoding function to get lon & lat from user input
function geoCode(city, state) {
    // define fetch request URL
    let requestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&appid=4bcac4085f133666bc3803dc7ed2e35c`
    // fetch request to convert to lon lat
    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Get Lon/Lat and call weather search function
            let lon = data[0].lon;
            let lat = data[0].lat;
            weatherSearch(lon, lat, city);
        })
        // Catch error and trigger alert modal
        .catch(function() {
            alertModal();
        });
};


// Weather Search Function API to one call weather
function weatherSearch(lon, lat, city) {
    // define the URL
    let requestURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=4bcac4085f133666bc3803dc7ed2e35c`

    // API request for weather
    fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // call function to display data
        displayWeather(data, city);
    })
}

```
​
An additional feature I was proud of utilized data atributes and CSS skills to conditionally change the background of the UV index value on the current weather card.  This was a challenge at first because the element for UVI was dynamically created and I needed to come up with a way to be able to target its CSS properties depending on the value.  I decided to use data attribute properties assigned to a `<span>` element holding the UVI value.  By doing this, I could specifically target the number value background and not the whole `<p>` tag element.  With data attributes, I could specifically target them in my CSS file depending on their level indicated.  Here is the javascript I used to assign the data attribute vales depending on UVI level.

```js
    // store uv index value as a data attribute to put corresponding background color
    let UVI = data.current.uvi;
    let level
        if (UVI < 3) {
            level = "low";
        }
        else if (UVI < 6) {
            level = "moderate";
        }
        else if (UVI < 8) {
            level = "high";
        }
        else if (UVI < 11) {
            level = "very-high";
        }
        else {
            level = "extreme";
        }
    let uvIndex = $(`<p>UV Index: <span data-uvi=${level}>${UVI}</span></p>`);
```

I experimented with how I would use `.catch` for error statuses on my fetch request.  I decided I would implement a Bootstrap modal for an error case alerting the user that the input was not valid.  I am now aware to use all of Bootstrap's modal functionality, the Bootstrap script tag must be included.  The modal was easy to implement once I understood the documentation.
​
### Continued development
​
After taking on the challenges provided by this simple web app, I am inpsired to find innovataive ways to implement APIs.  I realize that future project development will heavily utilize APIs for functionality.  Lastly, I am very excited to learn about setting up and using servers to not only improved user experience, but also to handle secure imformation.  Many of my previously built apps would improve with handling user data and login credentials.
​
### Useful resources
​
- [Open Weather One Call API docs](https://openweathermap.org/api/one-call-3) - This is the documentation to use the Open Weather One Call API.
- [EPA UV Index Guide](https://www.epa.gov/sites/default/files/documents/uviguide.pdf) - This is the EPA's guide to UV indexes.  I got my severity color codes from this guide.
- [MDN's Data Atrribute Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) - MDN's documentation on data attributes and how to utlize them in your CSS code.
- [Special Symbols for HTML & JavaScript](http://www.javascripter.net/faq/mathsymbols.htm) - I used this as a reference to get the hexidecimal code for the degree symbol to use in my JS file.  It has many special characters in HexCode, Numeric, HTML, escape, and encodeURI formats.
- [Blog Post: How to capitalize first letter of each word in a string](https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/) - This helped me figure out how to take my user input for the city search input and make sure the city name was capitolized even for cities with multiple word names.
​
## Author
​
- Website - [Nolan Spence](https://unicorn-barf.github.io/Portfolio_Website_HTML_CSS/)
- LinkedIn - [https://www.linkedin.com/in/aerospence/](https://www.linkedin.com/in/aerospence/)
​
## Acknowledgments
​
Thank you to Nifer for pointing out my current weather had no conditions icon on it!!

