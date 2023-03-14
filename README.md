# etch-a-sketch
This project allows the user to create a sketch with the uses of divs.
I create a grid out of divs by having one div as the "grid container" with displays: grid.
I also set the sidth and height of this container to a set value so that way even if 
the numbers of boxes change, the size of the grid stays the same. 
Next, I set the number of columns equal to a default value of 16 in the JS code.
If need to change number of columns, can do so by user input since the JS code is 
linked to the "number of columns" code in the CSS file by the use of "setProperty" 
method. Inside of this function, a for loop runs and creates the number of divs needed
depending on the user input (However this is a defult number when starting the programn).
This gives an intial amount of boxes inside the grid. 

Users can use the two buttons created to either change the size of the box or reset the colored 
boxes back to white. 