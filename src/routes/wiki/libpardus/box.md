<svelte:head>

<title>Ptk Documentation: Box Widget</title>
<meta name="description" content="Explore the Box widget in Ptk, based on Gtk.Box. Learn how to arrange child widgets horizontally or vertically, set properties like orientation, spacing, and homogeneity, and create flexible layouts for GTK+ applications.">
<meta property="og:title" content="Ptk Documentation: Box Widget">
<meta property="og:description" content="Explore the Box widget in Ptk, based on Gtk.Box. Learn how to arrange child widgets horizontally or vertically, set properties like orientation, spacing, and homogeneity, and create flexible layouts for GTK+ applications.">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:url" content="https://pardus.github.io/wiki/libpardus/box">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ptk Documentation: Box Widget">
<meta name="twitter:description" content="Explore the Box widget in Ptk, based on Gtk.Box. Learn how to arrange child widgets horizontally or vertically, set properties like orientation, spacing, and homogeneity, and create flexible layouts for GTK+ applications.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

# Ptk Documentation: Box Widget

## Box Widget

> The `Box` widget is a container that arranges its child widgets in either a horizontal or vertical layout. It is based on `Gtk.Box` and provides additional functionality for setting properties such as orientation, spacing, homogeneity, and a custom name.

### Parameters

The `Box` widget accepts the following parameters with their types:

- `orientation` (str): The orientation of the box. Possible values are "horizontal" and "vertical".
- `homogeneous` (bool): If True, the child widgets will be given equal space within the box.
- `spacing` (int): The space in pixels to insert between the child widgets. Default is -1.
- `name` (str): A custom name for the box (optional).
- `children` (list of Gtk.Widget): A list of child widgets to be added to the box.

### Basic Usage

To create an instance of the `Box` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create a Box instance with horizontal orientation and homogeneous spacing
box = Ptk.Box(orientation="horizontal", homogeneous=True, spacing=10)

# Add child widgets to the box
label1 = Gtk.Label(label="Label 1")
label2 = Gtk.Label(label="Label 2")
box.append(label1)
box.append(label2)

# Or you can create child widgets and append it while creating box.
label1 = Gtk.Label(label="Label 1")
label2 = Gtk.Label(label="Label 2")
box = Ptk.Box(orientation="horizontal", homogeneous=True, spacing=10,children=[label1,label2])



```
