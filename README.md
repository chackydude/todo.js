# todo.js app

Here I tried to use MVC-pattern (Model-View-Controller)

![scheme of MVC pattern](https://github.com/chackydude/todo.js/raw/master/MVC.png)

Model–view–controller (usually known as MVC) is a software design pattern commonly used for developing user interfaces which divides the related program logic into three interconnected elements.

### Model
The central component of the pattern. It is the application's dynamic data structure, independent of the user interface. It directly manages the data, logic and rules of the application.
### View
Any representation of information such as a chart, diagram or table. Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants.
### Controller
Accepts input and converts it to commands for the model or view.

### Example

![example of the app](https://github.com/chackydude/todo.js/raw/master/example.png)

Here you can see what you can add, edit and remove notes from the notebook. Backend is written with using NodeJS (npm for package managing), and here I tried to use webpack to manage client(front-end) dependencies.
