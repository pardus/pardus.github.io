# Ptk Documentation: ApplicationWindow Widget


## ApplicationWindow Widget

> The `ApplicationWindow` widget is a subclass of `Gtk.ApplicationWindow` and provides additional functionality for managing an application window. It allows you to set properties such as the window title, title bar, icon, and window dimensions.

### Parameters

The `ApplicationWindow` widget accepts the following parameters with their types:

- `title` (str): The title or name of the application window.
- `titlebar` (Gtk.Widget): The custom title bar widget (optional).
- `icon_name` (str): The name of the icon to be displayed in the window title bar (optional).
- `height` (int): The height of the application window. Default is -1.
- `width` (int): The width of the application window. Default is -1.

### Basic Usage

To create an instance of the `ApplicationWindow` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create an ApplicationWindow instance
window = Ptk.ApplicationWindow(
    title="My Application",
    titlebar=my_custom_title_bar_widget,
    icon_name="app-icon",
    height=600,
    width=800,
)
