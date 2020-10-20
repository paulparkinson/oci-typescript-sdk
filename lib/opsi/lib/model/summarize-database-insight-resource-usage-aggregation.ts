/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database 
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Resource usage summation for the current time period
 */
export interface SummarizeDatabaseInsightResourceUsageAggregation {
  /**
   * The start timestamp that was passed into the request.
   */
  "timeIntervalStart": Date;
  /**
   * The end timestamp that was passed into the request.
   */
  "timeIntervalEnd": Date;
  /**
   * Defines the type of resource metric (CPU, STORAGE)
   *
   */
  "resourceMetric": SummarizeDatabaseInsightResourceUsageAggregation.ResourceMetric;
  /**
   * Displays usage unit (CORES, GB)
   *
   */
  "usageUnit": model.UsageUnit;
  /**
   * Total amount used of the resource metric type (CPU, STORAGE).
   *
   */
  "usage": number;
  /**
   * The maximum allocated amount of the resource metric type  (CPU, STORAGE).
   *
   */
  "capacity": number;
  /**
   * Percentage change in resource usage during the current period calculated using linear regression functions
   */
  "usageChangePercent": number;
}

export namespace SummarizeDatabaseInsightResourceUsageAggregation {
  export enum ResourceMetric {
    Cpu = "CPU",
    Storage = "STORAGE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SummarizeDatabaseInsightResourceUsageAggregation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
