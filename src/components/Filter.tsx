import { InputGroup, Button } from '@blueprintjs/core'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, clearFilter } from '../store/filtersSlice'
import { RootState } from '../store/store'

type Props = {
  column: string
  placeholder: string
}

const Filter = ({ column, placeholder }: Props) => {
  const dispatch = useDispatch()
  const filters = useSelector((state: RootState) => state.filters)

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ column, value: e.target.value }))
  }

  const handleClear = () => {
    dispatch(clearFilter(column))
  }

  return (
    <InputGroup
      placeholder={placeholder}
      value={filters[column as keyof typeof filters]}
      onChange={handleFilterChange}
      rightElement={<Button icon="cross" minimal onClick={handleClear} />}
    />
  )
}

export default Filter
