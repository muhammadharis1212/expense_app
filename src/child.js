import React from 'react';

function Child()
{
    return(

        <div className='container'>
            <h1 className='text-center'>Expense Tracker</h1>

            <h3>Your Balance <br/> $260</h3>

            <div className='ie_container'>
                <h3>INCOME<br/> $260</h3>
                <h3>EXPENSE<br/> $260</h3>
            </div>
            <h3>History</h3>
            <hr/>
            <ul className='transaction-list'>
                <li>
                    <span>Cash</span>
                    <span>+200</span>
                </li>
                <li>
                    <span>Cash</span>
                    <span>+200</span>
                </li>
                <li>
                    <span>Cash</span>
                    <span>+200</span>
                </li>
            </ul>
            <h3>Add New Transaction</h3>
            <hr/>
            
            <form className='transaction-form'>
                <label>Description</label><br/>
                <input type='text' required/><br/>
                <label>Description</label><br/>
                <input type='number' required/><br/>
                <input type='submit' value='Add Transaction'/>
            </form>

        </div>
        
    );
}
export default Child;