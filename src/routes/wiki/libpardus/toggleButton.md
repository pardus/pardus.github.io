# Ptk Documentation: ToggleButton Widget


## ToggleButton Widget

> The `ToggleButton` widget is a subclass of `Gtk.ToggleButton` and provides additional functionality for creating a button that can be toggled between two states (on and off).

### Parameters

The `ToggleButton` widget accepts the following parameters with their types:

- `group` (Gtk.RadioButton): A `Gtk.RadioButton` group to which this toggle button belongs. If provided, the toggle button behaves as a radio button within the group, allowing only one button to be active at a time. Default is None.
- `child` (Gtk.Widget): The child widget to be displayed within the toggle button.

### Basic Usage

To create an instance of the `ToggleButton` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create a ToggleButton instance
toggle_button = Ptk.ToggleButton()
