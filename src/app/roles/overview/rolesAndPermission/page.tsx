"use client";

import { useState } from "react";

import AdminNav from "~/components/AdminNav/AdminNav";
import DeleteInvitation from "~/components/modals/AdminRolesModals/deleteInvitationModal";
import RolesAndPermissionUtils from "~/components/rolesAndPermission/rolesAndPermissionUtils";
import Overview from "~/components/rolesComponents/overview";
import AdminSidebar from "~/components/sidebar/admin/admin-sidebar";
import PendingTable from "~/components/Table/pendingInvitationsTable";
import RoleTable from "~/components/Table/theRoleListTable";

const RolesAndPermission = () => {
  const [showPending, setShowPending] = useState(false);
  const [showDeletingInvitationModal, setShowDeletingInvitationModal] =
    useState(false);
  const [toViewNameOfRoles, setToViewNameOfRoles] = useState(false);
  const [openDeletedModal, setOpenDeletedModal] = useState(false);

  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [viewTitle, setViewTitle] = useState("");

  return (
    <div>
      <div>
        <AdminNav />
        <div className="flex">
          <AdminSidebar />
          <div className="w-full">
            <Overview
              title={viewTitle}
              showInviteModal={showInviteModal}
              setShowInviteModal={setShowInviteModal}
              showSuccess={showSuccess}
              setShowSuccess={setShowSuccess}
              setShowPending={setShowPending}
              showPending={showPending}
              toViewNameOfRoles={toViewNameOfRoles}
            />
            {toViewNameOfRoles ? (
              <div>
                <RoleTable />
              </div>
            ) : (
              <div>
                {showPending ? (
                  <PendingTable
                    setShowDeletingInvitationModal={
                      setShowDeletingInvitationModal
                    }
                    openDeletedModal={openDeletedModal}
                    setOpenDeletedModal={setOpenDeletedModal}
                  />
                ) : (
                  <RolesAndPermissionUtils
                    setToViewNameOfRules={setToViewNameOfRoles}
                    setViewTitle={setViewTitle}
                  />
                )}
                {showDeletingInvitationModal && (
                  <DeleteInvitation
                    setShowDeletingInvitationModal={
                      setShowDeletingInvitationModal
                    }
                    setOpenDeletedModal={setOpenDeletedModal}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesAndPermission;
