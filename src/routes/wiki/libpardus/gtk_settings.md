#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

# Ptk Documentation: Gtk and Adw Settings

## Gtk and Adw Settings

> The `settings` dictionary contains mappings for commonly used Gtk and Adw settings. It allows you to conveniently refer to these settings using human-readable names in your code.

### Available Settings

- `horizontal`: The `Gtk.Orientation` for horizontal orientation, mapped to `Gtk.Orientation(0)`.
- `vertical`: The `Gtk.Orientation` for vertical orientation, mapped to `Gtk.Orientation(1)`.
- `fill`: The `Gtk.Align` for filling available space, mapped to `Gtk.Align(0)`.
- `start`: The `Gtk.Align` for starting alignment, mapped to `Gtk.Align(1)`.
- `end`: The `Gtk.Align` for ending alignment, mapped to `Gtk.Align(2)`.
- `center`: The `Gtk.Align` for center alignment, mapped to `Gtk.Align(3)`.
- `baseline`: The `Gtk.Align` for baseline alignment, mapped to `Gtk.Align(4)`.

### Basic Usage

You can use the `settings` dictionary in your Ptk code to set various Gtk and Adw properties more conveniently. For example:

```python
from libpardus import settings

# Use the horizontal orientation setting
orientation_horizontal = settings["horizontal"]

# Use the fill alignment setting
alignment_fill = settings["fill"]
```
