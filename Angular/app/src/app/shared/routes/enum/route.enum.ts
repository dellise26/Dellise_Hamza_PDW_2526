import { AppNode } from './node.enum';

export enum AppRoutes {
  AUTHENTICATED = `/${AppNode.AUTHENTICATED}`,
  MEMBER = `${AppRoutes.AUTHENTICATED}/${AppNode.MEMBER}`,
  MEMBER_DETAIL = `${AppRoutes.MEMBER}/detail/`,
  DVD = `${AppRoutes.AUTHENTICATED}/${AppNode.DVD}`,
  DVD_CREATE = `${AppRoutes.DVD}/create`,
  DVD_DETAIL = `${AppRoutes.DVD}/detail/`,
  DVD_EDIT = `${AppRoutes.DVD}/edit/`
}
