import { MdOutlineModeEdit, MdDeleteOutline } from 'react-icons/md'
import format from "./utils/format"
import formatDate from './utils/formatDate'

const TransactionRow = ({ data, lang, edit }) => {
    console.log(edit)
    return (
        <article className="transaction-row flex-row-sb">
            <img src={data.image} alt="" />
            <div className="info flex-row-sb">
                <h3>{formatDate(data.date)}</h3>
                <h3>{data.description}</h3>
                <h3
                    className={data.type === 'expenses' && 'expenses'}
                >
                    {format(data.amount, lang)}
                </h3>
            </div>
            {edit && <div>
                <MdOutlineModeEdit />
                <MdDeleteOutline />
            </div>}
        </article>
    )
}

export default TransactionRow