/* @flow */
import type { Sort, Visibility } from '../../types';

export type Project = {
  id: number,
  description: ?string,
  name: string,
};

export type ProjectState = {
  availables: Project[],
};

export type ProjectGetters = {
  projects: (projectState: ProjectState) => Project[],
};

export type ProjectQuery = {
  // Limit by archived status
  archived?: boolean,
  // Limit by visibility public, internal, or private
  visibility?: Visibility,
  // Return projects ordered by id, name, path, created_at, updated_at,
  // or last_activity_at fields. Default is created_at
  order_by?: string,
  // Return projects sorted in asc or desc order. Default is desc
  sort?: Sort,
  // Return list of projects matching the search criteria
  search?: string,
  // Return only the ID, URL, name, and path of each project
  simple?: boolean,
  // Limit by projects owned by the current user
  owned?: boolean,
  // Limit by projects that the current user is a member of
  membership?: boolean,
  // nclude project statistics
  statistics?: boolean,
  // Limit by enabled issues feature
  with_issues_enabled?: boolean,
  // Limit by enabled merge requests feature
  with_merge_requests_enabled?: boolean,
};
