/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
 * OpenAPI spec version: 20190325
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
 * Custom Property Definition
 *
 */
export interface CustomProperty {
  /**
   * Unique data asset key that is immutable.
   */
  "key": string;
  /**
   * Display name of the custom property
   */
  "displayName"?: string;
  /**
   * Data type of the custom property
   */
  "dataType"?: model.CustomPropertyDataType;
  /**
   * Description for the custom property
   */
  "description"?: string;
  /**
   * Namespace name of the custom property
   */
  "namespaceName"?: string;
  /**
   * Is this property allowed to have list of values
   */
  "isListType"?: boolean;
  /**
   * If this field allows to sort from UI
   */
  "isSortable"?: boolean;
  /**
   * If this field allows to filter or create facets from UI
   */
  "isFilterable"?: boolean;
  /**
   * If this field allows multiple values to be set
   */
  "isMultiValued"?: boolean;
  /**
   * If this field is a hidden field
   */
  "isHidden"?: boolean;
  /**
   * If this field is a editable field
   */
  "isEditable"?: boolean;
  /**
   * If this field is defined by service or by a user
   */
  "isServiceDefined"?: boolean;
  /**
   * If this field is allowed to pop in search results
   */
  "isHiddenInSearch"?: boolean;
  /**
   * The current state of the custom property.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The date and time the custom property was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The last time that any change was made to the custom property. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  /**
   * OCID of the user who created the custom property.
   */
  "createdById"?: string;
  /**
   * OCID of the user who last modified the custom property.
   */
  "updatedById"?: string;
  /**
   * Total number of first class objects using this custom property
   */
  "usageCount"?: number;
  /**
   * Type or scope of the custom property belongs to. This will be an array of type id it will be belongs to
   *
   */
  "scope"?: Array<model.CustomPropertyTypeUsage>;
  /**
   * Allowed values for the custom property if any
   */
  "allowedValues"?: Array<string>;
  /**
   * A map of maps that contains the properties which are specific to the asset type. Each data asset type
   * definition defines it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * data assets have required properties within the \"default\" category.
   * Example: `{\"properties\": { \"default\": { \"host\": \"host1\", \"port\": \"1521\", \"database\": \"orcl\"}}}`
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
}

export namespace CustomProperty {
  export function getJsonObj(obj: CustomProperty): object {
    const jsonObj = {
      ...obj,
      ...{
        "scope": obj.scope
          ? obj.scope.map(item => {
              return model.CustomPropertyTypeUsage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
