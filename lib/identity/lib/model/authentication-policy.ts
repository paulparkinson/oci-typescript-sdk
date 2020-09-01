/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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
 * Authentication policy, currently set for the given compartment
 *
 */
export interface AuthenticationPolicy {
  "passwordPolicy"?: model.PasswordPolicy;
  /**
   * Compartment OCID.
   */
  "compartmentId"?: string;
  "networkPolicy"?: model.NetworkPolicy;
}

export namespace AuthenticationPolicy {
  export function getJsonObj(obj: AuthenticationPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "passwordPolicy": obj.passwordPolicy
          ? model.PasswordPolicy.getJsonObj(obj.passwordPolicy)
          : undefined,

        "networkPolicy": obj.networkPolicy
          ? model.NetworkPolicy.getJsonObj(obj.networkPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
}
