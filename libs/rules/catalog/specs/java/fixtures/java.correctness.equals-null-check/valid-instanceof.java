class EqualsNullCheckInstanceof {
    private String name;

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof EqualsNullCheckInstanceof)) return false;
        EqualsNullCheckInstanceof other = (EqualsNullCheckInstanceof) o;
        return Objects.equals(name, other.name);
    }
}
