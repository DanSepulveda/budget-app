import { MdOutlineModeEdit, MdDeleteOutline } from 'react-icons/md'
import format from "./utils/format"
import formatDate from './utils/formatDate'

const TransactionRow = ({ data, lang }) => {
    return (
        <article className="transaction-row flex-row-sb">
            <img src={data.image} alt="" />
            <div className="info flex-row-sb">
                <h3>{formatDate(data.date)}</h3>
                <h3>{data.description}</h3>
                <h3>{format(data.amount, lang)}</h3>
            </div>
            {/* <div>
                <MdOutlineModeEdit />
                <MdDeleteOutline />
            </div> */}
        </article>
    )
}

export default TransactionRow