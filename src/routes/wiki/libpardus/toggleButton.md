<svelte:head>

<title>Ptk Documentation: ToggleButton Widget</title>
<meta name="description" content="Explore the ToggleButton widget in Ptk, a subclass of Gtk.ToggleButton with functionality for creating a button that can be toggled between two states (on and off). Learn its parameters and basic usage with code snippets.">
<meta property="og:title" content="Ptk Documentation: ToggleButton Widget">
<meta property="og:description" content="Explore the ToggleButton widget in Ptk, a subclass of Gtk.ToggleButton with functionality for creating a button that can be toggled between two states (on and off). Learn its parameters and basic usage with code snippets.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://pardus.github.io/wiki/libpardus/toggleButton">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:image:alt" content="Pardus Logo">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ptk Documentation: ToggleButton Widget">
<meta name="twitter:description" content="Explore the ToggleButton widget in Ptk, a subclass of Gtk.ToggleButton with functionality for creating a button that can be toggled between two states (on and off). Learn its parameters and basic usage with code snippets.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

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
```
