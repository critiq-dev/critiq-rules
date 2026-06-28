class EqualsNullCheckGetClass {
    private String name;

    @Override
    public boolean equals(Object o) {
        if (getClass() != o.getClass()) return false;
        EqualsNullCheckGetClass other = (EqualsNullCheckGetClass) o;
        return Objects.equals(name, other.name);
    }
}
