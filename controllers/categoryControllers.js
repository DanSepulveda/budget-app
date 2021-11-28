const pool = require('../config/database')

const categoryControllers = {
    createCategory: async (req, res) => {
        const { name, nombre, type, image } = req.body
        try {
            await pool.query('CREATE TABLE IF NOT EXISTS categories (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20) NOT NULL, nombre VARCHAR(20) NOT NULL, type VARCHAR(10) NOT NULL, image VARCHAR(50) NOT NULL)')
            await pool.query(`INSERT INTO categories VALUES (NULL, '${name}', '${nombre}', '${type}', '${image}')`)
            res.json({ success: true })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getCategory: async (req, res) => {
        try {
            let category = await pool.query(`SELECT * FROM categories WHERE id='${req.params.id}'`)
            res.json({ success: true, response: category })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    editCategory: async (req, res) => {
        const values = Object.entries(req.body)
        let query = ''
        values.forEach((value, index) => {
            if (index === values.length - 1) {
                query += `${value[0]}="${value[1]}"`
            } else {
                query += `${value[0]}="${value[1]}", `
            }
        })
        try {
            await pool.query(`UPDATE categories SET ${query} WHERE id=${req.params.id}`)
            res.json({ success: true })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    deleteCategory: async (req, res) => {
        try {
            await pool.query(`DELETE FROM categories WHERE id='${req.params.id}'`)
            res.json({ success: true })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getCategories: async (req, res) => {
        try {
            let categories = await pool.query('SELECT * from categories')
            res.json({ success: true, response: categories })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
}

module.exports = categoryControllers