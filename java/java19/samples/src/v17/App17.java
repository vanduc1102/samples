package v17;

import java.util.Arrays;

public class App17 {
    public static void main(String args[]) {
        System.out.println("Hello, World!: " + Arrays.toString(args));
        System.out.println(checkObject(new Human("duke", 0, "dev")));
        Circle c = new Circle();
        System.out.println(checkObject(c));
    }

    static record Human(String name, int age, String profession) {
    }

    public static String checkObject(Object obj) {
        return switch (obj) {
            case Human h -> "Name: %s, age: %s and profession: %s".formatted(h.name(), h.age(), h.profession());
            case Circle c -> "This is a circle";
            case Shape s -> "It is just a shape";
            case null -> "It is null";
            default -> "It is an object";
        };
    }

    static class Shape {

        public Shape() {
        }

    }

    static class Circle extends Shape {

        public Circle() {
        }

    }

    static class Triangle extends Shape {

        public Triangle() {
        }

    }

}
