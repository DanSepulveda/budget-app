const pool = require('../config/database')

const transactionControllers = {
    createTransaction: async (req, res) => {
        const { description, type, amount, date, category_id } = req.body
        try {
            await pool.query('CREATE TABLE IF NOT EXISTS transactions (id INT AUTO_INCREMENT PRIMARY KEY, description VARCHAR(50) NOT NULL, type VARCHAR(10) NOT NULL, amount INT(50) NOT NULL, date DATE NOT NULL, category_id SMALLINT(2) NOT NULL)')
            console.log('3')
            let transaction = await pool.query(`INSERT INTO transactions VALUES (NULL, '${description}', '${type}', '${amount}', '${date}', '${category_id}')`)
            console.log('4')
            res.json({ success: true, response: transaction })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getTransaction: async (req, res) => {
        try {
            let transaction = await pool.query(`SELECT * from transactions WHERE id=${req.params.id}`)
            res.json({ success: true, response: transaction })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    editTransaction: async (req, res) => {

    },
    deleteTransaction: async (req, res) => {
        try {
            await pool.query(`DELETE FROM transactions WHERE id='${req.params.id}'`)
            res.json({ success: true })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getAllTransactions: async (req, res) => {
        try {
            let transactions = await pool.query('SELECT transactions.id, transactions.description, transactions.type, transactions.amount, transactions.date, transactions.category_id as category, categories.name, categories.nombre, categories.image from transactions INNER JOIN categories ON category_id=categories.id')
            res.json({ success: true, response: transactions })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getTransactionsPerType: async (req, res) => {
        try {
            let transactions = await pool.query(`SELECT transactions.id, transactions.description, transactions.type, transactions.amount, transactions.date, transactions.category_id as category, categories.name, categories.nombre, categories.image from transactions INNER JOIN categories ON category_id=categories.id WHERE transaction.type="${req.params.type}"`)
            res.json({ success: true, response: transactions })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    reset: async (req, res) => {
        try {
            await pool.query('DROP TABLE transactions')
            res.json({ success: true })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getResume: async (req, res) => {
        try {
            const expenses = await pool.query('SELECT SUM(amount) AS sum, COUNT(amount) AS count FROM transactions WHERE type="expenses"')
            const incomes = await pool.query('SELECT SUM(amount) AS sum, COUNT(amount) AS count FROM transactions WHERE type="incomes"')
            const resume = incomes[0].sum - expenses[0].sum
            res.json({ success: true, response: { expenses: expenses[0], incomes: incomes[0], resume } })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    }
}

module.exports = transactionControllers