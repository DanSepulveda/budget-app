const pool = require('../config/database')

const transactionControllers = {
    createTransaction: async (req, res) => {
        const { name, type, image } = req.body
        try {
            await pool.query('CREATE TABLE IF NOT EXISTS transactions (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20) NOT NULL, type VARCHAR(10) NOT NULL, image VARCHAR(50) NOT NULL)')
            let transaction = await pool.query(`INSERT INTO transactions VALUES (NULL, '${name}', '${type}', '${image}')`)
            res.json({ success: true, response: category })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getTransaction: async (req, res) => {

    },
    editTransaction: async (req, res) => {

    },
    deleteTransaction: async (req, res) => {

    },
    getAllTransactions: async (req, res) => {

    },
    getIncomeTransactions: async (req, res) => {

    },
    getExpensesTransactions: async (req, res) => {

    },
}

module.exports = transactionControllers