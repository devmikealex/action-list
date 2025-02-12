import { Table2, Column, Cell } from '@blueprintjs/table'
import { UserActions } from '../types/types'
import { formatDate } from '../utils/formatDate'

const Table = ({ data }: { data: UserActions[] }) => {
  return (
    <Table2 numRows={data.length} defaultColumnWidth={300}>
      <Column name="Name" cellRenderer={row => <Cell>{data[row].username}</Cell>} />
      <Column name="Action" cellRenderer={row => <Cell>{data[row].action}</Cell>} />
      <Column name="Date/Time" cellRenderer={row => <Cell>{formatDate(data[row].action_created_at)}</Cell>} />
    </Table2>
  )
}

export default Table
