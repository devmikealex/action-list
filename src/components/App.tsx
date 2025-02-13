import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Filter from './Filter'
import Table from './Table'
import './App.css'
import { Card, Text } from '@blueprintjs/core'

export default function App() {
  const filters = useSelector((state: RootState) => state.filters)
  const data = useSelector((state: RootState) => state.data)

  const filteredData = data.filter(
    ({ username, action }) =>
      username.toLowerCase().includes(filters.username.toLowerCase()) &&
      action.toLowerCase().includes(filters.action.toLowerCase()),
  )

  return (
    <Card className="container">
      <h3 className="bp5-heading">User Action List</h3>
      
      <Card className="toolbar" compact>
        <Filter column="username" placeholder="Filter by username" />
        <Filter column="action" placeholder="Filter by action" />
        <Text>{`Total: ${filteredData.length} / ${data.length}`}</Text>
      </Card>

      <div className="table">
        <Table data={filteredData} />
      </div>
    </Card>
  )
}
