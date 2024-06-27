# Ptk Documentation: ListBox Widget

## ListBox Widget

> The `ListBox` widget is a container that arranges its child widgets in a vertical list. It is based on `Gtk.ListBox` and provides additional functionality for setting properties such as showing separators between items.

### Parameters

The `ListBox` widget accepts the following parameters with their types:

- `show_separators` (bool): If True, separators will be displayed between list items. Default is False.

### Basic Usage

To create an instance of the `ListBox` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create a ListBox instance with separators between list items
listbox = Ptk.ListBox(show_separators=True)
```