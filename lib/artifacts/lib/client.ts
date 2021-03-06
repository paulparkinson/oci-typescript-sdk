/**
 * Container Images API
 * API covering the [Registry](/iaas/Content/Registry/Concepts/registryoverview.htm) services.
Use this API to manage resources such as container images and repositories.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as models from "./model";
import * as responses from "./response";
import { ArtifactsWaiter } from "./artifacts-waiter";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ArtifactsApiKeys {}

export class ArtifactsClient {
  protected static serviceEndpointTemplate = "https://artifacts.{region}.oci.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": ArtifactsWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
    }
    this._httpClient =
      params.httpClient || new common.FetchHttpClient(requestSigner, this._circuitBreaker);

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
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20160918";
    if (this.logger) this.logger.info(`ArtifactsClient endpoint set to ${this._endpoint}`);
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
      ArtifactsClient.serviceEndpointTemplate,
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
      ArtifactsClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Creates a new ArtifactsWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): ArtifactsWaiter {
    this._waiters = new ArtifactsWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): ArtifactsWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Moves a container repository into a different compartment within the same tenancy. For information about moving
   * resources between compartments, see
   * [Moving Resources to a Different Compartment](https://docs.cloud.oracle.com/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).
   *
   * @param ChangeContainerRepositoryCompartmentRequest
   * @return ChangeContainerRepositoryCompartmentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/artifacts/ChangeContainerRepositoryCompartment.ts.html |here} to see how to use ChangeContainerRepositoryCompartment API.
   */
  public async changeContainerRepositoryCompartment(
    changeContainerRepositoryCompartmentRequest: requests.ChangeContainerRepositoryCompartmentRequest
  ): Promise<responses.ChangeContainerRepositoryCompartmentResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ArtifactsClient#changeContainerRepositoryCompartment.");
    const pathParams = {
      "{repositoryId}": changeContainerRepositoryCompartmentRequest.repositoryId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": changeContainerRepositoryCompartmentRequest.ifMatch,
      "opc-request-id": changeContainerRepositoryCompartmentRequest.opcRequestId,
      "opc-retry-token": changeContainerRepositoryCompartmentRequest.opcRetryToken
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/container/repositories/{repositoryId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeContainerRepositoryCompartmentRequest.changeContainerRepositoryCompartmentDetails,
        "ChangeContainerRepositoryCompartmentDetails",
        models.ChangeContainerRepositoryCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      changeContainerRepositoryCompartmentRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeContainerRepositoryCompartmentResponse>{},
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
   * Create a new empty container repository. Avoid entering confidential information.
   * @param CreateContainerRepositoryRequest
   * @return CreateContainerRepositoryResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/artifacts/CreateContainerRepository.ts.html |here} to see how to use CreateContainerRepository API.
   */
  public async createContainerRepository(
    createContainerRepositoryRequest: requests.CreateContainerRepositoryRequest
  ): Promise<responses.CreateContainerRepositoryResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ArtifactsClient#createContainerRepository.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": createContainerRepositoryRequest.opcRequestId,
      "opc-retry-token": createContainerRepositoryRequest.opcRetryToken
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/container/repositories",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createContainerRepositoryRequest.createContainerRepositoryDetails,
        "CreateContainerRepositoryDetails",
        models.CreateContainerRepositoryDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      createContainerRepositoryRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateContainerRepositoryResponse>{},
        body: await response.json(),
        bodyKey: "containerRepository",
        bodyModel: "model.ContainerRepository",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
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
   * Delete a container image.
   * @param DeleteContainerImageRequest
   * @return DeleteContainerImageResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/artifacts/DeleteContainerImage.ts.html |here} to see how to use DeleteContainerImage API.
   */
  public async deleteContainerImage(
    deleteContainerImageRequest: requests.DeleteContainerImageRequest
  ): Promise<responses.DeleteContainerImageResponse> {
    if (this.logger) this.logger.debug("Calling operation ArtifactsClient#deleteContainerImage.");
    const pathParams = {
      "{imageId}": deleteContainerImageRequest.imageId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteContainerImageRequest.ifMatch,
      "opc-request-id": deleteContainerImageRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/container/images/{imageId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      deleteContainerImageRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteContainerImageResponse>{},
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
   * Delete container repository.
   * @param DeleteContainerRepositoryRequest
   * @return DeleteContainerRepositoryResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/artifacts/DeleteContainerRepository.ts.html |here} to see how to use DeleteContainerRepository API.
   */
  public async deleteContainerRepository(
    deleteContainerRepositoryRequest: requests.DeleteContainerRepositoryRequest
  ): Promise<responses.DeleteContainerRepositoryResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ArtifactsClient#deleteContainerRepository.");
    const pathParams = {
      "{repositoryId}": deleteContainerRepositoryRequest.repositoryId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteContainerRepositoryRequest.ifMatch,
      "opc-request-id": deleteContainerRepositoryRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/container/repositories/{repositoryId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      deleteContainerRepositoryRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteContainerRepositoryResponse>{},
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
   * Get container configuration.
   * @param GetContainerConfigurationRequest
   * @return GetContainerConfigurationResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/artifacts/GetContainerConfiguration.ts.html |here} to see how to use GetContainerConfiguration API.
   */
  public async getContainerConfiguration(
    getContainerConfigurationRequest: requests.GetContainerConfigurationRequest
  ): Promise<responses.GetContainerConfigurationResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ArtifactsClient#getContainerConfiguration.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": getContainerConfigurationRequest.compartmentId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getContainerConfigurationRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/container/configuration",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getContainerConfigurationRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetContainerConfigurationResponse>{},
        body: await response.json(),
        bodyKey: "containerConfiguration",
        bodyModel: "model.ContainerConfiguration",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
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
   * Get container image metadata.
   * @param GetContainerImageRequest
   * @return GetContainerImageResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/artifacts/GetContainerImage.ts.html |here} to see how to use GetContainerImage API.
   */
  public async getContainerImage(
    getContainerImageRequest: requests.GetContainerImageRequest
  ): Promise<responses.GetContainerImageResponse> {
    if (this.logger) this.logger.debug("Calling operation ArtifactsClient#getContainerImage.");
    const pathParams = {
      "{imageId}": getContainerImageRequest.imageId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getContainerImageRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/container/images/{imageId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getContainerImageRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetContainerImageResponse>{},
        body: await response.json(),
        bodyKey: "containerImage",
        bodyModel: "model.ContainerImage",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
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
   * Get container repository.
   * @param GetContainerRepositoryRequest
   * @return GetContainerRepositoryResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/artifacts/GetContainerRepository.ts.html |here} to see how to use GetContainerRepository API.
   */
  public async getContainerRepository(
    getContainerRepositoryRequest: requests.GetContainerRepositoryRequest
  ): Promise<responses.GetContainerRepositoryResponse> {
    if (this.logger) this.logger.debug("Calling operation ArtifactsClient#getContainerRepository.");
    const pathParams = {
      "{repositoryId}": getContainerRepositoryRequest.repositoryId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getContainerRepositoryRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/container/repositories/{repositoryId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getContainerRepositoryRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetContainerRepositoryResponse>{},
        body: await response.json(),
        bodyKey: "containerRepository",
        bodyModel: "model.ContainerRepository",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
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
   * List container images in a compartment.
   * @param ListContainerImagesRequest
   * @return ListContainerImagesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/artifacts/ListContainerImages.ts.html |here} to see how to use ListContainerImages API.
   */
  public async listContainerImages(
    listContainerImagesRequest: requests.ListContainerImagesRequest
  ): Promise<responses.ListContainerImagesResponse> {
    if (this.logger) this.logger.debug("Calling operation ArtifactsClient#listContainerImages.");
    const pathParams = {};

    const queryParams = {
      "compartmentIdInSubtree": listContainerImagesRequest.compartmentIdInSubtree,
      "compartmentId": listContainerImagesRequest.compartmentId,
      "displayName": listContainerImagesRequest.displayName,
      "imageId": listContainerImagesRequest.imageId,
      "isVersioned": listContainerImagesRequest.isVersioned,
      "repositoryId": listContainerImagesRequest.repositoryId,
      "repositoryName": listContainerImagesRequest.repositoryName,
      "version": listContainerImagesRequest.version,
      "lifecycleState": listContainerImagesRequest.lifecycleState,
      "limit": listContainerImagesRequest.limit,
      "page": listContainerImagesRequest.page,
      "sortBy": listContainerImagesRequest.sortBy,
      "sortOrder": listContainerImagesRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listContainerImagesRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/container/images",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listContainerImagesRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListContainerImagesResponse>{},
        body: await response.json(),
        bodyKey: "containerImageCollection",
        bodyModel: "model.ContainerImageCollection",
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
   * List container repositories in a compartment.
   * @param ListContainerRepositoriesRequest
   * @return ListContainerRepositoriesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/artifacts/ListContainerRepositories.ts.html |here} to see how to use ListContainerRepositories API.
   */
  public async listContainerRepositories(
    listContainerRepositoriesRequest: requests.ListContainerRepositoriesRequest
  ): Promise<responses.ListContainerRepositoriesResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ArtifactsClient#listContainerRepositories.");
    const pathParams = {};

    const queryParams = {
      "compartmentIdInSubtree": listContainerRepositoriesRequest.compartmentIdInSubtree,
      "compartmentId": listContainerRepositoriesRequest.compartmentId,
      "repositoryId": listContainerRepositoriesRequest.repositoryId,
      "displayName": listContainerRepositoriesRequest.displayName,
      "isPublic": listContainerRepositoriesRequest.isPublic,
      "lifecycleState": listContainerRepositoriesRequest.lifecycleState,
      "limit": listContainerRepositoriesRequest.limit,
      "page": listContainerRepositoriesRequest.page,
      "sortBy": listContainerRepositoriesRequest.sortBy,
      "sortOrder": listContainerRepositoriesRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listContainerRepositoriesRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/container/repositories",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listContainerRepositoriesRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListContainerRepositoriesResponse>{},
        body: await response.json(),
        bodyKey: "containerRepositoryCollection",
        bodyModel: "model.ContainerRepositoryCollection",
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
   * Remove version from container image.
   * @param RemoveContainerVersionRequest
   * @return RemoveContainerVersionResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/artifacts/RemoveContainerVersion.ts.html |here} to see how to use RemoveContainerVersion API.
   */
  public async removeContainerVersion(
    removeContainerVersionRequest: requests.RemoveContainerVersionRequest
  ): Promise<responses.RemoveContainerVersionResponse> {
    if (this.logger) this.logger.debug("Calling operation ArtifactsClient#removeContainerVersion.");
    const pathParams = {
      "{imageId}": removeContainerVersionRequest.imageId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": removeContainerVersionRequest.ifMatch,
      "opc-request-id": removeContainerVersionRequest.opcRequestId,
      "opc-retry-token": removeContainerVersionRequest.opcRetryToken
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/container/images/{imageId}/actions/removeVersion",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        removeContainerVersionRequest.removeContainerVersionDetails,
        "RemoveContainerVersionDetails",
        models.RemoveContainerVersionDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      removeContainerVersionRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.RemoveContainerVersionResponse>{},
        body: await response.json(),
        bodyKey: "containerImage",
        bodyModel: "model.ContainerImage",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
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
   * Restore a container image.
   * @param RestoreContainerImageRequest
   * @return RestoreContainerImageResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/artifacts/RestoreContainerImage.ts.html |here} to see how to use RestoreContainerImage API.
   */
  public async restoreContainerImage(
    restoreContainerImageRequest: requests.RestoreContainerImageRequest
  ): Promise<responses.RestoreContainerImageResponse> {
    if (this.logger) this.logger.debug("Calling operation ArtifactsClient#restoreContainerImage.");
    const pathParams = {
      "{imageId}": restoreContainerImageRequest.imageId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": restoreContainerImageRequest.ifMatch,
      "opc-request-id": restoreContainerImageRequest.opcRequestId,
      "opc-retry-token": restoreContainerImageRequest.opcRetryToken
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/container/images/{imageId}/actions/restore",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        restoreContainerImageRequest.restoreContainerImageDetails,
        "RestoreContainerImageDetails",
        models.RestoreContainerImageDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      restoreContainerImageRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.RestoreContainerImageResponse>{},
        body: await response.json(),
        bodyKey: "containerImage",
        bodyModel: "model.ContainerImage",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
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
   * Update container configuration.
   * @param UpdateContainerConfigurationRequest
   * @return UpdateContainerConfigurationResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/artifacts/UpdateContainerConfiguration.ts.html |here} to see how to use UpdateContainerConfiguration API.
   */
  public async updateContainerConfiguration(
    updateContainerConfigurationRequest: requests.UpdateContainerConfigurationRequest
  ): Promise<responses.UpdateContainerConfigurationResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ArtifactsClient#updateContainerConfiguration.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": updateContainerConfigurationRequest.compartmentId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateContainerConfigurationRequest.ifMatch,
      "opc-request-id": updateContainerConfigurationRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/container/configuration",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateContainerConfigurationRequest.updateContainerConfigurationDetails,
        "UpdateContainerConfigurationDetails",
        models.UpdateContainerConfigurationDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      updateContainerConfigurationRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateContainerConfigurationResponse>{},
        body: await response.json(),
        bodyKey: "containerConfiguration",
        bodyModel: "model.ContainerConfiguration",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
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
   * Modify the properties of a container repository. Avoid entering confidential information.
   * @param UpdateContainerRepositoryRequest
   * @return UpdateContainerRepositoryResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/artifacts/UpdateContainerRepository.ts.html |here} to see how to use UpdateContainerRepository API.
   */
  public async updateContainerRepository(
    updateContainerRepositoryRequest: requests.UpdateContainerRepositoryRequest
  ): Promise<responses.UpdateContainerRepositoryResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ArtifactsClient#updateContainerRepository.");
    const pathParams = {
      "{repositoryId}": updateContainerRepositoryRequest.repositoryId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateContainerRepositoryRequest.ifMatch,
      "opc-request-id": updateContainerRepositoryRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/container/repositories/{repositoryId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateContainerRepositoryRequest.updateContainerRepositoryDetails,
        "UpdateContainerRepositoryDetails",
        models.UpdateContainerRepositoryDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      updateContainerRepositoryRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateContainerRepositoryResponse>{},
        body: await response.json(),
        bodyKey: "containerRepository",
        bodyModel: "model.ContainerRepository",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
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
