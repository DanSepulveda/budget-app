const express = require('express')
const transactionControllers = require('../controllers/transactionControllers')
const categoryControllers = require('../controllers/categoryControllers')

const router = express.Router()

// TRANSACTIONS
router.route('/transactions')
    .post(transactionControllers.createTransaction)

router.route('/transactions/:query')
    .get(transactionControllers.getTransactions)

router.route('/transactions/cat/:type')
    .get(transactionControllers.getTransactionsPerType)

router.route('/transaction/:id')
    .get(transactionControllers.getTransaction)
    .put(transactionControllers.editTransaction)
    .delete(transactionControllers.deleteTransaction)

router.route('/transactions/resume')
    .get(transactionControllers.getResume)

router.route('/reset')
    .post(transactionControllers.reset)

router.route('/reset')
    .post(transactionControllers.reset)

// CATEGORIES
router.route('/categories')
    .post(categoryControllers.createCategory)
    .get(categoryControllers.getCategories)

router.route('/category/:id')
    .get(categoryControllers.getCategory)
    .put(categoryControllers.editCategory)
    .delete(categoryControllers.deleteCategory)

module.exports = router