/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.10.9.0 (NJsonSchema v10.4.1.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

export class AuthorizedApiBase {
  protected accessToken: string;
  private readonly config: IConfig;

  protected constructor(config: IConfig, accessToken: string = "") {
    this.config = config;
    this.accessToken = accessToken;
  }

  protected transformOptions = (
    options: AxiosRequestConfig
  ): Promise<AxiosRequestConfig> => {
    options.headers = {
      ...options.headers,
      Authorization: this.accessToken ? `Bearer ${this.accessToken}` : "",
    };
    return Promise.resolve(options);
  };

  setToken(accessToken: string) {
    this.accessToken = accessToken;
  }
}

export interface IKAApiClent {
    /**
     * Get post by Id
     * @param commentsSortedBy (optional) 
     * @return OK
     */
    getPostById(postId: string, commentsSortedBy?: CommentsSortedBy | undefined, cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<Post>;
    /**
     * Create a regular user
     * @param body (optional) 
     * @return OK
     */
    signupRegularUser(body?: RegularUserCredentials | undefined, cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void, onUploadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<AuthResponse>;
    /**
     * Create a professional user
     * @param body (optional) 
     * @return OK
     */
    signupProfessionalUser(body?: ProfessionalUserCredentials | undefined, cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void, onUploadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<AuthResponse>;
    /**
     * Logs in a user
     * @param body (optional) 
     * @return OK
     */
    loginUser(body?: UserLoginCredentials | undefined, cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void, onUploadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<AuthResponse>;
    /**
     * Get communities of a user
     * @return OK
     */
    getCommunities(cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<CommunityListElement[]>;
    /**
     * Get suggested communities of a user
     * @return OK
     */
    getSuggestedCommunities(cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<CommunityListElement[]>;
    /**
     * Get posts by UserId
     * @return OK
     */
    getPostsByUserId(userId: string, cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<Post[]>;
    /**
     * Get comments by UserId
     * @return OK
     */
    getCommentsByUserId(userId: string, cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<Comment[]>;
}

export class KAApiClent extends AuthorizedApiBase implements IKAApiClent {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: IConfig, baseUrl?: string, instance?: AxiosInstance) {
        super(configuration);
        this.instance = instance ? instance : axios.create();
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "http://localhost:8000";
    }

    /**
     * Get post by Id
     * @param commentsSortedBy (optional) 
     * @return OK
     */
    getPostById(postId: string, commentsSortedBy?: CommentsSortedBy | undefined, cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<Post> {
        let url_ = this.baseUrl + "/post/{postId}?";
        if (postId === undefined || postId === null)
            throw new Error("The parameter 'postId' must be defined.");
        url_ = url_.replace("{postId}", encodeURIComponent("" + postId));
        if (commentsSortedBy === null)
            throw new Error("The parameter 'commentsSortedBy' cannot be null.");
        else if (commentsSortedBy !== undefined)
            url_ += "commentsSortedBy=" + encodeURIComponent("" + commentsSortedBy) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken,
            onDownloadProgress,
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGetPostById(_response);
        });
    }

    protected processGetPostById(response: AxiosResponse): Promise<Post> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = resultData200
            return result200;
        } else {
            const _responseText = response.data;
            let resultdefault: any = null;
            let resultDatadefault  = _responseText;
            resultdefault = resultDatadefault
            return throwException("Bad Request", status, _responseText, _headers, resultdefault);
        }
    }

    /**
     * Create a regular user
     * @param body (optional) 
     * @return OK
     */
    signupRegularUser(body?: RegularUserCredentials | undefined, cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void, onUploadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<AuthResponse> {
        let url_ = this.baseUrl + "/user/regular/signup";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken,
            onDownloadProgress,
            onUploadProgress
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processSignupRegularUser(_response);
        });
    }

    protected processSignupRegularUser(response: AxiosResponse): Promise<AuthResponse> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = resultData200
            return result200;
        } else {
            const _responseText = response.data;
            let resultdefault: any = null;
            let resultDatadefault  = _responseText;
            resultdefault = resultDatadefault
            return throwException("Bad Request", status, _responseText, _headers, resultdefault);
        }
    }

    /**
     * Create a professional user
     * @param body (optional) 
     * @return OK
     */
    signupProfessionalUser(body?: ProfessionalUserCredentials | undefined, cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void, onUploadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<AuthResponse> {
        let url_ = this.baseUrl + "/user/professional/signup";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken,
            onDownloadProgress,
            onUploadProgress
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processSignupProfessionalUser(_response);
        });
    }

    protected processSignupProfessionalUser(response: AxiosResponse): Promise<AuthResponse> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = resultData200
            return result200;
        } else {
            const _responseText = response.data;
            let resultdefault: any = null;
            let resultDatadefault  = _responseText;
            resultdefault = resultDatadefault
            return throwException("Bad Request", status, _responseText, _headers, resultdefault);
        }
    }

    /**
     * Logs in a user
     * @param body (optional) 
     * @return OK
     */
    loginUser(body?: UserLoginCredentials | undefined, cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void, onUploadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<AuthResponse> {
        let url_ = this.baseUrl + "/user/login";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken,
            onDownloadProgress,
            onUploadProgress
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processLoginUser(_response);
        });
    }

    protected processLoginUser(response: AxiosResponse): Promise<AuthResponse> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = resultData200
            return result200;
        } else {
            const _responseText = response.data;
            let resultdefault: any = null;
            let resultDatadefault  = _responseText;
            resultdefault = resultDatadefault
            return throwException("Bad Request", status, _responseText, _headers, resultdefault);
        }
    }

    /**
     * Get communities of a user
     * @return OK
     */
    getCommunities(cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<CommunityListElement[]> {
        let url_ = this.baseUrl + "/user/communities";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken,
            onDownloadProgress,
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGetCommunities(_response);
        });
    }

    protected processGetCommunities(response: AxiosResponse): Promise<CommunityListElement[]> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = resultData200
            return result200;
        } else {
            const _responseText = response.data;
            let resultdefault: any = null;
            let resultDatadefault  = _responseText;
            resultdefault = resultDatadefault
            return throwException("Bad Request", status, _responseText, _headers, resultdefault);
        }
    }

    /**
     * Get suggested communities of a user
     * @return OK
     */
    getSuggestedCommunities(cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<CommunityListElement[]> {
        let url_ = this.baseUrl + "/user/communities/suggested";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken,
            onDownloadProgress,
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGetSuggestedCommunities(_response);
        });
    }

    protected processGetSuggestedCommunities(response: AxiosResponse): Promise<CommunityListElement[]> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = resultData200
            return result200;
        } else {
            const _responseText = response.data;
            let resultdefault: any = null;
            let resultDatadefault  = _responseText;
            resultdefault = resultDatadefault
            return throwException("Bad Request", status, _responseText, _headers, resultdefault);
        }
    }

    /**
     * Get posts by UserId
     * @return OK
     */
    getPostsByUserId(userId: string, cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<Post[]> {
        let url_ = this.baseUrl + "/user/{userId}/posts";
        if (userId === undefined || userId === null)
            throw new Error("The parameter 'userId' must be defined.");
        url_ = url_.replace("{userId}", encodeURIComponent("" + userId));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken,
            onDownloadProgress,
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGetPostsByUserId(_response);
        });
    }

    protected processGetPostsByUserId(response: AxiosResponse): Promise<Post[]> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = resultData200
            return result200;
        } else {
            const _responseText = response.data;
            let resultdefault: any = null;
            let resultDatadefault  = _responseText;
            resultdefault = resultDatadefault
            return throwException("Bad Request", status, _responseText, _headers, resultdefault);
        }
    }

    /**
     * Get comments by UserId
     * @return OK
     */
    getCommentsByUserId(userId: string, cancelToken?: CancelToken | undefined, onDownloadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<Comment[]> {
        let url_ = this.baseUrl + "/user/{userId}/comments";
        if (userId === undefined || userId === null)
            throw new Error("The parameter 'userId' must be defined.");
        url_ = url_.replace("{userId}", encodeURIComponent("" + userId));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken,
            onDownloadProgress,
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGetCommentsByUserId(_response);
        });
    }

    protected processGetCommentsByUserId(response: AxiosResponse): Promise<Comment[]> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = resultData200
            return result200;
        } else {
            const _responseText = response.data;
            let resultdefault: any = null;
            let resultDatadefault  = _responseText;
            resultdefault = resultDatadefault
            return throwException("Bad Request", status, _responseText, _headers, resultdefault);
        }
    }
}

