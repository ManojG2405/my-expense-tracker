import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item_description'>
                <h2>{props.title}</h2>
                <div className='expense-item_cost'>Rs.{props.amount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;