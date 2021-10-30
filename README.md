# Book-Search-Engine

Book-Search Engine allows users to search for enw books to read as well as keep a list of books to purchase.

Book-search engine will allow users to:
  Load the search engine
  Present a menu with the options Seach for Books and Login/Signup and an input field to search and a submit button
  Able to search for books
  Click options to save books
  See all books saved onto your account
  Able to remove books for your list
  and Much more!
  
  ## Link to application (See bug analysis in notes section)
  https://git.heroku.com/secure-sea-40297.git

  ## Github repository
  https://github.com/IvanPerezRWS/Book-Search-Engine.git
  
  ## Notes
  After much degubbing I managed to have a succesful push to heroku as shown in the folowing screenshot.
  ![image](https://user-images.githubusercontent.com/83327047/139517068-2bc271dd-2425-49bd-ba22-03e82a9e362e.png)

  However, upon opening the application I am met with this error.
  ![image](https://user-images.githubusercontent.com/83327047/139517091-d716b2cc-1392-4ca2-b616-bc68fde44768.png)

  The error code diplayed is an H10 error as shown below.
  
![image](https://user-images.githubusercontent.com/83327047/139517148-ec99756e-5ac9-49fd-b5fd-9f47e42dbbc9.png)

  After consulting the internet, helpboards and youtube videos it was determined that the H10 error is commonly caused by
  a bug in the procfile at the root of the directory, a missing profile or procfile pointing at wrong directory, missing env variables or missing required scripts. I have extensively looked at these issues to no avail. I hope that this analysis of potential bugs make up for the lack of a deployed site. :)

Heroku Logs:
![image](https://user-images.githubusercontent.com/83327047/139529503-a8ed08e3-bb31-4c60-9050-3707c4e0d56d.png)
