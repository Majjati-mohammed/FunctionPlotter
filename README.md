# Function Plotter

This is a simple **function plotting web application** built with **HTML, CSS, and JavaScript**.  
It allows users to input a mathematical function and visualize it directly on a canvas.  

##  Features
- Choose the type of function: **Linear** or **Trigonometric/Logarithmic/Other**.
- Input a custom mathematical expression.
- Plot the function dynamically on an HTML5 `<canvas>`.
- Simple and lightweight — no external libraries required.

##  Note
- The application currently uses `eval()` to evaluate mathematical expressions.  
  Be careful not to enter untrusted code for security reasons.
- The canvas automatically scales coordinates for display, but very large values may exceed the canvas size.

##  Customization
- You can adjust the canvas size in `index.html`.
- Style inputs and buttons via `style.css`.
- Modify the plotting logic in `script.js` for more advanced graphing features.

##  Future Improvements
- Replace `eval()` with a safe math parser like **math.js**.
- Add zoom and pan functionality.
- Allow multiple functions to be plotted simultaneously.
- Add gridlines and axis labels for better readability.

##  License
This project is open source and free to use for learning and personal projects.
