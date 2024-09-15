export type Expense = {
  id: string;
  expenseName: string;
  amount: number;
  category: string;
  date: ValueDatePicker;
};

export type DraftExpense = Omit<Expense, "id">;

type ValuePiece = Date | null;

export type ValueDatePicker = ValuePiece | [ValuePiece, ValuePiece];

export type Category = {
  id: string;
  name: string;
  icon: string;
};
