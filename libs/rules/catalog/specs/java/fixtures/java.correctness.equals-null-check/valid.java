class EqualsNullCheckValid {
    private String name;

    @Override
    public boolean equals(Object o) {
        return o != null && this.name.equals(o.toString());
    }
}
