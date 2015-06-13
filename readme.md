
UPDATE: Thanks Gareth for a far better idea than rolling menus: filter search on any List item. Brilliant. I've prettied up the display and taken your suggestion to publish at Surge.sh: current version of code is here: http://workshopinabox.surge.sh/

Remaining: Move Filter Search into header so it's persistent when page scrolls. 
Maybe conditionally display fields only if non empty?
Brian must learn Handlebars
Brian has to regularize content in the spreadsheet and explicate those Subject1 and Subject2 fields as shifts and er... whatever we intended when we put those in there. 



Work in progress:

A nice looking web interface for a database of workshop exercises.


I'm the lone geek in a non-technical team who run workshops. We have a nice catalogue of exercises, a Workshop-in-a-Box if you will, that we've developed with several other teams. Every exercise is classified according to its objective (Comprehension, Ice-Breaker, etc.), its format (Small  Groups, Plenary, etc) and contains a name and description field.

It's all stored in a Google Spreadsheet, which is easy for distributed and non-technical members to input into and access. 

But it's pretty ugly, and with 76 exercises is getting pretty big. It would be nice to be able to just review, e.g., all the Ice Breakers together or audition exercises that are done in small groups. That's *possible* in Google Spreadsheets, but not easy for everyone. 

Answer: A pretty, Tabletop.js, Ajax-enabled page built in Javascript and Jquery which pulls data from the spreadsheet and displays it nicely.

I've gotten as far as proof of concept here, pulling an exercise's name and description and displaying it in a pretty Bootstrap-CSS page.

To Do: 

Extend the information presented: Each Exercise should display at least Name, Description, Objective and Notes in a nice format.

Build some nav: dropdown or rolling menus that draw unique values from the Objective and Format columns. When clicked, the exercises that match those criteria are displayed.

Shift the current fixed display of data[X].columnName, where X is a row in the database, to something that can receive variables from the nav. 

(On the data side, I need to do some cleanup to standardize some  field contents)# WorkshopInABox
