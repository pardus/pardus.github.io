<svelte:head>

<title>Ptk Documentation: Widget</title>
<meta name="description" content="Explore the Widget class in Ptk, a Python library that simplifies the usage of GObject-based widgets by allowing setting multiple properties at once. Learn about its parameters like css, name, hexpand, vexpand, height, width, halign, valign, margins, and basic usage as a base class for other Ptk widgets.">
<meta property="og:title" content="Ptk Documentation: Widget">
<meta property="og:description" content="Explore the Widget class in Ptk, a Python library that simplifies the usage of GObject-based widgets by allowing setting multiple properties at once. Learn about its parameters like css, name, hexpand, vexpand, height, width, halign, valign, margins, and basic usage as a base class for other Ptk widgets.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://pardus.github.io/wiki/libpardus/widget">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:image:alt" content="Pardus Logo">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ptk Documentation: Widget">
<meta name="twitter:description" content="Explore the Widget class in Ptk, a Python library that simplifies the usage of GObject-based widgets by allowing setting multiple properties at once. Learn about its parameters like css, name, hexpand, vexpand, height, width, halign, valign, margins, and basic usage as a base class for other Ptk widgets.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

# Ptk Documentation: Widget

## Introduction

Ptk (Python GObject Wrapper) is a Python library that provides a convenient and user-friendly wrapper around the GObject-based API. It simplifies the usage of GObject-based widgets by allowing you to set multiple properties at once using parameters instead of setting each property individually. This documentation focuses on the `Widget` class, which is a base class for other Ptk widgets.

## Widget Class

The `Widget` class is a subclass of `Gtk.Widget` and provides additional functionality for setting common properties that are shared by many Ptk widgets.

### Parameters

The `Widget` class accepts the following parameters with their types:

- `css` (list): A list of CSS classes to apply to the widget.
- `name` (str): A name for the widget, which can be used for identifying it.
- `hexpand` (bool): Whether the widget should horizontally expand to fill available space. Default is False.
- `vexpand` (bool): Whether the widget should vertically expand to fill available space. Default is False.
- `height` (int): The preferred height of the widget. Use -1 for automatic height.
- `width` (int): The preferred width of the widget. Use -1 for automatic width.
- `halign` (str): The horizontal alignment of the widget. Possible values are "fill", "start", "end", "center", and "baseline".
- `valign` (str): The vertical alignment of the widget. Possible values are "fill", "start", "end", "center", and "baseline".
- `margin_top` (int): The top margin of the widget.
- `margin_bottom` (int): The bottom margin of the widget.
- `margin_start` (int): The start (left for LTR, right for RTL) margin of the widget.
- `margin_end` (int): The end (right for LTR, left for RTL) margin of the widget.

### Basic Usage

The `Widget` class serves as a base class for other Ptk widgets and allows you to set common properties for widgets. When creating other Ptk widgets, you can inherit from the `Widget` class and include its parameters as needed.

Please note that the `Widget` class itself is not intended to be directly instantiated.

Feel free to use this Markdown documentation as a template and customize it further as needed.
