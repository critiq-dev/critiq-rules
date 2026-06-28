class EqualsNullCheckYoda {
    private String name;

    @Override
    public boolean equals(Object o) {
        if (null == o) return false;
        return this.name.equals(o.toString());
    }
}
