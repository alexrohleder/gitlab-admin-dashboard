/* @flow */
import type Issue from '../issue/types';
import type { Sort, Visibility } from '../../types';

export type Group = {
  id: number,
  name: string,
  path: string,
  description: ?string,
  visibility: Visibility,
  lfs_enabled: boolean,
  avatar_url: ?string,
  web_url: string,
  request_access_enabled: boolean,
  full_name: string,
  full_path: string,
  parent_id: ?number,
  issues: Issue[],
};

export type GroupState = {
  groups: Group[],
  enabledIndex: number,
};

export type GroupGetters = {
  availables: (groupState: GroupState) => Group[],
  enabledGroup: (groupState: GroupState) => Group,
  enabledGroupIssues: (getters: GroupGetters, rootState: Object) => Object[],
  enabledGroupProjects: (getters: GroupGetters, rootState: Object) => Object[],
};

export type GroupQuery = {
  // Skip the group IDs passes
  skip_groups?: Number[],
  // Show all the groups you have access to
  all_available?: boolean,
  // Return list of authorized groups matching the search criteria
  search?: string,
  // Order groups by name or path. Default is name
  order_by?: string,
  // Order groups in asc or desc order. Default is asc
  sort?: Sort,
  // Include group statistics (admins only)
  statistics?: boolean,
  // Limit by groups owned by the current user
  owned?: boolean,
};

export type GroupIssueQuery = {
  // he ID or URL-encoded path of the group owned by the authenticated user
  id?: number | string,
  // Return all issues or just those that are opened or closed
  state?: 'closed' | 'opened',
  // Comma-separated list of label names, issues must have all labels to be returned.
  // No+Label lists all issues with no labels
  labels?: string,
  // Return only the issues having the given iid
  iid?: number[],
  // The milestone title
  milestone?: string,
  // Return requests ordered by created_at or updated_at fields. Default is created_at
  order_by?: string,
  // Return requests sorted in asc or desc order. Default is desc
  sort?: Sort,
  // Search group issues against their title and description
  search?: string,
};
