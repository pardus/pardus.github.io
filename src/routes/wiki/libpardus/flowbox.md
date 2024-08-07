<svelte:head>

<title>Ptk Documentation: FlowBox Widget</title>
<meta name="description" content="Explore the FlowBox widget in Ptk, based on Gtk.FlowBox. Learn how to create flexible grid layouts with variable-sized child widgets, and set properties like row spacing, column spacing, and selection mode for enhanced user interaction in GTK+ applications.">
<meta property="og:title" content="Ptk Documentation: FlowBox Widget">
<meta property="og:description" content="Explore the FlowBox widget in Ptk, based on Gtk.FlowBox. Learn how to create flexible grid layouts with variable-sized child widgets, and set properties like row spacing, column spacing, and selection mode for enhanced user interaction in GTK+ applications.">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:url" content="https://pardus.github.io/wiki/libpardus/flowbox">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ptk Documentation: FlowBox Widget">
<meta name="twitter:description" content="Explore the FlowBox widget in Ptk, based on Gtk.FlowBox. Learn how to create flexible grid layouts with variable-sized child widgets, and set properties like row spacing, column spacing, and selection mode for enhanced user interaction in GTK+ applications.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

# Ptk Documentation: FlowBox Widget

## FlowBox Widget

> The `FlowBox` widget is a container that arranges its child widgets in a flexible grid layout, where each child occupies a variable-sized box. It is based on `Gtk.FlowBox` and provides additional functionality for setting properties such as row spacing, column spacing, maximum children per line, minimum children per line, and selection mode.

### Parameters

The `FlowBox` widget accepts the following parameters with their types:

- `row_spacing` (int): The space in pixels between rows of the flow box. Default is 0.
- `column_spacing` (int): The space in pixels between columns of the flow box. Default is 0.
- `max_children_per_line` (int): The maximum number of children to be displayed per line. Default is 4.
- `min_children_per_line` (int): The minimum number of children to be displayed per line. Default is 0.
- `selection_mode` (str): The selection mode for the flow box. Possible values are "none", "single", "browse", and "multiple".

### Basic Usage

To create an instance of the `FlowBox` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create a FlowBox instance with specified properties
flow_box = Ptk.FlowBox(
    row_spacing=5,
    column_spacing=10,
    max_children_per_line=3,
    min_children_per_line=1,
    selection_mode="multiple",
)
```
