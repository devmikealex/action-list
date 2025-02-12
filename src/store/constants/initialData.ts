import { UserActions } from '../../types/types'

export const initialData: UserActions[] = generateMock(1001)

function generateMock(length: number) {
  const usernames = ['user-001', 'user-002', 'user-003', 'user-004']
  const actions = ['logged_in', 'logged_out', 'action1', 'action2']
  const randomArray = []
  for (let i = 0; i < length; i++) {
    const randomObject = {
      username: usernames[Math.floor(Math.random() * usernames.length)],
      action: actions[Math.floor(Math.random() * actions.length)],
      action_created_at: getRandomDate(i),
    }
    randomArray.push(randomObject)
  }

  return randomArray
}

function getRandomDate(i: number) {
  const date = new Date('2020-01-01T00:00:00Z')
  date.setMinutes(date.getMinutes() + 5 * i)
  return date.toISOString()
}
