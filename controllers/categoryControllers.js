const pool = require('../config/database')

const categoryControllers = {
    createCategory: async (req, res) => {
        const { name, type, image } = req.body
        try {
            await pool.query('CREATE TABLE IF NOT EXISTS categories (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20) NOT NULL, nombre VARCHAR(20) NOT NULL, type VARCHAR(10) NOT NULL, image VARCHAR(50) NOT NULL)')
            let category = await pool.query(`INSERT INTO categories VALUES (NULL, '${name}', '${type}', '${image}')`)
            res.json({ success: true, response: category })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getCategory: async (req, res) => {
        try {
            let category = pool.query(`SELECT * FROM categories WHERE id='${req.params.id}'`)
            res.json({ success: true, response: category })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    editCategory: async (req, res) => {

    },
    deleteCategory: async (req, res) => {
        try {
            await pool.query(`DELETE FROM cateogies WHERE id='${req.params.id}'`)
            res.json({ success: true })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getCategories: async (req, res) => {
        try {
            let categories = await pool.query('SELECT * from categories')
            res.json({ success: trualle, response: categories })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    reset: async (req, res) => {
        try {
            await pool.query('DROP TABLE categories')
            res.json({ success: true })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    }
}

module.exports = categoryControllers