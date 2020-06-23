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
 * The integration task published object.
 */
export interface PublishedObjectFromIntegrationTask extends model.PublishedObject {
  /**
   * An array of input ports.
   */
  "inputPorts"?: Array<model.InputPort>;
  /**
   * An array of output ports.
   */
  "outputPorts"?: Array<model.OutputPort>;
  /**
   * An array of parameters.
   */
  "parameters"?: Array<model.Parameter>;
  "opConfigValues"?: model.ConfigValues;
  "configProviderDelegate"?: model.ConfigProvider;
  "dataFlow"?: model.DataFlow;

  "modelType": string;
}

export namespace PublishedObjectFromIntegrationTask {
  export function getJsonObj(
    obj: PublishedObjectFromIntegrationTask,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PublishedObject.getJsonObj(obj) as PublishedObjectFromIntegrationTask)),
      ...{
        "inputPorts": obj.inputPorts
          ? obj.inputPorts.map(item => {
              return model.InputPort.getJsonObj(item);
            })
          : undefined,
        "outputPorts": obj.outputPorts
          ? obj.outputPorts.map(item => {
              return model.OutputPort.getJsonObj(item);
            })
          : undefined,
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.Parameter.getJsonObj(item);
            })
          : undefined,
        "opConfigValues": obj.opConfigValues
          ? model.ConfigValues.getJsonObj(obj.opConfigValues)
          : undefined,
        "configProviderDelegate": obj.configProviderDelegate
          ? model.ConfigProvider.getJsonObj(obj.configProviderDelegate)
          : undefined,
        "dataFlow": obj.dataFlow ? model.DataFlow.getJsonObj(obj.dataFlow) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "INTEGRATION_TASK";
}