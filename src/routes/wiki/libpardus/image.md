<svelte:head>

<title>Ptk Documentation: Image Widget</title>
<meta name="description" content="Learn about the Image widget in Ptk, a subclass of Gtk.Image that allows setting properties such as image file path, icon name, icon size, and pixel size. Explore how to create and configure Image instances to display images and icons in GTK+ applications.">
<meta property="og:title" content="Ptk Documentation: Image Widget">
<meta property="og:description" content="Learn about the Image widget in Ptk, a subclass of Gtk.Image that allows setting properties such as image file path, icon name, icon size, and pixel size. Explore how to create and configure Image instances to display images and icons in GTK+ applications.">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:url" content="https://pardus.github.io/wiki/libpardus/image">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ptk Documentation: Image Widget">
<meta name="twitter:description" content="Learn about the Image widget in Ptk, a subclass of Gtk.Image that allows setting properties such as image file path, icon name, icon size, and pixel size. Explore how to create and configure Image instances to display images and icons in GTK+ applications.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

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
