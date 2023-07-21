# Ptk Documentation: Image Widget


## Image Widget

> The `Image` widget is a subclass of `Gtk.Image` and provides additional functionality for setting properties such as the image file, icon, icon size, and pixel size.

### Parameters

The `Image` widget accepts the following parameters with their types:

- `file` (str): The path to an image file to be displayed (optional).
- `icon` (str): The name of the icon to be displayed (optional).
- `icon_size` (int): The size of the icon (optional).
- `pixel_size` (int): The size of the image in pixels (optional).

### Basic Usage

To create an instance of the `Image` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create an Image instance with a specified image file and icon
image = Ptk.Image(file="path/to/image.png", icon="my-icon", icon_size=32, pixel_size=200)
```