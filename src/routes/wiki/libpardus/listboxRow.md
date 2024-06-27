# Ptk Documentation: ListBoxRow Widget

## ListBoxRow Widget

> The `ListBoxRow` widget is a subclass of `Gtk.ListBoxRow` and provides additional functionality for setting the child widget within a list row.

### Parameters

The `ListBoxRow` widget accepts the following parameters with their types:

- `child` (Gtk.Widget): The child widget to be displayed within the row.

### Basic Usage

To create an instance of the `ListBoxRow` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create a ListBoxRow instance with a child widget
child_widget = Ptk.Label(label="Ptk ListBoxRow Child")  # Replace this with the child widget you want to add
listbox_row = Ptk.ListBoxRow(child=child_widget)
```