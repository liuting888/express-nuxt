// 连接池
const mysql = require('mysql')
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'liuting110',
  database: 'koasql'
})
const query = function (sql, options, callback) {
  pool.getConnection(function (err, conn) {
    if (err) {
      callback(err, null, null)
    } else {
      conn.query(sql, options, function (err, results, fields) {
        // 释放连接
        conn.release()
        // 事件驱动回调
        callback(err, results, fields)
      })
    }
  })
}
module.exports = query
