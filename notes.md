# Your Herbarium Notes
These are some notes on the thinking process and decision making I had to follow to develop my solution to Your Herbarium.

* The chosen library is React, since it fits the tech stack at Preply.
* The app is initialized by means of create-react-app tool, as suggested in the challenge instructions.
* No advanced state management libraries, like Redux, have been used. I kept the state management of the app simple enough to not use React Context either.
* I included the `flowers` file in the front-end, under the `data` folder. Since the app only needs to consume the first three elements of the array in this file, I imported the array in the Cardswrapper component, and sliced the first three elements out of it to spread them in different cards. The next step in giving this app more scalability would be to modify this simple structure, building a small back end where to store the flowers information, and connecting both the front end and back end.
* The flowers file had a typo in the property `humidity` in each object. I corrected it.
* The UI design in Figma didn't show the flowers aphabetically sorted, but the instructions specifically said to do so. I followed the instructions by using the `.sort()` method when dealing with the data.
* Something else the UI design in Figma didn't show is the sentence "Displaying 3 out of total 5 flowers" below the cards. However, once again the instructions were clear on having to include this in the app, and so I did.
* Out of the three bonus requirements, I chose the last one, animating the transition when the cards expand, and allowing only for one card to be expanded at any time.
* Coming next, I would have twitched this feature so that the card would also collapse upon clicking outside of it. The Figma prototype didn't behave like that, though, so I didn't do it.
