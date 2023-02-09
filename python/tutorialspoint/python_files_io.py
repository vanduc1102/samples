print("Current file name: ", __file__)

file = open(__file__, "r")

print(__file__, ":\n", file.read())


# Open a file
fo = open(__file__, "r+")
str = fo.read(10)
print("Read String is : ", str)
fo.close()


def KelvinToFahrenheit(Temperature):
    assert (Temperature >= 0), "Colder than absolute zero!"
    return ((Temperature-273)*1.8)+32


print(KelvinToFahrenheit(273))
print(int(KelvinToFahrenheit(505.78)))
print(KelvinToFahrenheit(-5))

