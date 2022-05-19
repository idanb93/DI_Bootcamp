import react from 'react';
import {connect} from 'react-redux';
import {insert_trx, update_trx} from '../redux/actions'

class TransactionForm extends react.Component {
    constructor(){
        super();
        this.state = {
            accountNumber: 0,
            FSC: 0,
            name: '',
            amount: 0,
        }
    }

    handleInputChange = (e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e)=> {

        e.preventDefault();
        if (this.props.currentIndex === -1){
            this.props.newTransaction(this.state);
        } else {
            this.props.updateTransaction(this.state);
        }

        this.setState({
            accountNumber: 0,
            FSC: 0,
            name: '',
            amount: 0,
        })
        
    }

    componentDidUpdate = (prevProps)=>{
        if (prevProps.currentIndex !== this.props.currentIndex && this.props.currentIndex !== -1){
            const trx = this.props.listOfTransactions[this.props.currentIndex];
            this.setState({
                accountNumber: trx.accountNumber || '',
                FSC: trx.FSC || '',
                name: trx.name || '',
                amount: trx.amount || '',
            })
        }
    }

    render(){
        return(
            <>
            <h1>Financial Transactions: </h1>
            <form style={{textAlign: 'left'}}>
                <input id={'account_number'}
                       type={'text'}
                       placeholder={'Account Number'}
                       onChange={this.handleInputChange}
                       name={'accountNumber'}
                       value={this.state.accountNumber}
                       >
                        
                </input>
                <br/>
                <input id={'fsc'}
                       type={'text'}
                       placeholder={'FSC'}
                       onChange={this.handleInputChange}
                       name={'FSC'}
                       value={this.state.FSC}
                       >

                </input>
                <br/>
                <input id={'name'}
                       type={'text'}
                       placeholder={'Name'}
                       onChange={this.handleInputChange}
                       value={this.state.name}
                       name={'name'}
                       >
                </input>
                <br/>
                <input id={'amount'}
                       type={'text'}
                       placeholder={'Amount'}
                       onChange={this.handleInputChange}
                       name={'amount'}
                       value={this.state.amount}
                       >

                </input>
                <br/>
                <input type='submit'
                        onClick={this.handleSubmit}
                        value={this.props.currentIndex === -1 ? 'Submit' : 'Update'}
                        />
                

            </form>
            </>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        listOfTransactions: state.list,
        currentIndex: state.currentIndex,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        newTransaction: (transaction)=>dispatch(insert_trx(transaction)),
        updateTransaction: (transaction)=>dispatch(update_trx(transaction))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);