const sql = () => {
    this.SQL = [];
};

sql.prototype.use = (mode) => {
    try {
        this.SQL.push(require(`./function/${mode}`));
    } catch (e) {
        console.error(e);
};

sql.prototype.add = (mode) => {
    this.SQL.push();
};

sql.prototype.table = (table) => {
    this.SQL.table(table);
    return this;
};

sql.prototype.