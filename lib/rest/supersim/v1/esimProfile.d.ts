/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

type EsimProfileStatus = 'new'|'reserving'|'available'|'downloaded'|'installed'|'failed';

/**
 * Initialize the EsimProfileList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function EsimProfileList(version: V1): EsimProfileListInstance;

interface EsimProfileListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): EsimProfileContext;
  /**
   * create a EsimProfileInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: EsimProfileListInstanceCreateOptions, callback?: (error: Error | null, item: EsimProfileInstance) => any): Promise<EsimProfileInstance>;
  /**
   * Streams EsimProfileInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: EsimProfileInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams EsimProfileInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: EsimProfileListInstanceEachOptions, callback?: (item: EsimProfileInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a esim_profile
   *
   * @param sid - The SID of the eSIM Profile resource to fetch
   */
  get(sid: string): EsimProfileContext;
  /**
   * Retrieve a single target page of EsimProfileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: EsimProfilePage) => any): Promise<EsimProfilePage>;
  /**
   * Retrieve a single target page of EsimProfileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: EsimProfilePage) => any): Promise<EsimProfilePage>;
  /**
   * Lists EsimProfileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: EsimProfileInstance[]) => any): Promise<EsimProfileInstance[]>;
  /**
   * Lists EsimProfileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: EsimProfileListInstanceOptions, callback?: (error: Error | null, items: EsimProfileInstance[]) => any): Promise<EsimProfileInstance[]>;
  /**
   * Retrieve a single page of EsimProfileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: EsimProfilePage) => any): Promise<EsimProfilePage>;
  /**
   * Retrieve a single page of EsimProfileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: EsimProfileListInstancePageOptions, callback?: (error: Error | null, items: EsimProfilePage) => any): Promise<EsimProfilePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property callbackMethod - The HTTP method we should use to call callback_url
 * @property callbackUrl - The URL we should call after we have sent when the status of the eSIM Profile changes
 * @property eid - Identifier of the eUICC that will claim the eSIM Profile
 */
interface EsimProfileListInstanceCreateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  eid: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property eid - List the eSIM Profiles that have been associated with an EId
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property simSid - Find the eSIM Profile resource related to a Sim resource by providing the SIM SID
 * @property status - List the eSIM Profiles that are in a given status
 */
interface EsimProfileListInstanceEachOptions {
  callback?: (item: EsimProfileInstance, done: (err?: Error) => void) => void;
  done?: Function;
  eid?: string;
  limit?: number;
  pageSize?: number;
  simSid?: string;
  status?: EsimProfileStatus;
}

/**
 * Options to pass to list
 *
 * @property eid - List the eSIM Profiles that have been associated with an EId
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property simSid - Find the eSIM Profile resource related to a Sim resource by providing the SIM SID
 * @property status - List the eSIM Profiles that are in a given status
 */
interface EsimProfileListInstanceOptions {
  eid?: string;
  limit?: number;
  pageSize?: number;
  simSid?: string;
  status?: EsimProfileStatus;
}

/**
 * Options to pass to page
 *
 * @property eid - List the eSIM Profiles that have been associated with an EId
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property simSid - Find the eSIM Profile resource related to a Sim resource by providing the SIM SID
 * @property status - List the eSIM Profiles that are in a given status
 */
interface EsimProfileListInstancePageOptions {
  eid?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  simSid?: string;
  status?: EsimProfileStatus;
}

interface EsimProfilePayload extends EsimProfileResource, Page.TwilioResponsePayload {
}

interface EsimProfileResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  eid: string;
  error_code: string;
  error_message: string;
  iccid: string;
  sid: string;
  sim_sid: string;
  smdp_plus_address: string;
  status: EsimProfileStatus;
  url: string;
}

interface EsimProfileSolution {
}


declare class EsimProfileContext {
  /**
   * Initialize the EsimProfileContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param sid - The SID of the eSIM Profile resource to fetch
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a EsimProfileInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EsimProfileInstance) => any): Promise<EsimProfileInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class EsimProfileInstance extends SerializableClass {
  /**
   * Initialize the EsimProfileContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The SID of the eSIM Profile resource to fetch
   */
  constructor(version: V1, payload: EsimProfilePayload, sid: string);

  private _proxy: EsimProfileContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  eid: string;
  errorCode: string;
  errorMessage: string;
  /**
   * fetch a EsimProfileInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EsimProfileInstance) => any): Promise<EsimProfileInstance>;
  iccid: string;
  sid: string;
  simSid: string;
  smdpPlusAddress: string;
  status: EsimProfileStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class EsimProfilePage extends Page<V1, EsimProfilePayload, EsimProfileResource, EsimProfileInstance> {
  /**
   * Initialize the EsimProfilePage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: EsimProfileSolution);

  /**
   * Build an instance of EsimProfileInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EsimProfilePayload): EsimProfileInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { EsimProfileContext, EsimProfileInstance, EsimProfileList, EsimProfileListInstance, EsimProfileListInstanceCreateOptions, EsimProfileListInstanceEachOptions, EsimProfileListInstanceOptions, EsimProfileListInstancePageOptions, EsimProfilePage, EsimProfilePayload, EsimProfileResource, EsimProfileSolution, EsimProfileStatus }
