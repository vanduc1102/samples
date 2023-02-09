
print("STRING 🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍")

str = "Hello World!"

print(str)
print(str[0])
print(str[2:5])
print(str[2:])
print(str * 2)
print(str + "TEST")

print("LIST 🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊LIST🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍")

list = ['abcd', 786, 2.23, 'john', 70.2]
tiny_list = [123, 'john']

print(list)
print(list[0])
print(list[1:3])
print(list[2:])
print(tiny_list * 2)
print(list + tiny_list)

print("TUPLE 🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍")

tuple=('abcd', 786, 2.23, 'john', 70.2)
tiny_tuple = (123, 'john')

print (tuple)
print (tuple[0])
print (tuple[1:3])
print (tuple[2:])
print( tiny_tuple * 2)
print ( tuple + tiny_tuple)

print("RANGE 🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍")

for i in range(1,50,10):
    print (i)

print("DICTIONARY 🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍")

dict = {}
dict['one'] = "This is one"
dict[2] = "This is two"

tiny_dict = { 'name':'john', 'code':786, 'dept':'sales'}

print(dict['one'])
print(dict[2])
print(tiny_dict)
print(tiny_dict.keys())
print(tiny_dict.values())


print("BOOLEAN 🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍😊😊🐍🐍😊😊🐍🐍🐍🐍")
a = True
print (a)

print (type(a))

a = 2
b = 4

print (bool(a==b))
