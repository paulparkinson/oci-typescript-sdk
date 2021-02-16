/**
 * Application Migration API
 * Application Migration simplifies the migration of applications from Oracle Cloud Infrastructure Classic to Oracle Cloud Infrastructure.
You can use Application Migration API to migrate applications, such as Oracle Java Cloud Service, SOA Cloud Service, and Integration Classic
instances, to Oracle Cloud Infrastructure. For more information, see
[Overview of Application Migration](/iaas/application-migration/appmigrationoverview.htm).

 * OpenAPI spec version: 20191031
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Resource object that can be used to pass details about any list of resources associated with Migrations. The List of resources are added to ConfigurationField to add the capability to pass lists of resources of any type and group.
 */
export interface ResourceField {
  /**
   * The display name of the resource field.
   */
  "name"?: string;
  /**
   * The name of the group to which this field belongs to.
   */
  "group"?: string;
  /**
   * The type of the resource field.
   */
  "type": string;
  /**
   * The value of the field.
   */
  "value": string;
}

export namespace ResourceField {
  export function getJsonObj(obj: ResourceField): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}