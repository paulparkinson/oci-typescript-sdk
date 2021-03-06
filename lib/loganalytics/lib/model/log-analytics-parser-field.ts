/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * LogAnalyticsParserField
 */
export interface LogAnalyticsParserField {
  "field"?: model.LogAnalyticsField;
  /**
   * parser field map Id Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "parserFieldId"?: number;
  /**
   * field expression
   */
  "parserFieldExpression"?: string;
  /**
   * field internal name
   */
  "parserFieldName"?: string;
  /**
   * internal name
   */
  "storageFieldName"?: string;
  /**
   * integrator name
   */
  "parserFieldIntegratorName"?: string;
  /**
   * parser internal name
   */
  "parserName"?: string;
  /**
   * sequence Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "parserFieldSequence"?: number;
  "parser"?: model.LogAnalyticsParser;
  /**
   * structured column information
   */
  "structuredColumnInfo"?: string;
}

export namespace LogAnalyticsParserField {
  export function getJsonObj(obj: LogAnalyticsParserField): object {
    const jsonObj = {
      ...obj,
      ...{
        "field": obj.field ? model.LogAnalyticsField.getJsonObj(obj.field) : undefined,

        "parser": obj.parser ? model.LogAnalyticsParser.getJsonObj(obj.parser) : undefined
      }
    };

    return jsonObj;
  }
}
