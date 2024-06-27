#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

# Ptk Documentation: Utils Functions

## Introduction

> This documentation focuses on the `utils` class, which contains various utility functions.

<br>

# Function: `val_to_variant`

> This function converts a Python value to a GLib Variant. It is used to ensure that the input value is of the correct data type for use with GSettings.

## Parameters

- `val` (Any): The value to be converted to a GLib Variant.

## Returns

- `GLib.Variant`: The converted GLib Variant.

## Example

```python
from libpardus import utils

# Convert a float value to a GLib Variant
variant_float = utils.val_to_variant(3.14)
print(variant_float)  # Output: <GVariant('d', 3.14)>

# Convert a string value to a GLib Variant
variant_string = utils.val_to_variant("hello")
print(variant_string)  # Output: <GVariant('s', 'hello')>

# Convert an integer value to a GLib Variant
variant_int = utils.val_to_variant(42)
print(variant_int)  # Output: <GVariant('i', 42)>
```

<br>

# Function: `get_session`

> This function retrieves the XDG session type from the environment variable `XDG_SESSION_TYPE`.

## Parameters

This function does not take any parameters.

## Returns

- `str`: The XDG session type (e.g., "x11" or "wayland").

## Example

```python
from libpardus import utils

# Get the XDG session type
session_type = utils.get_session()
print(session_type)  # Output: "x11" or "wayland" depending on the session type
```

<br>

# Function: `load_css`

> This function loads CSS styles from a specified CSS file and applies them to the Gtk application.

## Parameters

- `css_file_path` (str): The path to the CSS file to be loaded.

## Example

```python
from libpardus import utils

# Load and apply CSS styles from the specified file
css_file_path = "/path/to/styles.css"
utils.load_css(css_file_path)
```

<br>

# Function: `gsettings_set`

> This function sets a value in GSettings for a specified schema and key.

## Parameters

- `schema` (str): The GSettings schema name.
- `key` (str): The GSettings key name.
- `value` (Any): The value to be set in GSettings. It can be a float, str, int, or `GLib.Variant`.

## Returns

- `bool`: Returns `True` if the setting was successfully updated, otherwise `False`.

## Example

```python
from libpardus import utils

# Set a value in GSettings
schema_name = "org.example.app"
key_name = "setting_key"
value_to_set = 42
result = utils.gsettings_set(schema_name, key_name, value_to_set)
print(result)  # Output: True if the setting was successfully updated, otherwise False
```

<br>

# Function: `gsettings_get`

> This function retrieves a value from GSettings for a specified schema and key.

## Parameters

- `schema` (str): The GSettings schema name.
- `key` (str): The GSettings key name.

## Returns

- The value stored in GSettings for the specified schema and key. The data type of the returned value depends on the data type of the GSettings key.

## Example

```python
from libpardus import utils

# Get a value from GSettings
schema_name = "org.example.app"
key_name = "setting_key"
value = utils.gsettings_get(schema_name, key_name)
print(value)  # Output: The value stored in GSettings for the specified schema and key
```
