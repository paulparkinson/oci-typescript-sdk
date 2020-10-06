/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Child reference contains application configuration information.
 */
export interface ChildReference {
  /**
   * The reference's key, key of the object that is being used by a published object or its dependents.
   */
  "key"?: string;
  /**
   * The name of reference object.
   */
  "name"?: string;
  /**
   * The identifier of reference object.
   */
  "identifier"?: string;
  /**
   * The identifier path of reference object.
   */
  "identifierPath"?: string;
  /**
   * The description of reference object.
   */
  "description"?: string;
  /**
   * The type of the reference object.
   */
  "type"?: ChildReference.Type;
  /**
   * The new reference object to use instead of the original reference. For example, this can be a data asset reference.
   */
  "targetObject"?: any;
  /**
   * The aggregator key of the child reference object. For example, this can be a data asset key.
   */
  "aggregatorKey"?: string;
  /**
   * List of published objects where this is used.
   */
  "usedBy"?: Array<model.ReferenceUsedBy>;
}

export namespace ChildReference {
  export enum Type {
    OracledbConnection = "ORACLEDB_CONNECTION",
    OracleObjectStorageConnection = "ORACLE_OBJECT_STORAGE_CONNECTION",
    OracleAtpConnection = "ORACLE_ATP_CONNECTION",
    OracleAdwcConnection = "ORACLE_ADWC_CONNECTION",
    MysqlConnection = "MYSQL_CONNECTION",
    GenericJdbcConnection = "GENERIC_JDBC_CONNECTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ChildReference): object {
    const jsonObj = {
      ...obj,
      ...{
        "usedBy": obj.usedBy
          ? obj.usedBy.map(item => {
              return model.ReferenceUsedBy.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}