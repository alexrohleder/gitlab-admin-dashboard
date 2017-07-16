/* @flow */
export type Issue = {
  id: number,
  iid: number,
  project_id: number,
  title: string,
  description: ?string,
  state: 'closed' | 'opened',
  created_at: string,
  updated_at: string,
  labels: Array<string>,
  milestone: ?string,
  assignees: Array<Object>, // todo: Array<User>
  author: Object, // todo: User
  assignee: Object, // todo: User
  user_notes_count: number,
  upvotes: number,
  downvotes: number,
  due_date: ?string,
  confidential: boolean,
  web_url: string,
};

export type Label = {
  id: number,
  name: string,
  issues: Issue[],
};
