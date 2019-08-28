// Transactions helper functions

export default class TransactionsHelper {
    static getTransactionsCount = incomeStreams => {
        let raw_transactions = [];
        let total_value;
        incomeStreams.forEach(income => {
          raw_transactions.push(income.number_of_transactions);
          total_value = raw_transactions.reduce((a, b) => a + b, 0);
        });
        return total_value;
    };

    static getTransactionValue = incomeStreams => {
        let raw_total = [];
        let total_amount;
        incomeStreams.forEach(income => {
          raw_total.push(income.transactions_value);
          total_amount = Math.round(raw_total.reduce((a, b) => a + b, 0));
        });
        return total_amount;
      };
}
