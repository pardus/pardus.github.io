#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

# Ptk Documentation: Button Widget

## Button Widget

The `Button` widget is a subclass of `Gtk.Button` and provides additional functionality for setting properties such as the label, icon, and frame.

### Parameters

The `Button` widget accepts the following parameters with their types:

- `label` (str): The label text to be displayed on the button.
- `icon` (str): The name of the icon to be displayed on the button (optional).
- `frame` (bool): If True, the button will have a frame around it. Default is True.

### Basic Usage

To create an instance of the `Button` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create a Button instance with a label and an optional icon
button = Ptk.Button(label="Click Me", icon="my-icon",frame=True)
```
