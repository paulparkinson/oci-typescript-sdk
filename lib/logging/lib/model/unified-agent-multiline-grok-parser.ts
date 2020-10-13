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
 * Multiline grok parser.
 */
export interface UnifiedAgentMultilineGrokParser extends model.UnifiedAgentParser {
  "grokNameKey"?: string;
  "grokFailureKey"?: string;
  "multiLineStartRegexp"?: string;
  "patterns"?: Array<model.GrokPattern>;

  "parserType": string;
}

export namespace UnifiedAgentMultilineGrokParser {
  export function getJsonObj(
    obj: UnifiedAgentMultilineGrokParser,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UnifiedAgentParser.getJsonObj(obj) as UnifiedAgentMultilineGrokParser)),
      ...{
        "patterns": obj.patterns
          ? obj.patterns.map(item => {
              return model.GrokPattern.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const parserType = "MULTILINE_GROK";
}
