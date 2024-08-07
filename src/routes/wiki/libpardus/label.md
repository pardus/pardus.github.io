<svelte:head>

<title>Ptk Documentation: Label Widget</title>
<meta name="description" content="Explore the Label widget in Ptk, a subclass of Gtk.Label that allows setting properties such as plain text label, Pango markup, ellipsize mode, text alignment, and line count. Learn how to create and configure Label instances to display text in GTK+ applications.">
<meta property="og:title" content="Ptk Documentation: Label Widget">
<meta property="og:description" content="Explore the Label widget in Ptk, a subclass of Gtk.Label that allows setting properties such as plain text label, Pango markup, ellipsize mode, text alignment, and line count. Learn how to create and configure Label instances to display text in GTK+ applications.">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:url" content="https://pardus.github.io/wiki/libpardus/label">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ptk Documentation: Label Widget">
<meta name="twitter:description" content="Explore the Label widget in Ptk, a subclass of Gtk.Label that allows setting properties such as plain text label, Pango markup, ellipsize mode, text alignment, and line count. Learn how to create and configure Label instances to display text in GTK+ applications.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

# Ptk Documentation: Label Widget

## Label Widget

> The `Label` widget is a subclass of `Gtk.Label` and provides additional functionality for setting properties such as the text label, text markup, ellipsize mode, text alignment, and line count.

### Parameters

The `Label` widget accepts the following parameters with their types:

- `label` (str): The plain text label to be displayed.
- `markup` (str): The Pango markup text to be displayed (optional).
- `ellipsize` (str): The ellipsize mode for the label. Possible values are "none", "start", "middle", and "end".
- `xalign` (float): The horizontal alignment of the label within its available space. Value ranges from 0.0 (left-aligned) to 1.0 (right-aligned). Default is 0.0 (left-aligned).
- `yalign` (float): The vertical alignment of the label within its available space. Value ranges from 0.0 (top-aligned) to 1.0 (bottom-aligned). Default is 0.0 (top-aligned).
- `lines` (int): The number of lines to wrap the text. Default is 1 (single line).

### Basic Usage

To create an instance of the `Label` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create a Label instance with a plain text label
label = Ptk.Label(label="Hello, Ptk!")

# Set markup
markup = "<span> <b> Hello Ptk </b> </span>"
label = Ptk.Label(markup=markup)
```
