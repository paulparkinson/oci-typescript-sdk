/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, and delete log groups, log objects, and agent configurations.
 * OpenAPI spec version: 20200531
 *
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
 * Log object configuration.
 */
export interface Configuration {
  /**
   * The OCID of the compartment that the resource belongs to.
   */
  "compartmentId"?: string;
  "source": model.OciService;
  "archiving"?: model.Archiving;
}

export namespace Configuration {
  export function getJsonObj(obj: Configuration): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source ? model.Source.getJsonObj(obj.source) : undefined,
        "archiving": obj.archiving ? model.Archiving.getJsonObj(obj.archiving) : undefined
      }
    };

    return jsonObj;
  }
}
