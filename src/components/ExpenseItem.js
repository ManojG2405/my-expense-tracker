import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>March 12th 2022</div>
            <div className='expense-item_description'>
                <h2>Helth Insurance</h2>
                <div className='expense-item_cost'>Rs.200</div>
            </div>
        </div>
    );
}
export default ExpenseItem;