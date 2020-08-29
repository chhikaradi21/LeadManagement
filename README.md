## About this repo
This repo is a code assignment which is handling LEAD management process.
I am doing all CRUD operations required for this task which uses codejudge API as backend service.

## Technologies used
 - ReactJS latest
 - Bootstrap for basic components like Button, Input, Modal etc...
 - Styled components
 
## Code Structure
- Complete code is inside src folder.
- I am defining my common colors and styled component for layout and styling inside src/Common
- Complete code and all components are inside Leadmanagement directory.
- I have written small small reusable components. Like all visual entities like LeadsTable, AddLead button, Actions buttons like Mark update and Delete are reusable components.
- All network calls are inside src/NetworkManager directory and each operation is written inside a reusable component function
- DRY and SRP rules are followed.
- Colors used are maintained in a separate file and referenced from there only.
## Steps to run
(1) git clone https://github.com/chhikaradi21/LeadManagement.git
(2) cd LeadManagement
(3) npm i
(4) npm start
(5) Change codejudge endpoints for API response and it should work on port 3000

