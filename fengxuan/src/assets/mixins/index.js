const mychekgetbs = {
    computed: {
        activenum: {
            get() {
                return this.active;
            },
            set(v) {
                this.setActive(v);
            },
        },
    }
}

export const mymixin={
    mychekgetbs
}