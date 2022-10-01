const pythonQuiz = [
  {
    Question: "In Python, which one of these is not a Dunder method?",
    Answer: "__func",
    Distractor1: "__init__",
    Distractor2: "__add__",
    Distractor3: "__len__ ",
    Explanation:
      "Dunder methods are names that are preceded and succeeded by double underscores, hence __func method is not a Dunder method.",
    Link: "https://docs.python.org/3/reference/lexical_analysis.html?highlight=dunder#reserved-classes-of-identifiers",
  },
  {
    Question: "In Python, what are the outputs for type(1) and type((1,))?",
    Answer: "<class 'int'>  <class 'tuple'>",
    Distractor1: "<class 'str'> <class 'int'>",
    Distractor2: "<class 'dict'>  <class 'list'>",
    Distractor3: "<class 'int'> <class 'int'> ",
    Explanation:
      "type(1) will return <class 'int'> and type((1,)) will return <class 'tuple'>",
    Link: "https://www.freecodecamp.org/news/python-tuple-vs-list-what-is-the-difference/",
  },
  {
    Question:
      "In Python, which method can be used to replace parts of a string?",
    Answer: "replace()",
    Distractor1: "switch()",
    Distractor2: "repl()",
    Distractor3: "find()",
    Explanation:
      "If you need to search through a string for a pattern, and replace it with another pattern, you can use the replace() method.",
    Link: "https://www.freecodecamp.org/news/python-string-methods-tutorial-how-to-use-find-and-replace-on-python-strings/",
  },
  {
    Question: "In Python, what is the correct way to create a function?",
    Answer: "def function_name(parameters):",
    Distractor1: "function function_name(parameter):",
    Distractor2: "definition function_name {[parameters]}:",
    Distractor3: "create function_name(parameters):",
    Explanation:
      "The following snippet shows the general syntax to define a function in Python: def function_name(parameters):",
    Link: "https://www.freecodecamp.org/news/functions-in-python-a-beginners-guide/",
  },
  {
    Question: "In Python, what is a correct syntax to output 'Hello World'?",
    Answer: "print('Hello World')",
    Distractor1: "echo('Hello World')",
    Distractor2: "p('Hello World')",
    Distractor3: "printf('Hello World')",
    Explanation: "To print anything in Python, you use the print() function.",
    Link: "https://www.freecodecamp.org/news/python-print-variable-how-to-print-a-string-and-variable/",
  },
  {
    Question: "In Python, what is the new line character?",
    Answer: "\\n",
    Distractor1: "\\s",
    Distractor2: "\\new",
    Distractor3: "\\m",
    Explanation: "\\n is the newline character in Python.",
    Link: "https://www.freecodecamp.org/news/python-new-line-and-how-to-python-print-without-a-newline/",
  },
  {
    Question: "In Python, how can you create an empty dictionary?",
    Answer: "{}",
    Distractor1: "[]",
    Distractor2: "()",
    Distractor3: "list()",
    Explanation: "You can create an empty dictionary with {} in Python.",
    Link: "https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/",
  },
  {
    Question: "In Python, how can you create an empty set?",
    Answer: "set()",
    Distractor1: "{}",
    Distractor2: "dict()",
    Distractor3: "()",
    Explanation:
      "You must call the set() function to create an empty set in Python.",
    Link: "https://www.freecodecamp.org/news/python-sets-detailed-visual-introduction/",
  },
  {
    Question:
      "In Python, the value of empty sequences, collections, and the number 0 are all ...",
    Answer: "Falsy",
    Distractor1: "Truthy",
    Distractor2: "FALSENESS",
    Distractor3: "TRUENESS",
    Explanation:
      "Empty sequences, collections, and the number 0 are falsy values in Python.",
    Link: "https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/",
  },
  {
    Question:
      "In Python, what operator can you use to check if a value is in a sequence?",
    Answer: "in",
    Distractor1: "member",
    Distractor2: "inside",
    Distractor3: "partof",
    Explanation:
      "The in operator is a membership operator in Python. It can be used to check if a value is in a sequence or not because it returns True if the value is in the list and False if it is not in the list. ",
    Link: "https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/",
  },
  {
    Question:
      "In Python, a value that evaluates to True in a boolean context is known as...",
    Answer: "Truthy",
    Distractor1: "TRUENESS",
    Distractor2: "Falsy",
    Distractor3: "Truthful",
    Explanation:
      "A value that evaluates to True in a boolean context is known as a truthy value.",
    Link: "https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/",
  },
  {
    Question:
      "In Python, what logical operator returns True if both operands are True?",
    Answer: "and",
    Distractor1: "or",
    Distractor2: "not",
    Distractor3: "list",
    Explanation:
      "The and operator returns True if both operands are True and False otherwise.",
    Link: "https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/",
  },
  {
    Question: "In Python, what is the “greater than” operator?",
    Answer: ">",
    Distractor1: ">=",
    Distractor2: "<",
    Distractor3: "<=",
    Explanation:
      "The “greater than” operator is > in Python. It returns True if the value on the left is greater than the value on the right. We can also use it to compare strings in alphabetical order.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
  },
  {
    Question:
      "The canonical implementation of the Python programming language, as distributed on python.org is known as...",
    Answer: "CPython",
    Distractor1: "PPython",
    Distractor2: "QPython",
    Distractor3: "MPython",
    Explanation:
      "CPython is the canonical implementation of the Python programming language, as distributed on python.org. Canonical is a software company",
    Link: "https://docs.python.org/3/glossary.html",
  },
  {
    Question: "When did Python first appear?",
    Answer: "1991",
    Distractor1: "2001",
    Distractor2: "2011",
    Distractor3: "2021",
    Explanation: "Python first appeared in 1991.",
    Link: "https://en.wikipedia.org/wiki/Python_(programming_language)",
  },
  {
    Question: "In Python, what is the addition assignment operator?",
    Answer: " +=",
    Distractor1: " =+",
    Distractor2: " +",
    Distractor3: "==",
    Explanation:
      "The += operator lets you add a value (right operand) to the current value of a variable and store the result of the calculation in the same variable (left operand). This is shorter than using + and then = separately.",
    Link: "https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/",
  },
  {
    Question: "In Python, what is the meaning of PEP?",
    Answer: "Python Enhancement Proposal",
    Distractor1: "Python Experimentation Platform",
    Distractor2: "Python Excellent Performance",
    Distractor3: "Python Environmental Protection",
    Explanation:
      "In the context of Python, PEP means Python Enhancement Proposal. A PEP is a design document that provides information to the Python community, or describes a new feature for Python or its processes or environment.",
    Link: "https://www.python.org/dev/peps/pep-0001/#what-is-a-pep",
  },
  {
    Question: "In Python, what is the correct way to write Boolean values?",
    Answer: "True/False",
    Distractor1: "true/false",
    Distractor2: "TRUE/FALSE",
    Distractor3: "tRuE/FaLsE",
    Explanation:
      "In Python, we have to write Boolean values like this: True and False. If we don't write them like this, they will not be recognized as keywords in the program. ",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/",
  },
  {
    Question: "In Python, what is the result of this code: “Hi” * 2?",
    Answer: "HiHi",
    Distractor1: "“Hihi”",
    Distractor2: "“HiHiHiHi”",
    Distractor3: "A SyntaxError",
    Explanation:
      "The * operator in Python can be used to repeat a string a given number of times. In this case, the string “Hi” is repeated two times. ",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
  },
  {
    Question:
      "In Python, what is the name of a value associated with an object that can be referenced by its name using dot notation?",
    Answer: "Attribute",
    Distractor1: "Property",
    Distractor2: "Characteristic",
    Distractor3: "Method",
    Explanation:
      "An attribute is a value associated with an object that can be referenced by its name using dot notation.",
    Link: "https://docs.python.org/3/glossary.html",
  },
  {
    Question: "In Python, what is the “less than or equal to” operator?",
    Answer: "<=",
    Distractor1: "<",
    Distractor2: ">",
    Distractor3: ">=",
    Explanation:
      "The “less than or equal to” operator is <= in Python. It returns True if the value on the left is less than or equal to the value on the right. We can also use it to compare strings in alphabetical order.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
  },
  {
    Question:
      "In Python, what built-in function returns the largest item in an iterable or the largest of two or more arguments?",
    Answer: "max()",
    Distractor1: "min()",
    Distractor2: "maximum()",
    Distractor3: "largest()",
    Explanation:
      "The max() function returns the largest item in an iterable or the largest of two or more arguments.",
    Link: "https://www.freecodecamp.org/news/python-function-guide-with-examples/",
  },
  {
    Question: "In Python, which of these is not a keyword?",
    Answer: "forward",
    Distractor1: "if",
    Distractor2: "return",
    Distractor3: "for",
    Explanation:
      "The words if, return, and for, are Python keywords but forward is not a Python keyword. Python keywords are reserved words, so they cannot be used as variable names, function names, or any other identifiers in a Python program. ",
    Link: "https://forum.freecodecamp.org/t/python-keywords-a-guide-with-examples/19188",
  },
  {
    Question:
      "In Python, what built-in data structure can store key-value pairs? ",
    Answer: "Dictionary",
    Distractor1: "List",
    Distractor2: "Boolean",
    Distractor3: "String",
    Explanation:
      "A dictionary can store key-value pairs, which are pairs of associated values. We use the key to access its corresponding value in the dictionary. ",
    Link: "https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/",
  },
  {
    Question:
      "In Python, what method is used to remove a key-value pair from a dictionary and return its value?",
    Answer: ".pop()",
    Distractor1: ".push()",
    Distractor2: ".append()",
    Distractor3: ".insert()",
    Explanation:
      "The .pop() method is used to remove a key-value pair from the dictionary and return the value.",
    Link: "https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/",
  },
  {
    Question: "In Python, what is the floor division operator?",
    Answer: "//",
    Distractor1: "/",
    Distractor2: "*",
    Distractor3: "**",
    Explanation:
      "The floor division operator in Python is //. This operator performs a mathematical division that rounds down to the nearest integer.",
    Link: "https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/",
  },
  {
    Question:
      "In Python, what value does a function return by default if it doesn't have a return statement?",
    Answer: "None",
    Distractor1: "0",
    Distractor2: "An empty string",
    Distractor3: "An empty list",
    Explanation:
      "Python functions return the special value of None if they do not have an explicit return statement.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-functions-in-python",
  },
  {
    Question: "In Python, what keyword is used to define a class?",
    Answer: "class",
    Distractor1: "def",
    Distractor2: "blueprint",
    Distractor3: "create",
    Explanation: "The class keyword is used in Python to define a class.",
    Link: "https://www.freecodecamp.org/news/learn-object-oriented-programming-with-python/",
  },
  {
    Question:
      "In Python, what built-in function returns the smallest item in an iterable or the smallest of two or more arguments?",
    Answer: "min()",
    Distractor1: "max()",
    Distractor2: "minimum()",
    Distractor3: "smallest)",
    Explanation:
      "The min() function returns the smallest item in an iterable or the smallest of two or more arguments.",
    Link: "https://www.freecodecamp.org/news/python-function-guide-with-examples/",
  },
  {
    Question:
      "In Python, what is the name of the exception raised when a name that you are referencing in the code doesn't exist?",
    Answer: "NameError",
    Distractor1: "KeyError",
    Distractor2: "IndexError",
    Distractor3: "TypeError",
    Explanation:
      "A NameError is raised in Python when a name that you are referencing in the code doesn't exist.",
    Link: "https://www.freecodecamp.org/news/exception-handling-python/",
  },
  {
    Question:
      "In Python, which one of these operators is used to raise a number to the power of an exponent? ",
    Answer: "**",
    Distractor1: "*",
    Distractor2: "^",
    Distractor3: "!",
    Explanation:
      "The power operator is ** in Python. We use it to raise the number on the left to the power of the exponent on the right. For example, 5 ** 3 means 5 raised to the power 3. The result would be 125.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
  },
  {
    Question:
      "In Python, what built-in function returns a number rounded to a given number of digits of precision after the decimal point?",
    Answer: "round()",
    Distractor1: "rounding()",
    Distractor2: "approximate()",
    Distractor3: "decimal()",
    Explanation:
      "The round() function returns a number rounded to a given number of digits of precision after the decimal point.",
    Link: "https://docs.python.org/3/library/functions.html#round",
  },
  {
    Question: "In Python, what do you use to write comments?",
    Answer: "#",
    Distractor1: "!",
    Distractor2: "//",
    Distractor3: "/* */",
    Explanation:
      "Everything after the # symbol is considered a comment in Python and therefore is not executed.",
    Link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#comment-",
  },
  {
    Question:
      "In Python, non-empty sequences, non-empty collections, and numerical values different from 0 are...",
    Answer: "Truthy",
    Distractor1: "Falsy",
    Distractor2: "TRUENESS",
    Distractor3: "FALSENESS",
    Explanation:
      "Non-empty sequences, collections, and numerical values different from 0 are truthy values.",
    Link: "https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/",
  },
  {
    Question:
      "In Python, which built-in function is used for taking user input?",
    Answer: "input()",
    Distractor1: "in()",
    Distractor2: "user()",
    Distractor3: "receive()",
    Explanation: "The input() function is used to take user input in Python.",
    Link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/",
  },
  {
    Question: "In Python, how can you create an empty list?",
    Answer: "[]",
    Distractor1: "dict()",
    Distractor2: "??",
    Distractor3: "(())",
    Explanation:
      "You can create an empty list with [] or with list() in Python.",
    Link: "https://www.freecodecamp.org/news/python-empty-list-tutorial-how-to-create-an-empty-list-in-python/",
  },
  {
    Question:
      "In Python, what is the name of the exception raised when an operation or function is applied to an object of an inappropriate type? ",
    Answer: "TypeError",
    Distractor1: "NameError",
    Distractor2: "KeyError",
    Distractor3: "IndexError",
    Explanation:
      "A TypeError is raised in Python when an operation or function is applied to an object of an inappropriate type. ",
    Link: "https://www.freecodecamp.org/news/exception-handling-python/",
  },
  {
    Question:
      "In Python, what function returns True if any element of the iterable evaluates to True?",
    Answer: "any()",
    Distractor1: "all()",
    Distractor2: "none()",
    Distractor3: "one()",
    Explanation:
      "The any() function returns True if any element of the iterable passed as an argument evaluates to True. Else, it returns False.",
    Link: "https://www.freecodecamp.org/news/python-any-and-all-functions-explained-with-examples/",
  },
  {
    Question: "In Python, how can you write a “Hello, World” program?",
    Answer: "print(“Hello, World!”)",
    Distractor1: "console.log(“Hello, World!”)",
    Distractor2: "show(“Hello, World!”)",
    Distractor3: "console(“Hello, World!”)",
    Explanation:
      "In Python, we use the built-in print() function to print a value to the console. We pass the value as an argument within parentheses. ",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-hello-world-program-in-python",
  },
  {
    Question: "In Python, how do you define a variable?",
    Answer: "<variable_name> = <value>",
    Distractor1: "<value> = <variable_name>",
    Distractor2: "<value> <= <variable_name>",
    Distractor3: "<variable_name> <= <value>",
    Explanation:
      "In Python, we define a variable with <variable_name> = <value>.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/",
  },
  {
    Question:
      "In Python, string literals prefixed with 'f' or 'F' are commonly called...",
    Answer: "f-strings",
    Distractor1: "strings-f",
    Distractor2: "p-string",
    Distractor3: "x-string",
    Explanation:
      "f-strings are string literals prefixed with 'f' and 'F' in Python.",
    Link: "https://www.freecodecamp.org/news/python-f-strings-tutorial-how-to-use-f-strings-for-string-formatting/",
  },
  {
    Question: "In Python, what is the modulo operator?",
    Answer: "%",
    Distractor1: "//",
    Distractor2: "/",
    Distractor3: "^",
    Explanation:
      "The modulo operator in Python is %. It returns the remainder of dividing the left hand operand by right hand operand.",
    Link: "https://www.freecodecamp.org/news/the-python-modulo-operator-what-does-the-symbol-mean-in-python-solved/",
  },
  {
    Question:
      "In Python, what function can you call to get interactive help on writing Python programs and using Python modules?",
    Answer: "help()",
    Distractor1: "please()",
    Distractor2: "helpme()",
    Distractor3: "assistance()",
    Explanation:
      "The help() function can be called in Python to get interactive help on writing Python programs and using Python modules.",
    Link: "https://docs.python.org/3/library/functions.html#help",
  },
  {
    Question:
      "In Python, what logical operator returns True if any of the operands are True?",
    Answer: "or",
    Distractor1: "and",
    Distractor2: "not",
    Distractor3: "console",
    Explanation:
      "The or operator returns True if any of the operands is True. ",
    Link: "https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/",
  },
  {
    Question:
      "In Python, what keyword is used to return a value from a function?",
    Answer: "return",
    Distractor1: "pass",
    Distractor2: "continue",
    Distractor3: "break",
    Explanation:
      "The return keyword is used to return a value from a function.This terminates the execution of the function to return the value.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-functions-in-python",
  },
  {
    Question:
      "In Python, which one of these operators has the highest precedence?",
    Answer: "**",
    Distractor1: "/",
    Distractor2: "*",
    Distractor3: "and",
    Explanation:
      "The exponentiation operator ** has the highest precedence of these four options.",
    Link: "https://docs.python.org/3/reference/expressions.html#operator-precedence",
  },
  {
    Question: "In Python, what is the “less than” operator?",
    Answer: "<",
    Distractor1: ">",
    Distractor2: "<=",
    Distractor3: ">=",
    Explanation:
      "The “less than” operator is < in Python. It returns True if the value on the left is less than the value on the right. We can also use it to compare strings in alphabetical order.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
  },
  {
    Question:
      "In Python, what is the name of the exception raised when you try to divide by zero?",
    Answer: "ZeroDivisionError",
    Distractor1: "TypeError",
    Distractor2: "NameError",
    Distractor3: "KeyError",
    Explanation:
      "A ZeroDivisionError is raised in Python when you try to divide by zero.",
    Link: "https://www.freecodecamp.org/news/exception-handling-python/",
  },
  {
    Question:
      "In Python, what logical operator returns True if the operand is False?",
    Answer: "not",
    Distractor1: "and",
    Distractor2: "or",
    Distractor3: "array",
    Explanation:
      "The not operator returns True if the operand is False and False if the operand is True.",
    Link: "https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/",
  },
  {
    Question: "In Python, what function can you call to open a file?",
    Answer: "open()",
    Distractor1: "read()",
    Distractor2: "extend()",
    Distractor3: "print()",
    Explanation: "The open() function opens a file in a Python program. ",
    Link: "https://www.freecodecamp.org/news/python-write-to-file-open-read-append-and-other-file-handling-functions-explained/",
  },
  {
    Question:
      "In Python, what module provides access to the mathematical functions defined by the C standard?",
    Answer: "math",
    Distractor1: "functions",
    Distractor2: "algebra",
    Distractor3: "calculus",
    Explanation:
      "The math module provides access to the mathematical functions defined by the C standard in Python.",
    Link: "https://docs.python.org/3/library/math.html#module-math",
  },
  {
    Question:
      "In Python, the integer used to refer to a character in a string or an element in a list or tuple is known as an...",
    Answer: "index",
    Distractor1: "integer",
    Distractor2: "location",
    Distractor3: "position",
    Explanation:
      "Strings, lists, tuples, and other sequences in Python have indices, which are integers used to refer to its elements. ",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-data-types-and-built-in-data-structures-in-python",
  },
  {
    Question:
      'In Python, how can you check if the key "Nora" is in the "names" dictionary?',
    Answer: '"Nora" in names',
    Distractor1: 'names in "Nora"',
    Distractor2: '"Nora" is in names',
    Distractor3: 'names is in "Nora"',
    Explanation:
      'To check if a key is in a dictionary, first we write the key followed by in and then the name of the dictionary. In this case, the correct option is "Nora" in names.',
    Link: "https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/",
  },
  {
    Question:
      "In Python, what method takes an iterable as an argument and adds the elements of that iterable to a list as individual elements?",
    Answer: ".extend()",
    Distractor1: ".append()",
    Distractor2: ".join()",
    Distractor3: ".add()",
    Explanation:
      "The .extend() method takes an iterable as an argument and adds the elements of that iterable to a list as individual elements.",
    Link: "https://www.freecodecamp.org/news/python-list-append-vs-python-list-extend/",
  },
  {
    Question: "In Python, are lists mutable or immutable?",
    Answer: "Mutable",
    Distractor1: "Immutable",
    Distractor2: "Neither Mutable or Immutable",
    Distractor3: "Both Mutable and Immutable",
    Explanation:
      "Lists are mutable built-in data structures in Python. This means that you can add new elements to a list, update the elements of a list, and remove elements from a list.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-data-types-and-built-in-data-structures-in-python",
  },
  {
    Question:
      "In Python, what function returns True if all the elements of an iterable evaluate to True?",
    Answer: "all()",
    Distractor1: "any()",
    Distractor2: "none()",
    Distractor3: "zero()",
    Explanation:
      "The all() function returns True if all the elements of the iterable passed as an argument evaluate to True. Else, it returns False.",
    Link: "https://www.freecodecamp.org/news/python-any-and-all-functions-explained-with-examples/",
  },
  {
    Question:
      "In Python, what function can you use to transform a number represented as a string into an integer?",
    Answer: "int()",
    Distractor1: "float()",
    Distractor2: "complex()",
    Distractor3: "bin()",
    Explanation:
      "The int() function takes a string as an argument and returns an integer.",
    Link: "https://www.freecodecamp.org/news/how-to-convert-strings-into-integers-in-python/",
  },
  {
    Question: "In Python, what is the “greater than or equal to” operator?",
    Answer: ">=",
    Distractor1: ">",
    Distractor2: "<",
    Distractor3: "<=",
    Explanation:
      "The “greater than or equal to” operator is >= in Python. It returns True if the value on the left is greater than or equal to the value on the right. We can also use it to compare strings in alphabetical order.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
  },
  {
    Question: "In Python, the first index of a sequence is...",
    Answer: "0",
    Distractor1: "1",
    Distractor2: "-1",
    Distractor3: "2",
    Explanation: "The first index of a sequence in Python is 0.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-data-types-and-built-in-data-structures-in-python",
  },
  {
    Question: "In Python, what keyword is used to define a function?",
    Answer: "def",
    Distractor1: "class",
    Distractor2: "if",
    Distractor3: "return",
    Explanation: "The def keyword is used to define a function in Python.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-functions-in-python",
  },
  {
    Question: "In Python, strings are...",
    Answer: "Immutable",
    Distractor1: "Mutable",
    Distractor2: "Maintainable",
    Distractor3: "Unstoppable",
    Explanation:
      "Strings are immutable, so we can’t update or remove their characters after they have been defined in the program. ",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-data-types-and-built-in-data-structures-in-python",
  },
  {
    Question: "Who created the Python programming language?",
    Answer: "Guido van Rossum",
    Distractor1: "Ada Lovelace",
    Distractor2: "Alan Turing",
    Distractor3: "Tim Berners-Lee",
    Explanation: "Guido van Rossum created the Python programming language.",
    Link: "https://en.wikipedia.org/wiki/Python_(programming_language)",
  },
  {
    Question:
      "In Python, which of the following operators is NOT a bitwise operator?",
    Answer: "%",
    Distractor1: "&",
    Distractor2: "|",
    Distractor3: "~",
    Explanation:
      "% is the modulo operator in Python. The operators &, |, and ~ are bitwise operators.",
    Link: "https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/",
  },
  {
    Question:
      "In Python, what is the data type of the value returned by the input() function?",
    Answer: "String",
    Distractor1: "Integer",
    Distractor2: "Boolean",
    Distractor3: "List",
    Explanation:
      "The built-in function input() always returns a string. If you need to work with this value as a different data type, you will need to convert it.",
    Link: "https://www.freecodecamp.org/news/python-function-guide-with-examples/",
  },
  {
    Question:
      "In Python, what built-in function returns a reverse iterator that allows you to iterate over the elements of an iterable in reverse order?",
    Answer: "reversed()",
    Distractor1: "sorted()",
    Distractor2: "reversing()",
    Distractor3: "backwards()",
    Explanation:
      "The reversed() function returns a reverse iterator that you can use to iterate over an iterable in reverse order.",
    Link: "https://docs.python.org/3/library/functions.html#reversed",
  },
  {
    Question: "In Python, the keys of a dictionary must be...",
    Answer: "Immutable",
    Distractor1: "Mutable",
    Distractor2: "Both will work",
    Distractor3: "Neither will work",
    Explanation: "The keys of a Python dictionary must be immutable.",
    Link: "https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/",
  },
  {
    Question:
      "In Python, it is recommended to write variable names in lowercase with words separated by...",
    Answer: "an underscore",
    Distractor1: "an asterisk",
    Distractor2: "a question mark",
    Distractor3: "a hash symbol",
    Explanation:
      "PEP 8, the Style Guide for Python Code, recommends writing variable names in lowercase with words separated by an underscore as necessary to improve readability.",
    Link: "https://www.python.org/dev/peps/pep-0008/#function-and-variable-names",
  },
  {
    Question:
      'In Python, which one of the following options prints "Hello, World!" without starting a new line at the end?',
    Answer: 'print("Hello, World!", end="")',
    Distractor1: 'print("Hello, World!")',
    Distractor2: 'print("Hello, World!", end="\\n")',
    Distractor3: 'print("Hello, World!", end="\\r")',
    Explanation:
      'Adding end="" as the second argument will print the string without adding a new line character at the end. An empty string will be used instead.',
    Link: "https://www.freecodecamp.org/news/python-new-line-and-how-to-python-print-without-a-newline/",
  },
  {
    Question: "What is the filename extension of a Python file?",
    Answer: ".py",
    Distractor1: ".js",
    Distractor2: ".html",
    Distractor3: ".p",
    Explanation: "Python files have a .py filename extension.",
    Link: "https://en.wikipedia.org/wiki/Python_(programming_language)",
  },
  {
    Question:
      "In Python, how many spaces are recommended per level of indentation?",
    Answer: "4",
    Distractor1: "10",
    Distractor2: "20",
    Distractor3: "300",
    Explanation:
      "In Python, it is recommended to use 4 spaces per level of indentation.",
    Link: "https://www.python.org/dev/peps/pep-0008/#indentation",
  },
  {
    Question: "In Python, the values of a dictionary can be...",
    Answer: "Immutable or Mutable",
    Distractor1: "only immutable",
    Distractor2: "only mutable",
    Distractor3: "Neither will work",
    Explanation:
      "The values of a Python dictionary can be either mutable or immutable. Both will work correctly. ",
    Link: "https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/",
  },
  {
    Question: "In Python, are tuples mutable or immutable?",
    Answer: "Immutable",
    Distractor1: "Mutable",
    Distractor2: "Neither Mutable or Immutable",
    Distractor3: "Both Mutable and Immutable",
    Explanation:
      "Tuples are immutable built-in data structures in Python. This means that you cannot add new elements to a tuple, you cannot update existing elements and you cannot remove elements from a tuple. ",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-data-types-and-built-in-data-structures-in-python",
  },
  {
    Question:
      "In Python, what built-in function allows you to iterate over multiple iterables in parallel by returning a tuple with an item from each one?",
    Answer: "zip()",
    Distractor1: "iterate()",
    Distractor2: "print()",
    Distractor3: "range()",
    Explanation:
      "The zip() function allows you to iterate over multiple iterables in parallel by returning a tuple with an item from each one.",
    Link: "https://www.freecodecamp.org/news/the-zip-function-in-python-explained-with-examples/",
  },

  {
    Question:
      "In Python, what is the name of the exception raised when the interpreter detects that the maximum recursion depth is exceeded?",
    Answer: "RecursionError",
    Distractor1: "IndexError",
    Distractor2: "Infinite Loop",
    Distractor3: "NameError",
    Explanation:
      "A RecursionError occurs when the interpreter detects that the maximum recursion depth is exceeded. This usually occurs when the recursive process never reaches the base case. ",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-functions-in-python",
  },
  {
    Question:
      "In Python, what operator is used to check if two values are equal?",
    Answer: "==",
    Distractor1: "=",
    Distractor2: "===",
    Distractor3: "!==",
    Explanation:
      "The == operator is used to check if two values are equal in Python. It returns True if the values are equal and False otherwise.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
  },
  {
    Question:
      "In Python, what operator is used in Python to concatenate strings?",
    Answer: "+",
    Distractor1: "*",
    Distractor2: "-",
    Distractor3: "/",
    Explanation:
      "When the operands are strings, the + operator concatenates them to create a new string. For example: “Hello” + “World” evaluates to 'HelloWorld'.",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators",
  },
  {
    Question: "In Python, which one of these options is a valid variable name?",
    Answer: "my_variable_59",
    Distractor1: "59my_variable",
    Distractor2: "my^_variable",
    Distractor3: "my_variable59%",
    Explanation:
      "Variable names in Python cannot start with a number, they must start with a letter or an underscore. They can only contain alphanumeric characters and underscores (A-Z, a-z, 0-9, and _).",
    Link: "https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-variable-definitions-in-python",
  },
  {
    Question:
      "In Python, what built-in function returns the length of a sequence?",
    Answer: "len()",
    Distractor1: "length()",
    Distractor2: "size()",
    Distractor3: "s()",
    Explanation:
      "The len() function returns the length (number of items) of an object.",
    Link: "https://docs.python.org/3/library/functions.html#len",
  },
  {
    Question: "In Python, what method adds an element to the end of a list?",
    Answer: ".append()",
    Distractor1: ".add()",
    Distractor2: ".join()",
    Distractor3: ".end()",
    Explanation:
      "The .append() method adds an element to the end of a list in Python.",
    Link: "https://www.freecodecamp.org/news/python-list-append-how-to-add-an-element-to-an-array-explained-with-examples/",
  },
  {
    Question:
      "In Python, what is the name of the exception raised in Python when you try to index a list, tuple, or string beyond the permitted boundaries?",
    Answer: "IndexError",
    Distractor1: "KeyError",
    Distractor2: "NameError",
    Distractor3: "TypeError",
    Explanation:
      "An IndexError is raised in Python when you try to index a list, tuple, or string beyond the permitted boundaries.",
    Link: "https://www.freecodecamp.org/news/exception-handling-python/",
  },
  {
    Question:
      "In Python, what module implements pseudo-random number generators for various distributions?",
    Answer: "random",
    Distractor1: "random_numbers",
    Distractor2: "generate",
    Distractor3: "random_nums",
    Explanation:
      "The random module implements pseudo-random number generators for various distributions.",
    Link: "https://docs.python.org/3/library/random.html",
  },
  {
    Question:
      "In Python, what built-in function returns a new sorted list from the items in an iterable?",
    Answer: "sorted()",
    Distractor1: "sorting()",
    Distractor2: "print()",
    Distractor3: "copy()",
    Explanation:
      "The sorted() function returns a new sorted list from the items in an iterable. ",
    Link: "https://www.freecodecamp.org/news/python-sort-list-how-to-order-by-descending-or-ascending/",
  },
  {
    Question:
      "In Python, what is the name of the exception raised when you try to access the value of a key that doesn't exist in a dictionary?",
    Answer: "KeyError",
    Distractor1: "IndexError",
    Distractor2: "NameError",
    Distractor3: "TypeError",
    Explanation:
      "A KeyError is raised in Python when you try to access the value of a key that doesn't exist in a dictionary.",
    Link: "https://www.freecodecamp.org/news/exception-handling-python/",
  },
  {
    Question:
      "In Python, how can you cast a value of any data type into a string?",
    Answer: "Using the str() function",
    Distractor1: "Using the int() function",
    Distractor2: "Using the string() function",
    Distractor3: "Using the integer() function",
    Explanation:
      "The str() function converts a value of any data type into a string.",
    Link: "https://www.freecodecamp.org/news/learn-typecasting-in-python-in-five-minutes-90d42c439743/",
  },
  {
    Question:
      "In Python, a value that evaluates to False in a boolean context is known as...",
    Answer: "Falsy",
    Distractor1: "FALSENESS",
    Distractor2: "Truth",
    Distractor3: "Truthy",
    Explanation:
      "A value that evaluates to False in a boolean context is known as a falsy value.",
    Link: "https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/",
  },
  {
    Question:
      "In Python, if you try to access a key that does not exist in a dictionary, you will get a...",
    Answer: "KeyError",
    Distractor1: "Spelling Error",
    Distractor2: "ValueError",
    Distractor3: "TypeError",
    Explanation:
      "If you try to access a key that does not exist in a Python dictionary, you will get a KeyError.",
    Link: "https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/",
  },
  {
    Question:
      "In Python, what function returns the string representing a character whose Unicode code point is the integer passed as an argument?",
    Answer: "chr()",
    Distractor1: "ord()",
    Distractor2: "str()",
    Distractor3: "code()",
    Explanation:
      "The chr() function returns the string representing a character whose Unicode code point is the integer passed as an argument.",
    Link: "https://www.freecodecamp.org/news/python-function-guide-with-examples/",
  },
  {
    Question: "In Python, which one of these options is a valid comment?",
    Answer: "# This is a comment",
    Distractor1: "//! This is a comment",
    Distractor2: "* This is a comment",
    Distractor3: "///* This is a comment *///",
    Explanation:
      "In Python, we start a comment with a hash symbol #. A line that starts with this symbol will be interpreted as a comment in a Python program. ",
    Link: "https://forum.freecodecamp.org/t/how-to-comment-your-code-in-python-explained-with-examples/19220",
  },
];

export default pythonQuiz;