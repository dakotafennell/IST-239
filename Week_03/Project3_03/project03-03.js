/*    
    Louis Fennell III, January 23, 2023, IST-239-W01, Hands-On Project 3-3

    This project generates the HTML code for a web table that displays the
    top 10 movies from the IMDB website. Information on each movie is stored
    in arrays that have already been created. The JavaScript that is written by
    me will be used to generate the HTML code for the table. There is a for 
    loop will loop through the titles of each movie and generate a row that 
    contains, a link to the movie, a synopsis of the movie, and the rating of
    the movie.

    JavaScript 7th Edition
    Chapter 3
    Project 03-03

    Application to generate a movie list
    Author: 
    Date:   

    Filename: project03-03.js
*/

// Sets the initial value for the variable, titles, as equal to an empty array.
let titles = [];
// Adds the movie title and year to the first position in the links array.
titles[0] = "The Shawshank Redemption (1994)";
// Adds the movie title and year to the second position in the links array.
titles[1] = "The Godfather (1994)";
// Adds the movie title and year to the third position in the links array.
titles[2] = "The Dark Knight (2008)";
// Adds the movie title and year to the fourth position in the links array.
titles[3] = "The Godfather: Part II (1974)";
// Adds the movie title and year to the fifth position in the links array.
titles[4] = "The Lord of the Rings: The Return of the King (2003)";
// Adds the movie title and year to the sixth position in the links array.
titles[5] = "Pulp Fiction (1994)";
// Adds the movie title and year to the seventh position in the links array.
titles[6] = "Schindler's List (1993)";
// Adds the movie title and year to the eighth position in the links array.
titles[7] = "12 Angry Men (1957)";
// Adds the movie title and year to the ninth position in the links array.
titles[8] = "Inception (2010)";
// Adds the movie title and year to the tenth position in the links array.
titles[9] = "Fight Club (1999)";

// Sets the initial value for the ratings variable as equal to an empty array.
let ratings = [];
// Adds the movie's rating to the first position in the links array.
ratings[0] = "9.3";
// Adds the movie's rating to the second position in the links array.
ratings[1] = "9.2";
// Adds the movie's rating to the third position in the links array.
ratings[2] = "9.0";
// Adds the movie's rating to the fourth position in the links array.
ratings[3] = "9.0";
// Adds the movie's rating to the fifth position in the links array.
ratings[4] = "8.9";
// Adds the movie's rating to the sixth position in the links array.
ratings[5] = "8.9";
// Adds the movie's rating to the seventh position in the links array.
ratings[6] = "8.9";
// Adds the movie's rating to the eighth position in the links array.
ratings[7] = "8.9";
// Adds the movie's rating to the ninth position in the links array.
ratings[8] = "8.8";
// Adds the movie's rating to the tenth position in the links array.
ratings[9] = "8.8";

// Sets the initial value for the variable, summaries, as equal to an empty array.
let summaries = [];
// Adds the movie's synopsis to the first position in the links array.
summaries[0] = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.";
// Adds the movie's synopsis to the second position in the links array.
summaries[1] = "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.";
// Adds the movie's synopsis to the third position in the links array.
summaries[2] = "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.";
// Adds the movie's synopsis to the fourth position in the links array.
summaries[3] = "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.";
// Adds the movie's synopsis to the fifth position in the links array.
summaries[4] = "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.";
// Adds the movie's synopsis to the sixth position in the links array.
summaries[5] = "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.";
// Adds the movie's synopsis to the seventh position in the links array.
summaries[6] = "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.";
// Adds the movie's synopsis to the eighth position in the links array.
summaries[7] = "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.";
// Adds the movie's synopsis to the ninth position in the links array.
summaries[8] = "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.";
// Adds the movie's synopsis to the tenth position in the links array.
summaries[9] = "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.";

// Sets the initial value for the variable, links as equal to an empty array.
let links = [];
// Adds an IMDB link to the first position in the links array.
links[0] = "https://www.imdb.com/title/tt0111161/?ref_=adv_li_tt";
// Adds an IMDB link to the second position in the links array.
links[1] = "https://www.imdb.com/title/tt0068646/?ref_=adv_li_tt";
// Adds an IMDB link to the third position in the links array.
links[2] = "https://www.imdb.com/title/tt0468569/?ref_=adv_li_tt";
// Adds an IMDB link to the fourth position in the links array.
links[3] = "https://www.imdb.com/title/tt0071562/?ref_=adv_li_tt";
// Adds an IMDB link to the fifth position in the links array.
links[4] = "https://www.imdb.com/title/tt0167260/?ref_=adv_li_tt";
// Adds an IMDB link to the sixth position in the links array.
links[5] = "https://www.imdb.com/title/tt0110912/?ref_=adv_li_tt";
// Adds an IMDB link to the seventh position in the links array.
links[6] = "https://www.imdb.com/title/tt0108052/?ref_=adv_li_tt";
// Adds an IMDB link to the eighth position in the links array.
links[7] = "https://www.imdb.com/title/tt0050083/?ref_=adv_li_tt";
// Adds an IMDB link to the ninth position in the links array.
links[8] = "https://www.imdb.com/title/tt1375666/?ref_=adv_li_tt";
// Adds an IMDB link to the tenth position in the links array.
links[9] = "https://www.imdb.com/title/tt0137523/?ref_=adv_li_tt";

// Sets the initial value of the variable, htmlCode, as that of an empty string.
let htmlCode = "";

/* For loop that sets i as initially equal to 0 (let i = 0;), while i is less than the 
length (amount) of items stored in the menuItems variable, and adds 1 to i 
every loop. */
for (let i = 0; i < titles.length; i++) {
    // Adds a new row to the table ("<tr>" = table row).
    htmlCode += "<tr>";
    // Adds a new cell to the table ("<td>" = table data).
    htmlCode += "<td>";
    /* Adds the title to the cell and turns it into a hyperlink to the matching 
    link and then closes the cell. */
    htmlCode += "<a href='" + links[i] + "'>" + titles[i] + "</a>" + "</td>";
    // Adds a new cell to the table
    htmlCode += "<td>";
    // Adds the plot synopsis of the movie and then closes the cell
    htmlCode += summaries[i] + "</td>";
    // Adds a new cell to the table
    htmlCode += "<td>";
    // Adds the rating of the movie and then closes the cell
    htmlCode += ratings[i] + "</td>";
    // Closes the movies row
    htmlCode += "</tr>";
}

// Sets the tableBody variable as the first element with the title, "tbody".
let tableBody = document.getElementsByTagName("tbody")[0];

/* Changes the tableBody to the values created in the for loop, which was then
stored in the variable, htmlCode. */
tableBody.innerHTML = htmlCode