from dataclasses import dataclass


def scope_test():
    def do_local():
        spam = "local spam"
        del spam

    def do_nonlocal():
        nonlocal spam
        spam = "nonlocal spam"

    def do_global():
        global spam
        spam = "global spam"

    spam = "test spam"
    do_local()
    print("After local assignment:", spam)
    do_nonlocal()
    print("After nonlocal assignment:", spam)
    do_global()
    print("After global assignment:", spam)


scope_test()
print("In global scope:", spam)


class Employee:
    'Common base class for all employees'
    empCount = 0

    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        Employee.empCount += 1

    def displayCount(self):
        print("Total Employee : %d" % Employee.empCount)

    def displayEmployee(self):
        print("Name : ", self.name,  ", Salary: ", self.salary)


duke = Employee("Duke", 10)
toro = Employee("Toro", 999)


duke.displayEmployee()
toro.displayEmployee()
duke.displayCount()

print(("Employee.__doc__:", Employee.__doc__))
print("Employee.__name__:", Employee.__name__)
print("Employee.__module__:", Employee.__module__)
print("Employee.__bases__:", Employee.__bases__)
print("Employee.__dict__:", Employee.__dict__)


class Parent:        # define parent class
    parentAttr = 100

    def __init__(self):
        print("Calling parent constructor")

    def parentMethod(self):
        print('Calling parent method')

    def setAttr(self, attr):
        Parent.parentAttr = attr

    def getAttr(self):
        print("Parent attribute :", Parent.parentAttr)

    def take(self):
        print("hey kid, you should obey")


class Child(Parent):  # define child class
    def __init__(self):
        print("Calling child constructor")

    def childMethod(self):
        print('Calling child method')

    def talk(self):
        print("Child say, hey dada , hey mama")

    def talk(self, to="mama"):
        print("Child say, hey : " + to)


c = Child()          # instance of child
c.childMethod()      # child calls its method
c.parentMethod()     # calls parent's method
c.talk()

c.setAttr(200)       # again call parent's method
c.getAttr()          # again call parent's method


@dataclass
class Employee:
    name: str
    dept: str
    salary: int

john = Employee("Duke","Software",123)
print(john)
