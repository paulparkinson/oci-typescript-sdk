/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about a push down operation.
 */
export interface PushDownOperation {
  "modelType": string;
}

export namespace PushDownOperation {
  export function getJsonObj(obj: PushDownOperation): object {
    const jsonObj = { ...obj, ...{} };

    if ("modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "QUERY":
          return model.Query.getJsonObj(<model.Query>(<object>jsonObj), true);
        case "SELECT":
          return model.Select.getJsonObj(<model.Select>(<object>jsonObj), true);
        case "JOIN":
          return model.Join.getJsonObj(<model.Join>(<object>jsonObj), true);
        case "SORT":
          return model.Sort.getJsonObj(<model.Sort>(<object>jsonObj), true);
        case "FILTER":
          return model.FilterPush.getJsonObj(<model.FilterPush>(<object>jsonObj), true);
        default:
          throw Error("Unknown value for: " + obj.modelType);
      }
    }
    return jsonObj;
  }
}
