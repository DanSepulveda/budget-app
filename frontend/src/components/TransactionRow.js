import { MdOutlineModeEdit, MdDeleteOutline } from 'react-icons/md'

const TransactionRow = () => {
    return (
        <article className="transaction-row flex-row-sb">
            <img src="" alt="" />
            <div>
                <h3>fecha</h3>
                <h3>detalle</h3>
            </div>
            <div>
                <MdOutlineModeEdit />
                <MdDeleteOutline />
            </div>
        </article>
    )
}

export default TransactionRow