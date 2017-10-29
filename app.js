/**
 * this module build with ireoo
 * create time: 2017 Year
 */


// main
const Sql = () => {
    this.SQL = [require(`./function/api`)];
    return this;
};

// use debug
Sql.prototype.debug = (debug) => {
    for (let i in this.SQL) {
        let Q = this.SQL[i];
        Q.debug(debug);
    }
    return this;
}

// basic
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

Sql.prototype.run = (cb = () => { }) => {
    for (let i in this.SQL) {
        let Q = this.SQL[i];
        Q.run(cb);
    }
    return this;
};

// params
Sql.prototype.where = (where) => {
    for (let i in this.SQL) {
        let Q = this.SQL[i];
        Q.where(where);
    }
    return this;
}

Sql.prototype.order = (order) => {
    for (let i in this.SQL) {
        let Q = this.SQL[i];
        Q.order(order);
    }
    return this;
}

Sql.prototype.limit = (limit) => {
    for (let i in this.SQL) {
        let Q = this.SQL[i];
        Q.limit(limit);
    }
    return this;
}

// command
Sql.prototype.insert = (data) => {
    for (let i in this.SQL) {
        let Q = this.SQL[i];
        Q.insert(data);
    }
    return this;
}

Sql.prototype.find = (data) => {
    for (let i in this.SQL) {
        let Q = this.SQL[i];
        Q.find(data);
    }
    return this;
}

Sql.prototype.findOne = (data) => {
    for (let i in this.SQL) {
        let Q = this.SQL[i];
        Q.findOne(data);
    }
    return this;
}

Sql.prototype.update = (data) => {
    for (let i in this.SQL) {
        let Q = this.SQL[i];
        Q.update(data);
    }
    return this;
}

Sql.prototype.remove = () => {
    for (let i in this.SQL) {
        let Q = this.SQL[i];
        Q.remove();
    }
    return this;
}

Sql.prototype.setiIndex = (data) => {
    for (let i in this.SQL) {
        let Q = this.SQL[i];
        Q.insert(data);
    }
    return this;
}

Sql.prototype.getIndex = () => {
    for (let i in this.SQL) {
        let Q = this.SQL[i];
        Q.getIndex();
    }
    return this;
}