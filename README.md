### Homework Assignment #6:

#### Overview:
- For this homework assignment, I was tasked to creating a weather dashboard that will display the current day weather values, and will also display the next 5 day forecast weather values upon search.

#### Process:
- During my process in creating the weather dashboard, I first created individual blocks on the html that will display the weather information and gave each individual elements their own ID's. Afterwhich I created two type of functions(one to get the current day weather info, and one to get the future weather forecast). Each of those functions also contained different weather APIs that fetched its own individual data. After the data was fetched, those data was assigned to the appropriate elements in the HTML. Furthermore, within the function that gets the current weather info, I fetched the specific lon and lat values of the cities that the user searched for and passed those values as parameters to my other function to get the future forecast.
- To have the UV Index diplay a certain color depending on the UV index of the city (e.g.turns green if uv index is favorable, etc.), I created an if statement to change the color accordingly.
- Lastly, to give the users the ability to access the weather information from the previous searches, I created a local storage to store the history of the search list. 

#### Additional Documents:
- link to Github: https://github.com/paulwon2223/Weather-App-Dashboard-PW
- link to Gitpages: https://paulwon2223.github.io/Weather-App-Dashboard-PW/
- screenshots: 
![img](./img/ss1.png)
![img](./img/ss2.png)

