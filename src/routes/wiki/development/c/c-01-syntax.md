# C Syntax

C is a compiled programming language.
This means that the code needs to be translated into a form understandable by the computer it will run on.
We can compile using gcc or clang.

```shell
# Generate .o file from code
$ gcc -c main.c
# Generate executable file from .o file
$ gcc -o main main.o
# Run the code
$ ./main
-> Hello World
```

In the example above, we first generate a .o object file.
This file represents the compiled but not yet executable version of the code.
Therefore, we need to pass the .o files through the linking process to get the final executable.

Note: Our compiler can also directly compile without generating .o.

```shell
$ gcc -o main main.c
```
## Commenting

There are three ways to comment in C code:

for single-line comments:

```c
// This is a comment line.
```

for multi-line comments:

```c
/* This
   is
   a
   comment */
```

`#if 0` for conditional comments:

```c
#if 0
This is a
comment
#endif
```

## Indentation

Blocks in C programming are denoted by `{}`.
Indentation is not necessary but improves readability.
You can use either 4 spaces or 1 tab for indentation.

A block has the following structure:

```c
aaaa (bbbb) {
        cccc;
  ddd;
}
```

Note: Each line must end with a semicolon (;).

## First Program

When C programs are executed, the main function is called.
Below is an example main function:

```c
int main(int argc, char** argv) {
    return 0;
}
```

    In int main, int is the return type, main is the function name.
    argc specifies the number of arguments.
    argv specifies the argument list.
    return 0 statement exits with a status of 0.

In C, the main function can also be defined as void.
If not using arguments, they don't need to be defined:

```c
void main(){}
```

## Printing to Screen

First, we need to include stdio.h library.
Then, we can use the printf function to print to the screen.

The first parameter of printf is the format string, and the others specify the data to be printed.

```c
#include <stdio.h>

int main(int argc, char** argv) {
    printf("%s\n", "Hello World!");
    return 0;
}
```

    In the include directive, the specified files are found in /usr/include directory.
    In printf function, %s is for strings, %c is for characters, %d is for integers.

## Variables

Variables in C are declared as follows:

```c
...
int number = 12;
char* text = "test";
char character = 'c';
float number2 = 12.42;
...
```

Additionally, using #define, you can replace occurrences of specified values in the code before compilation.
These values are not treated as variables because they are replaced before compilation.

```c
#define number 12
...
printf("%d\n",number);
...
```

## Arrays

Arrays can be declared in two ways:

Using pointers, which allows dynamic sizing.
The length doesn't need to be specified at the beginning.

```c
int *array = {12, 22, 31};
```

Or, declaring with a specified length:
```c
int array[3] = {12, 22, 31};
```

C doesn't have a string data type.
Instead, character arrays are used.

```c
char *txt = "deneme123";
```

To access an element in an array:

```c
int *array = {12, 22, 31};
int c = array[1]; // the second element of the array
```

Note: Array indices start from 0.

To find the length of an array, you divide the total size of the array by the size of each element.
You can use the sizeof function for this.

```c
int *array = {11, 22, 31};
int l = sizeof(array) / sizeof(int);
```

## Input from Keyboard

To receive input from the keyboard, scanf function is used.
The first parameter is the format, and the rest specify the memory addresses of the variables.

```c
int number;
scanf("%d\n", &number);
```

Note: Using this method, invalid input can be entered.
If this happens, the variable will be assigned NULL, meaning it has no value.
This can cause issues in code execution.
Therefore, always check for NULL before using the variable.