export interface Post {
    _id?: string;
    title?: string;
    content?: string;
    tags?: string[];
    voteCount?: number;
    commentCount?: number;
    createdAt?: Date;
    community?: Community;
    postedBy?: PostedBy;
    comments?: Comment[];
}

export interface Comment {
    _id?: string;
    content?: string;
    voteCount?: string;
    replyCount?: number;
    createdAt?: Date;
    postedBy?: PostedBy2;
}

export interface RegularUserCredentials {
    role?: string;
    email?: string;
    password?: string;
}

export interface ProfessionalUserCredentials {
    role?: string;
    email?: string;
    password?: string;
    verified?: boolean;
    license?: string;
    licenseIssued?: Date;
    specialization?: string[];
}

export interface UserLoginCredentials {
    email?: string;
    password?: string;
}

export interface ErrorMessage {
    message?: string;
}

export interface AuthResponse {
    message?: string;
    jwt?: string;
    role?: string;
}

export interface CommunityListElement {
    _id?: string;
    name?: string;
    avatar?: string;
}

export type CommentsSortedBy = "time" | "votes" | "professional";

export interface Community {
    _id?: string;
    name?: string;
}

export interface PostedBy {
    _id?: string;
    username?: string;
    avatar?: string;
}

export interface PostedBy2 {
    _id?: string;
    username?: string;
    avatar?: string;
    rank?: number;
}

export class KAApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isKAApiException = true;

    static isKAApiException(obj: any): obj is KAApiException {
        return obj.isKAApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new KAApiException(message, status, response, headers, null);
}

function isAxiosError(obj: any | undefined): obj is AxiosError {
    return obj && obj.isAxiosError === true;
}

/**
 * Configuration class needed in base class.
 * The config is provided to the API client at initialization time.
 * API clients inherit from #AuthorizedApiBase and provide the config.
 */
export class IConfig {
  /**
   * Returns a valid value for the Authorization header.
   * Used to dynamically inject the current auth header.
   */
}