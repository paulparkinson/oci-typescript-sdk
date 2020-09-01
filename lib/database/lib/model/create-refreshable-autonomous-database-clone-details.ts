/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details to create an Oracle Autonomous Database refreshable clone.
 *
 */
export interface CreateRefreshableAutonomousDatabaseCloneDetails
  extends model.CreateAutonomousDatabaseBase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the source Autonomous Database that you will clone to create a new Autonomous Database.
   */
  "sourceId": string;
  /**
   * The refresh mode of the clone. AUTOMATIC indicates that the clone is automatically being refreshed with data from the source Autonomous Database.
   */
  "refreshableMode"?: CreateRefreshableAutonomousDatabaseCloneDetails.RefreshableMode;

  "source": string;
}

export namespace CreateRefreshableAutonomousDatabaseCloneDetails {
  export enum RefreshableMode {
    Automatic = "AUTOMATIC",
    Manual = "MANUAL"
  }

  export function getJsonObj(
    obj: CreateRefreshableAutonomousDatabaseCloneDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateAutonomousDatabaseBase.getJsonObj(
            obj
          ) as CreateRefreshableAutonomousDatabaseCloneDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const source = "CLONE_TO_REFRESHABLE";
}
