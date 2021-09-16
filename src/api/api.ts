/**
 *
 * API
 *
 * Generic API class and factory, plus some utilities.  Use with product-specific endpoints to
 * create product-specific functional APIs.
 *
 */

/**
 * Enum for available API methods.
 * @readonly
 * @enum string}
 */

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type Endpoint = string;

export interface APIOptions {
  id?: string | number;
  params?: Record<string, string | number | boolean>;
  headers?: Record<string, string | number | boolean>;
  fetchInit?: {};
}

/**
 * Default headers to apply to all requests
 *
 * @type {{string: string}}
 */
const baseHeaders = {};

/**
 * Convert an object of paramaters ({param1: value1, etc...}) for a request to
 * a query string ("?param1=value1&p2=v2...")
 *
 * @param {Object} params - object of key value pairs of parameters
 * @returns {string} - url query string representation of `params`
 */
function serializeParams(params?: Record<string, string | number | boolean>) {
  if (!params || !Object.keys(params)) return '';
  return `?${Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join('&')}`;
}

class API<E extends Endpoint> {
  host: string;

  constructor(host: string) {
    this.host = host;
  }

  /**
   * Base api call function.
   *
   * @param {Endpoint} endpoint - target for request
   * @param {Method} method - HTTP method to use
   * @param {Object} [options] - optional parameters
   * @param {string | number} [options.id] - id of resource at endpoint to be retrieved
   * @param {Object} [options.params] - url parameters
   * @param {Object} [options.body] - body data to supply to fetch request
   * @param {Object} [options.headers] - HTTP headers to supply to fetch
   * @param {Object} [options.fetchInit] - catchall for other fetch init options
   * @returns {Promise<Response>}
   */
  callEndpoint(endpoint: E, method: Method, options?: APIOptions) {
    const { id, params, headers, fetchInit } = options || {
      id: undefined,
      params: undefined,
      body: undefined,
      headers: {},
      fetchInit: {},
    };

    const idPath = ['null', 'undefined'].includes(typeof id) ? '' : `${id}/`;
    const urlParams = serializeParams(params);
    const url = `${this.host}/${endpoint}/${idPath}${urlParams}`;

    return fetch(url, {
      ...fetchInit,
      ...{
        method,
        headers: { ...baseHeaders, ...headers },
      },
    });
  }

  /**
   * Async version of base api call function.
   *
   * @param {Endpoint} endpoint - target for request
   * @param {Method} method - HTTP method to use
   * @param {Object} [options] - optional parameters
   * @param {string | number} [options.id] - id of resource at endpoint to be retrieved
   * @param {Object} [options.params] - url parameters
   * @param {Object} [options.body] - body data to supply to fetch request
   * @param {Object} [options.headers] - HTTP headers to supply to fetch
   * @param {Object} [options.fetchInit] - catchall for other fetch init options
   * @returns {Object | null}
   */
  async callAndProcessEndpoint<T = any>(
    endpoint: E,
    method: Method,
    options?: APIOptions
  ): Promise<ResponsePackage<T>> {
    try {
      const response = await this.callEndpoint(endpoint, method, options);
      if (response.ok) {
        const data = (await response.json()) as T;
        return { data };
      } else {
        const message = await response.text();
        console.warn(response.status, message);
        return { error: message };
      }
    } catch (err) {
      console.warn(err);
      return { error: err as string };
    }
  }
}

export interface ResponsePackage<T> {
  data?: T;
  error?: string;
}

export function createAPI<E extends Endpoint>(host: string): API<E> {
  return new API<E>(host);
}
