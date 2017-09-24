const Sql = () => {
    this.SQL = [require(`./function/api`)];
    return this;
};

Sql.prototype.use = (mode) => {
    try {
        this.SQL = [require(`./function/${mode}`)];
    } catch (e) {
        console.error(e);
    }
    return this;
};

Sql.prototype.add = (mode) => {
    try {
        this.SQL.push(require(`./function/${mode}`));
    } catch (e) {
        console.error(e);
    }
    return this;
};

Sql.prototype.table = (table) => {
    for (let i in this.SQL) {
        let Q = this.SQL[i];
        Q.table(table);
    }
    return this;
};

Sql.prototype.sql = (sql) => {
    for (let i in this.SQL) {
        let Q = this.SQL[i];
        Q.sql(sql);
    }
    return this;
};

Sql.prototype.run = () => {
    for (let i in this.SQL) {
        let Q = this.SQL[i];
        Q.run();
    }
    return this;
};