export type UserActions = {
  username: string
  action: string
  action_created_at: string
}

export type Filters = Omit<UserActions, 'action_created_at'>
