# Library Project
This project is to create a simple library management website. It is intended for small school libraries that wish to be able to mantain their collection online.

## Development Team
This project is currently being developed solely by Melissa Knapp (knappm124), as the only developer all questions and bugs will be directed to her.

## Current Status
As of July 2024. This project is currently in progress and not fully functional at this time, as changes are made and functionality is added, this README file will be up Pdated to indicate what is usable and what is still in progress

## Planned Functions
The following items are planned functions that will be provided in the completed version of this project
1. Browse by Author
2. Browse by Genre
3. Check Out Books
4. Add New Books
5. Reserve Library

### Browse by Author
This page will pull all the unique author names from the database and display them as clickable links. When clicked on, the page will display all books by that author in the library, their topics/keywords, shelving location, and checked out status.

### Browse by Genre
This page will pull all the unique genre names from the database and display them as clickable links. When clicked on, the page will display all books in that genre, organized by author. The list will include their topics/keywords, shelving location, and checked out status.

### Check Out Books
This page will have two separate functions, the first is an admin funciton (unlocked by a password) that will allow the library owner/manager to view all checked out books. The secondary function is to allow library users to check out books to themselves. As this is intended for a small library, there will be no checks to ensure that the person checking out a book is who they say they are, it will be a completely self-reported form

### Add New Books
This page will be an admin only page, locked by password. It will have two separate buttons, one to add a fiction book and one to add a nonfiction book. Each button will display a form with required fields of Title and Author, for fiction books there will be a required field for a primary genre, and optional fields for a secondary genre and topics/keywords. The non fiction book form will have a required field for the dewey decimal category and an optional field for topics/keywords. Topcis and keywords must be separated by semi-colon, there will be a tooltip to this effect.

### Reserve Library
This page will have two functions. This first is admin only, locked by a password. It will allow the library owner/manager to select a week and view what classes have the library reserved for each period during the week. The secondary function allows teachers to choose a day and period and reserve the library space for their class, it will error out if that period is taken and suggest other days where that period is free for reservation.
