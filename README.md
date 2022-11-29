# Development

### Link to Deployed Website
https://chaotickoala777.github.io/development/

### Goal and Value of the Application
The goal of this application is to track votes and link support for a policy/bill
to the amoount of money politicians earn from lobbysists. The main reasoning for
this is so that constituents can understand the different/possibly conflicting interests
that may be in play when politicians, who should be properly representing their
constituents, vote. This would then create accountability and force transparency. 
If I had more time to expand on this, I would also add which corporations and 
entities politicians receive funding from to better inform the user. 

### Usability Principles Considered
There were a few different ways I approached usability:

When choosing which buttons to use for my filters and sorting, I decided on radio 
buttons to make clear to the user which filter/sort was selected, and signify 
that buttons in the same category could only be selected one at a time. 

I also made sure to use different fonts in my accumulator to differentiate title
items (such as the accumulator title, votes, and funding) and items that are 
actually in the accumulator. I also used sets and different states to ensure that 
the accumulator would have no duplicates, and the vote and funding values would 
properly update. 

I placed a reset accumulator button to make it easier for users to clear the 
votes and funding rather than having to individually remove all the items in 
the accumulator. 

Lastly, I visually separated each card with the gray background to ensure there
was proper hierarchy and politician images and data would be properly 
associated with each other. 

### Organization of Components
The main component I have is a Politician (located in the Politician.js file).
In the App class, I pass props (which contain the data for each politician
from the data.json file) into the politician class. In the App class, I then 
use map to display each desired component (based on the filters and sorting).
In the Politician component, I then create and style each card, create the in 
support and opposed buttons, and also change the states of different variables 
(accumulator, number of votes, and total funding).  

### How Data is Passed Down Through Components
I only have one component, and data (which is from the data.json file) is 
passed into it using props. In addition to the politician data, I pass in different
useState operations to update necessary data (accumulator, number of votes, and 
total funding).

### How the User Triggers State Changes
Everytime the user clicks a button or radio button, state changes are triggered.
There are multiple states that I used in this project. I have a filter for:
1. the accumulator
This state is triggered when the user clicks the reset accumulator button and
also when in support or opposed are selected. 

2. the filtered data to display
setFilter is called by useEffect, which is triggered when the party, chamber, 
or sort states are changed. This is done so that the filtered data is updated
whenever the filter or sorting is enabled/changed.

3. the number of votes
This state is triggered when the user clicks the reset accumulator button and
also when in support or opposed are selected. 

4. the total funding
This state is triggered when the user clicks the reset accumulator button and
also when in support or opposed are selected. 

5. the party filter, the chamber of Congress filter, and age sort
These states are triggered whenever one of the Party, legislative body, and/or age sort 
radio buttons is selected. This changes what we use to filter (and also triggers 
useEffect). I do this to ensure that the different filters and sorting can work 
together rather than being completely separate. Anytime we change the party, chamber, or 
sort states, it makes sense that we would need to reconsider what data is displayed. 