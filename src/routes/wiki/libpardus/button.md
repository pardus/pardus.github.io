<svelte:head>

<title>Ptk Documentation: Button Widget</title>
<meta name="description" content="Explore the Button widget in Ptk, based on Gtk.Button. Learn how to create buttons with labels, icons, and frames, and enhance user interaction in GTK+ applications.">
<meta property="og:title" content="Ptk Documentation: Button Widget">
<meta property="og:description" content="Explore the Button widget in Ptk, based on Gtk.Button. Learn how to create buttons with labels, icons, and frames, and enhance user interaction in GTK+ applications.">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:url" content="https://pardus.github.io/wiki/libpardus/button">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ptk Documentation: Button Widget">
<meta name="twitter:description" content="Explore the Button widget in Ptk, based on Gtk.Button. Learn how to create buttons with labels, icons, and frames, and enhance user interaction in GTK+ applications.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

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
