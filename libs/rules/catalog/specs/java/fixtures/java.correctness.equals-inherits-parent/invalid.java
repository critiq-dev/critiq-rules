class Parent {
    @Override
    public boolean equals(Object obj) {
        return false;
    }
}

class Child extends Parent {
    public boolean equals(Child c) {
        return false;
    }
}
