class EqualsNullCheckObjectsEquals {
    private String name;

    @Override
    public boolean equals(Object o) {
        return Objects.equals(o, this.name);
    }
}
