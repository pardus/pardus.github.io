<svelte:head>

<title>Ptk Documentation: Scale Widget</title>
<meta name="description" content="Explore the Scale widget in Ptk, a subclass of Gtk.Scale with additional functionality for setting properties such as value, bounds, increments, orientation, and more. Learn its parameters and basic usage with code snippets.">
<meta property="og:title" content="Ptk Documentation: Scale Widget">
<meta property="og:description" content="Explore the Scale widget in Ptk, a subclass of Gtk.Scale with additional functionality for setting properties such as value, bounds, increments, orientation, and more. Learn its parameters and basic usage with code snippets.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://pardus.github.io/wiki/libpardus/scale">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:image:alt" content="Pardus Logo">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ptk Documentation: Scale Widget">
<meta name="twitter:description" content="Explore the Scale widget in Ptk, a subclass of Gtk.Scale with additional functionality for setting properties such as value, bounds, increments, orientation, and more. Learn its parameters and basic usage with code snippets.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)# Ptk Documentation: Scale Widget

## Scale Widget

> The `Scale` widget is a subclass of `Gtk.Scale` and provides additional functionality for setting properties such as the value, lower and upper bounds, step increment, page increment, page size, orientation, and more.

### Parameters

The `Scale` widget accepts the following parameters with their types:

- `value` (float): The initial value of the scale.
- `lower` (float): The minimum value of the scale.
- `upper` (float): The maximum value of the scale.
- `step_increment` (float): The increment to be applied when using arrow keys or scroll events. Default is 0.0.
- `page_increment` (float): The increment to be applied when using Page Up and Page Down keys. Default is 0.0.
- `page_size` (float): The size of the "pages" used for scrolling. Default is 0.0.
- `restrict_to_fill_level` (bool): If True, restricts the value to be rounded to the nearest value that fills the slider. Default is False.
- `round_digits` (int): The number of digits to round the value. Use -1 for automatic rounding. Default is -1.
- `orientation` (str): The orientation of the scale. Possible values are "horizontal" and "vertical".

### Basic Usage

To create an instance of the `Scale` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create a Scale instance with specified properties
scale = Ptk.Scale(
    value=50.0,
    lower=0.0,
    upper=100.0,
    step_increment=1.0,
    page_increment=10.0,
    page_size=0.0,
    restrict_to_fill_level=False,
    round_digits=1,
    orientation="horizontal",
)
```
