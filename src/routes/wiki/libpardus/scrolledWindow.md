#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

# Ptk Documentation: ScrolledWindow Widget

## ScrolledWindow Widget

> The `ScrolledWindow` widget is a subclass of `Gtk.ScrolledWindow` and provides additional functionality for setting the child widget within the scrolled window.

### Parameters

The `ScrolledWindow` widget accepts the following parameters with their types:

- `child` (Gtk.Widget): The child widget to be displayed within the scrolled window.

### Basic Usage

To create an instance of the `ScrolledWindow` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create a ScrolledWindow instance with a child widget
child_widget = ...  # Replace this with the child widget you want to add
scrolled_window = Ptk.ScrolledWindow(child=child_widget)
```
