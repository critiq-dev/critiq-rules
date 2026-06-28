class EqualsNullCheckThisEqOnly {
    private String name;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (getClass() != o.getClass()) return false;
        EqualsNullCheckThisEqOnly other = (EqualsNullCheckThisEqOnly) o;
        return Objects.equals(name, other.name);
    }
}
