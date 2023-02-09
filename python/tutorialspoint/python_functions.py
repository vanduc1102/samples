
def print_info(name, age=35):
    print("Name: ", name)
    print("Age: ", age)
    return


print_info(age=50, name="Duck")
print_info(name="Niki")


def print_variable_length_args(*var_args_tuple):
    "this is demo of function with variable length of args"
    print(var_args_tuple)
    return


print(print_variable_length_args(1, 1, 2, 2, 3, 3, 3, 3))
print_variable_length_args(2, 2, 2, 2, 2, 2, 2, 2)


def sum(a, b): return a+b


print("Value of total : ", sum(10, 11))

total = 99  # This is global variable.


def sum(arg1, arg2):
    global total
    total = arg1 + arg2 + total  # Here total is local variable
    print("Inside the function local total : ", total)
    return total


sum(11, 22)


def do_count():
    "This is an example of Closure in Python3"
    count = 0

    def increment():
        nonlocal count
        count = count + 1
        return count

    return increment


increment = do_count()

print(increment())
print(increment())
print(increment())
print(increment())
