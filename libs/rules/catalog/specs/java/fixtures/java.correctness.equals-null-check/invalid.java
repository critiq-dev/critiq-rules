class EqualsNullCheckInvalid {
    private String name;

    @Override
    public boolean equals(Object o) {
        return this.name.equals(o.toString());
    }
}
