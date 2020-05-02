# Scheduler-App

This is a daily scheduler web-app. To begin, at the top, you see that there is a jumbotron. Using moment.js, in addition to a setInterval() function, I was able to give the page a real-time clock, to the second. 

Next, I have a table, that has columns for both AM and PM hours, in addition to a column for the EVENT/MEETING/TASK that needs to be entered. There is a row for each hour, between 6am and 6pm. 

When the page first loads, several things happen to affect its appearance and function. First, you will notice, depending on what time you look at it, that hour blocks in the past (hours less than the current whole hour value) will appear less opaque than the present or future values. In addition, these rows also have a read/only input field. The user will not be able to enter text in these fields once the hour has past. 

Next are the present and future hour blocks, represented by light blue and blue-green, respectively. These input fields are not read/only and can be changed by typing text into those fields and pressing the 'save' button. 

Users can enter text into each hour block input field and press the 'save' button to save this entry into local storage. If the page is reloaded any-time before the end of the day, in this case, anytime prior to 6pm, those values will still remain. However, after 6pm, the app will clear local storage.
