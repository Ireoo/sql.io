const mongodb = require('mongojs');

const SQL = () => {
    return this;
}

SQL.prototype.table = (table) => {

    return this;
};

SQL.prototype.sql = (sql) => {

    return this;
};

SQL.prototype.run = () => {
    let self = this;
    let sql = new Promise((res, err) => {

    });
    return sql;
};

exports = module.exports = SQL;