#### 2023.05.12 - [Osman Coskun](https://github.com/osmancoskun)

# Developing Linux GUI Applications with Python and GTK4

Unlock the potential of Linux GUI application development using Python and GTK4. In this guide, we explore the powerful combination of Python's simplicity with GTK4's extensive widget library. Whether you're a beginner or experienced Python developer, this post provides a solid foundation to create stunning cross-platform desktop applications. Explore the core concepts, set up your development environment, build your first application, explore advanced topics, and learn about packaging and deployment. Let's improve ourselves to shape the future of Linux application development.

#### Python is very easy to read and understand programming language. All we have to do is creating a `.py` file and start coding.

- Just use your favourite text editor. You dont need an full-featured IDE to start coding. I suggest you to use ** [Visual Studio Code](https://code.visualstudio.com/) **
- I assume that you know basic level programming on Python. So we can start by reading some documents. For documents you can use ** [this link](https://amolenaar.github.io/pgi-docgen/) ** which is GTK4 documentation for Python. Also you can use ** [Black Formatter](https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter) ** Visual Studio Code extension for GTK4 widgets, their classes and functions that can be used with.
- Now create a file that ends with `.py` . For example lets say `myapp.py`
- For using GTK4 we need to import `gi` and specify GTK with version 4. Now lets add following code into our application.

```python
import gi
gi.require_version('Gtk','4.0')
from gi.repository import Gtk
```

- Now we can start using GTK widgets. But first we need a window to show our application.

```python
def on_activate(app):
    win = Gtk.ApplicationWindow(application=app)
    win.present()
app = Gtk.Application()
app.connect('activate', on_activate)
app.run(None)
```

- Now we can run our application with

```bash
python myapp.py
```

![Simple Window](https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/python-gtk-00-1.png)

- We will go deeper on next posts.
