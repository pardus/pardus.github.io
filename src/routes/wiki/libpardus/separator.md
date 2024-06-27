# Ptk Documentation: Separator Widget

## Separator Widget

> The `Separator` widget is a subclass of `Gtk.Separator` and provides additional functionality for setting the orientation of the separator line.

### Parameters

The `Separator` widget accepts the following parameter with its type:

- `orientation` (str): The orientation of the separator line. Possible values are "horizontal" and "vertical".

### Basic Usage

To create an instance of the `Separator` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create a horizontal separator
separator_horizontal = Ptk.Separator(orientation="horizontal")

# Create a vertical separator
separator_vertical = Ptk.Separator(orientation="vertical")
