const pool = require('../config/database')

const transactionControllers = {
    createTransaction: async (req, res) => {
        const { description, type, amount, date, category_id } = req.body
        try {
            await pool.query('CREATE TABLE IF NOT EXISTS transactions (id INT AUTO_INCREMENT PRIMARY KEY, description VARCHAR(50) NOT NULL, type VARCHAR(10) NOT NULL, amount INT(50) NOT NULL, date DATE NOT NULL, category_id SMALLINT(2) NOT NULL)')
            let transaction = await pool.query(`INSERT INTO transactions VALUES (NULL, '${description}', '${type}', '${amount}', '${date}', '${category_id}')`)
            res.status(200).json({ success: true, response: transaction.insertId })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getTransaction: async (req, res) => {
        try {
            let transaction = await pool.query(`SELECT * from transactions WHERE id=${req.params.id}`)
            res.status(200).json({ success: true, response: transaction })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    editTransaction: async (req, res) => {
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
            await pool.query(`UPDATE transactions SET ${query} WHERE id=${req.params.id}`)
            res.status(200).json({ success: true })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    deleteTransaction: async (req, res) => {
        try {
            await pool.query(`DELETE FROM transactions WHERE id='${req.params.id}'`)
            res.status(200).json({ success: true })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getTransactions: async (req, res) => {
        try {
            let query = req.params.query
            if (!isNaN(query)) {
                query = ` LIMIT ${query}`
            } else if (query === 'all') {
                query = null
            } else {
                throw new Error()
            }
            let transactions = await pool.query(`SELECT transactions.id, transactions.description, transactions.type, transactions.amount, transactions.date, transactions.category_id as category, categories.name, categories.nombre, categories.image from transactions INNER JOIN categories ON category_id=categories.id${query ? query : ''}`)
            res.status(200).json({ success: true, response: transactions })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getTransactionsPerType: async (req, res) => {
        try {
            let transactions = await pool.query(`SELECT transactions.id, transactions.description, transactions.type, transactions.amount, transactions.date, transactions.category_id as category, categories.name, categories.nombre, categories.image from transactions INNER JOIN categories ON category_id=categories.id WHERE transactions.type="${req.params.type}"`)
            res.status(200).json({ success: true, response: transactions })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    reset: async (req, res) => {
        try {
            await pool.query('DROP TABLE transactions')
            res.status(200).json({ success: true })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    getResume: async (req, res) => {
        try {
            const expenses = await pool.query('SELECT SUM(amount) AS sum, COUNT(amount) AS count FROM transactions WHERE type="expenses"')
            const incomes = await pool.query('SELECT SUM(amount) AS sum, COUNT(amount) AS count FROM transactions WHERE type="incomes"')
            const resume = incomes[0].sum - expenses[0].sum
            res.status(200).json({ success: true, response: { expenses: expenses[0], incomes: incomes[0], resume } })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    }
}

module.exports = transactionControllers