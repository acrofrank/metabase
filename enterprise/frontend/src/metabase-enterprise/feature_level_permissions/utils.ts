import { User } from "metabase-types/api";
import { PermissionSubject } from "metabase/admin/permissions/types";
import { t } from "ttag";

export const canAccessSettings = (user: User) =>
  canAccessDataModel(user) || canAccessDatabaseManagement(user);

export const canAccessDataModel = (user?: User) =>
  user?.can_access_data_model ?? false;

export const canAccessDatabaseManagement = (user?: User) =>
  user?.can_access_database_management ?? false;

export const getDataColumns = (subject: PermissionSubject) => {
  const allSubjectsColumns = [
    {
      name: t`Download results`,
      hint: t`If you grant someone permissions to download data from a database, you won't be able to schema or table level for native queries.`,
    },
    {
      name: t`Manage data model`,
    },
  ];

  if (subject === "schemas") {
    allSubjectsColumns.push({
      name: t`Manage database`,
    });
  }

  return allSubjectsColumns;
};
