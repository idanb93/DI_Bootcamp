import react from 'react';
import { connect } from 'react-redux';
import TransactionForm from './TransactionForm';
import {delete_trx, update_index} from '../redux/actions'

class TransactionList extends react.Component {

    constructor(props) {
        super(props);
    }

    render() {

        console.log('render of TransactionList: ', this.props.listOfTransactions);

        return (
            <>
                <div>
                    <TransactionForm />
                </div>

                <h1>Transactions List: </h1>
                <table style={{ border: '1px solid #ccc' }}>

                    <tr>
                        <td style={{ border: '1px solid #ccc' }}>Account Number: </td>
                        <td style={{ border: '1px solid #ccc' }}>FSC: </td>
                        <td style={{ border: '1px solid #ccc' }}>Name: </td>
                        <td style={{ border: '1px solid #ccc' }}>Amount: </td>
                    </tr>

                    {this.props.listOfTransactions.map((transaction, i) => (
                        <tr key={i}>
                            <td style={{ border: '1px solid #ccc' }}>{transaction.accountNumber}</td>
                            <td style={{ border: '1px solid #ccc' }}>{transaction.FSC}</td>
                            <td style={{ border: '1px solid #ccc' }}>{transaction.name}</td>
                            <td style={{ border: '1px solid #ccc' }}>{transaction.amount}</td>
                            <td>
                                <button onClick={()=>this.props.handleIndex(i)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={()=>this.props.handleDelete(i)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listOfTransactions: state.list,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (id) => dispatch(delete_trx(id)),
        handleIndex: (id) => dispatch(update_index(id)),
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);