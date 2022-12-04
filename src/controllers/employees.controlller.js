import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    // throw new Error('DB error');
    const [rows] = await pool.query("select * from employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "select * from employee where id =?",
      req.params.id
    );

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Employee not found",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const postEmployees = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?,?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM employee where id =?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Employee not found",
      });

    res.sendstatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const putEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;
    const [result] = await pool.query(
      "update employee set name=IFNULL(?,name), salary=IFNULL(?,salary) where id=?",
      [name, salary, id]
    );

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Employee not found",
      });

    const [rows] = await pool.query("select * from employee where id =?", [id]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
