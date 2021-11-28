import { MdOutlineModeEdit, MdDeleteOutline } from 'react-icons/md'

const TransactionRow = ({ data }) => {
    return (
        <article className="transaction-row flex-row-sb">
            <img src="" alt="" />
            <div>
                <h3>{data.date}</h3>
                <h3>{data.description}</h3>
                <h3>{data.amount}</h3>
            </div>
            <div>
                <MdOutlineModeEdit />
                <MdDeleteOutline />
            </div>
        </article>
    )
}

export default TransactionRow