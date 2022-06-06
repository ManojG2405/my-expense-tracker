import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item_description'>
                <h2>{props.title}</h2>
                <div className='expense-item_cost'>Rs. {props.amount}</div>
            </div>
        
        </Card>
    );
}
export default ExpenseItem;

//21.58 Video 10