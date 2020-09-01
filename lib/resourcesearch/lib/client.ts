/**
 * Search Service API
 * Search for resources in your cloud network.
 * OpenAPI spec version: 20180409
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as models from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ResourceSearchApiKeys {}

export class ResourceSearchClient {
  protected static serviceEndpointTemplate = "https://query.{region}.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    this._httpClient = params.httpClient || new common.FetchHttpClient(requestSigner);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20180409";
    if (this.logger) this.logger.info(`ResourceSearchClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      ResourceSearchClient.serviceEndpointTemplate,
      region
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      ResourceSearchClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Sets the client configuration for the client
   */
  public set clientConfiguration(clientConfiguration: common.ClientConfiguration) {
    this._clientConfiguration = clientConfiguration;
  }

  /**
   * Gets detailed information about a resource type by using the resource type name.
   *
   * @param GetResourceTypeRequest
   * @return GetResourceTypeResponse
   * @throws OciError when an error occurs
   */
  public async getResourceType(
    getResourceTypeRequest: requests.GetResourceTypeRequest
  ): Promise<responses.GetResourceTypeResponse> {
    if (this.logger) this.logger.debug("Calling operation ResourceSearchClient#getResourceType.");
    const pathParams = {
      "{name}": getResourceTypeRequest.name
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": getResourceTypeRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/resourceTypes/{name}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getResourceTypeRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetResourceTypeResponse>{},
        body: await response.json(),
        bodyKey: "resourceType",
        bodyModel: "model.ResourceType",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Lists all resource types that you can search or query for.
   *
   * @param ListResourceTypesRequest
   * @return ListResourceTypesResponse
   * @throws OciError when an error occurs
   */
  public async listResourceTypes(
    listResourceTypesRequest: requests.ListResourceTypesRequest
  ): Promise<responses.ListResourceTypesResponse> {
    if (this.logger) this.logger.debug("Calling operation ResourceSearchClient#listResourceTypes.");
    const pathParams = {};

    const queryParams = {
      "limit": listResourceTypesRequest.limit,
      "page": listResourceTypesRequest.page
    };

    let headerParams = {
      "opc-request-id": listResourceTypesRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/resourceTypes",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listResourceTypesRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListResourceTypesResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "ResourceType[]",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new async iterator which will iterate over the models.ResourceType objects
   * contained in responses from the listResourceTypes operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllResourceTypes(
    request: requests.ListResourceTypesRequest
  ): AsyncIterableIterator<models.ResourceType> {
    return paginateRecords(request, req => this.listResourceTypes(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listResourceTypes operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllResourceTypesResponses(
    request: requests.ListResourceTypesRequest
  ): AsyncIterableIterator<responses.ListResourceTypesResponse> {
    return paginateResponses(request, req => this.listResourceTypes(req));
  }

  /**
   * Queries any and all compartments in the tenancy to find resources that match the specified criteria.
   * Results include resources that you have permission to view and can span different resource types.
   * You can also sort results based on a specified resource attribute.
   *
   * @param SearchResourcesRequest
   * @return SearchResourcesResponse
   * @throws OciError when an error occurs
   */
  public async searchResources(
    searchResourcesRequest: requests.SearchResourcesRequest
  ): Promise<responses.SearchResourcesResponse> {
    if (this.logger) this.logger.debug("Calling operation ResourceSearchClient#searchResources.");
    const pathParams = {};

    const queryParams = {
      "limit": searchResourcesRequest.limit,
      "page": searchResourcesRequest.page
    };

    let headerParams = {
      "opc-request-id": searchResourcesRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/resources",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        searchResourcesRequest.searchDetails,
        "SearchDetails",
        models.SearchDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      searchResourcesRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.SearchResourcesResponse>{},
        body: await response.json(),
        bodyKey: "resourceSummaryCollection",
        bodyModel: "model.ResourceSummaryCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
