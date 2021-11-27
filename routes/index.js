const express = require('express')
const transactionControllers = require('../controllers/transactionControllers')
const categoryControllers = require('../controllers/categoryControllers')

const router = express.Router()

// TRANSACTIONS
router.route('/transactions')
    .post(transactionControllers.createTransaction)
    .get(transactionControllers.getAllTransactions)

router.route('/transactions/incomes')
    .get(transactionControllers.getIncomeTransactions)

router.route('/transactions/expenses')
    .get(transactionControllers.getExpensesTransactions)

router.route('/transaction/:id')
    .get(transactionControllers.getTransaction)
    .put(transactionControllers.editTransaction)
    .delete(transactionControllers.deleteTransaction)

// CATEGORIES
router.route('/categories')
    .post(categoryControllers.createCategory)
    .get(categoryControllers.getCategories)

router.route('/category/:id')
    .get(categoryControllers.getCategory)
    .put(categoryControllers.editCategory)
    .delete(categoryControllers.deleteCategory)

router.route('/reset')
    .post(categoryControllers.reset)

module.exports = router