/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET通用权限管理平台
 * 前后端分离架构，开箱即用，紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddTenantInput } from '../models';
import { DeleteTenantInput } from '../models';
import { GrantRoleMenuInput } from '../models';
import { QueryTenantInput } from '../models';
import { SysTenant } from '../models';
import { UpdateTenantInput } from '../models';
import { XnRestfulResultOfListOfInt64 } from '../models';
import { XnRestfulResultOfObject } from '../models';
import { XnRestfulResultOfSysTenant } from '../models';
/**
 * TenantApi - axios parameter creator
 * @export
 */
export const TenantApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 新增租户时，初始化数据
         * @param {SysTenant} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTenantInitNewTenantPost: async (body?: SysTenant, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/tenant/init-new-tenant`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/xml';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 增加租户
         * @param {AddTenantInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantAddPost: async (body?: AddTenantInput, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysTenant/add`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/xml';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 删除租户
         * @param {DeleteTenantInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantDeletePost: async (body?: DeleteTenantInput, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysTenant/delete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/xml';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取租户
         * @param {number} id 主键Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantDetailGet: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling sysTenantDetailGet.');
            }
            const localVarPath = `/sysTenant/detail`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            if (id !== undefined) {
                localVarQueryParameter['Id'] = id;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 更新租户
         * @param {UpdateTenantInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantEditPost: async (body?: UpdateTenantInput, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysTenant/edit`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/xml';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 授权租户管理员角色菜单
         * @param {GrantRoleMenuInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantGrantMenuPost: async (body?: GrantRoleMenuInput, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysTenant/grantMenu`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/xml';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取租户管理员角色拥有菜单Id集合
         * @param {number} id 主键Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantOwnMenuGet: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling sysTenantOwnMenuGet.');
            }
            const localVarPath = `/sysTenant/ownMenu`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            if (id !== undefined) {
                localVarQueryParameter['Id'] = id;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 分页查询租户
         * @param {string} [name] 公司名称
         * @param {string} [host] 主机
         * @param {string} [searchValue] 搜索值
         * @param {number} [pageNo] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [searchBeginTime] 搜索开始时间
         * @param {string} [searchEndTime] 搜索结束时间
         * @param {string} [sortField] 排序字段
         * @param {string} [sortOrder] 排序方法,默认升序,否则降序(配合antd前端,约定参数为 Ascend,Dscend)
         * @param {string} [descStr] 降序排序(不要问我为什么是descend不是desc，前端约定参数就是这样)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantPageGet: async (name?: string, host?: string, searchValue?: string, pageNo?: number, pageSize?: number, searchBeginTime?: string, searchEndTime?: string, sortField?: string, sortOrder?: string, descStr?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysTenant/page`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            if (name !== undefined) {
                localVarQueryParameter['Name'] = name;
            }

            if (host !== undefined) {
                localVarQueryParameter['Host'] = host;
            }

            if (searchValue !== undefined) {
                localVarQueryParameter['SearchValue'] = searchValue;
            }

            if (pageNo !== undefined) {
                localVarQueryParameter['PageNo'] = pageNo;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['PageSize'] = pageSize;
            }

            if (searchBeginTime !== undefined) {
                localVarQueryParameter['SearchBeginTime'] = searchBeginTime;
            }

            if (searchEndTime !== undefined) {
                localVarQueryParameter['SearchEndTime'] = searchEndTime;
            }

            if (sortField !== undefined) {
                localVarQueryParameter['SortField'] = sortField;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['SortOrder'] = sortOrder;
            }

            if (descStr !== undefined) {
                localVarQueryParameter['DescStr'] = descStr;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 重置租户管理员密码
         * @param {QueryTenantInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantResetPwdPost: async (body?: QueryTenantInput, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysTenant/resetPwd`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/xml';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TenantApi - functional programming interface
 * @export
 */
export const TenantApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 新增租户时，初始化数据
         * @param {SysTenant} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTenantInitNewTenantPost(body?: SysTenant, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TenantApiAxiosParamCreator(configuration).apiTenantInitNewTenantPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 增加租户
         * @param {AddTenantInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysTenantAddPost(body?: AddTenantInput, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TenantApiAxiosParamCreator(configuration).sysTenantAddPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除租户
         * @param {DeleteTenantInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysTenantDeletePost(body?: DeleteTenantInput, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TenantApiAxiosParamCreator(configuration).sysTenantDeletePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取租户
         * @param {number} id 主键Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysTenantDetailGet(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<XnRestfulResultOfSysTenant>> {
            const localVarAxiosArgs = await TenantApiAxiosParamCreator(configuration).sysTenantDetailGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新租户
         * @param {UpdateTenantInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysTenantEditPost(body?: UpdateTenantInput, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TenantApiAxiosParamCreator(configuration).sysTenantEditPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 授权租户管理员角色菜单
         * @param {GrantRoleMenuInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysTenantGrantMenuPost(body?: GrantRoleMenuInput, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TenantApiAxiosParamCreator(configuration).sysTenantGrantMenuPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取租户管理员角色拥有菜单Id集合
         * @param {number} id 主键Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysTenantOwnMenuGet(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<XnRestfulResultOfListOfInt64>> {
            const localVarAxiosArgs = await TenantApiAxiosParamCreator(configuration).sysTenantOwnMenuGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 分页查询租户
         * @param {string} [name] 公司名称
         * @param {string} [host] 主机
         * @param {string} [searchValue] 搜索值
         * @param {number} [pageNo] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [searchBeginTime] 搜索开始时间
         * @param {string} [searchEndTime] 搜索结束时间
         * @param {string} [sortField] 排序字段
         * @param {string} [sortOrder] 排序方法,默认升序,否则降序(配合antd前端,约定参数为 Ascend,Dscend)
         * @param {string} [descStr] 降序排序(不要问我为什么是descend不是desc，前端约定参数就是这样)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysTenantPageGet(name?: string, host?: string, searchValue?: string, pageNo?: number, pageSize?: number, searchBeginTime?: string, searchEndTime?: string, sortField?: string, sortOrder?: string, descStr?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<XnRestfulResultOfObject>> {
            const localVarAxiosArgs = await TenantApiAxiosParamCreator(configuration).sysTenantPageGet(name, host, searchValue, pageNo, pageSize, searchBeginTime, searchEndTime, sortField, sortOrder, descStr, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 重置租户管理员密码
         * @param {QueryTenantInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysTenantResetPwdPost(body?: QueryTenantInput, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TenantApiAxiosParamCreator(configuration).sysTenantResetPwdPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TenantApi - factory interface
 * @export
 */
export const TenantApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 新增租户时，初始化数据
         * @param {SysTenant} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTenantInitNewTenantPost(body?: SysTenant, options?: any): AxiosPromise<void> {
            return TenantApiFp(configuration).apiTenantInitNewTenantPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 增加租户
         * @param {AddTenantInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantAddPost(body?: AddTenantInput, options?: any): AxiosPromise<void> {
            return TenantApiFp(configuration).sysTenantAddPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除租户
         * @param {DeleteTenantInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantDeletePost(body?: DeleteTenantInput, options?: any): AxiosPromise<void> {
            return TenantApiFp(configuration).sysTenantDeletePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取租户
         * @param {number} id 主键Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantDetailGet(id: number, options?: any): AxiosPromise<XnRestfulResultOfSysTenant> {
            return TenantApiFp(configuration).sysTenantDetailGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新租户
         * @param {UpdateTenantInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantEditPost(body?: UpdateTenantInput, options?: any): AxiosPromise<void> {
            return TenantApiFp(configuration).sysTenantEditPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 授权租户管理员角色菜单
         * @param {GrantRoleMenuInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantGrantMenuPost(body?: GrantRoleMenuInput, options?: any): AxiosPromise<void> {
            return TenantApiFp(configuration).sysTenantGrantMenuPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取租户管理员角色拥有菜单Id集合
         * @param {number} id 主键Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantOwnMenuGet(id: number, options?: any): AxiosPromise<XnRestfulResultOfListOfInt64> {
            return TenantApiFp(configuration).sysTenantOwnMenuGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 分页查询租户
         * @param {string} [name] 公司名称
         * @param {string} [host] 主机
         * @param {string} [searchValue] 搜索值
         * @param {number} [pageNo] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [searchBeginTime] 搜索开始时间
         * @param {string} [searchEndTime] 搜索结束时间
         * @param {string} [sortField] 排序字段
         * @param {string} [sortOrder] 排序方法,默认升序,否则降序(配合antd前端,约定参数为 Ascend,Dscend)
         * @param {string} [descStr] 降序排序(不要问我为什么是descend不是desc，前端约定参数就是这样)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantPageGet(name?: string, host?: string, searchValue?: string, pageNo?: number, pageSize?: number, searchBeginTime?: string, searchEndTime?: string, sortField?: string, sortOrder?: string, descStr?: string, options?: any): AxiosPromise<XnRestfulResultOfObject> {
            return TenantApiFp(configuration).sysTenantPageGet(name, host, searchValue, pageNo, pageSize, searchBeginTime, searchEndTime, sortField, sortOrder, descStr, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 重置租户管理员密码
         * @param {QueryTenantInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysTenantResetPwdPost(body?: QueryTenantInput, options?: any): AxiosPromise<void> {
            return TenantApiFp(configuration).sysTenantResetPwdPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TenantApi - object-oriented interface
 * @export
 * @class TenantApi
 * @extends {BaseAPI}
 */
export class TenantApi extends BaseAPI {
    /**
     * 
     * @summary 新增租户时，初始化数据
     * @param {SysTenant} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TenantApi
     */
    public apiTenantInitNewTenantPost(body?: SysTenant, options?: any) {
        return TenantApiFp(this.configuration).apiTenantInitNewTenantPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 增加租户
     * @param {AddTenantInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TenantApi
     */
    public sysTenantAddPost(body?: AddTenantInput, options?: any) {
        return TenantApiFp(this.configuration).sysTenantAddPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除租户
     * @param {DeleteTenantInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TenantApi
     */
    public sysTenantDeletePost(body?: DeleteTenantInput, options?: any) {
        return TenantApiFp(this.configuration).sysTenantDeletePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取租户
     * @param {number} id 主键Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TenantApi
     */
    public sysTenantDetailGet(id: number, options?: any) {
        return TenantApiFp(this.configuration).sysTenantDetailGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新租户
     * @param {UpdateTenantInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TenantApi
     */
    public sysTenantEditPost(body?: UpdateTenantInput, options?: any) {
        return TenantApiFp(this.configuration).sysTenantEditPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 授权租户管理员角色菜单
     * @param {GrantRoleMenuInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TenantApi
     */
    public sysTenantGrantMenuPost(body?: GrantRoleMenuInput, options?: any) {
        return TenantApiFp(this.configuration).sysTenantGrantMenuPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取租户管理员角色拥有菜单Id集合
     * @param {number} id 主键Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TenantApi
     */
    public sysTenantOwnMenuGet(id: number, options?: any) {
        return TenantApiFp(this.configuration).sysTenantOwnMenuGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 分页查询租户
     * @param {string} [name] 公司名称
     * @param {string} [host] 主机
     * @param {string} [searchValue] 搜索值
     * @param {number} [pageNo] 当前页码
     * @param {number} [pageSize] 页码容量
     * @param {string} [searchBeginTime] 搜索开始时间
     * @param {string} [searchEndTime] 搜索结束时间
     * @param {string} [sortField] 排序字段
     * @param {string} [sortOrder] 排序方法,默认升序,否则降序(配合antd前端,约定参数为 Ascend,Dscend)
     * @param {string} [descStr] 降序排序(不要问我为什么是descend不是desc，前端约定参数就是这样)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TenantApi
     */
    public sysTenantPageGet(name?: string, host?: string, searchValue?: string, pageNo?: number, pageSize?: number, searchBeginTime?: string, searchEndTime?: string, sortField?: string, sortOrder?: string, descStr?: string, options?: any) {
        return TenantApiFp(this.configuration).sysTenantPageGet(name, host, searchValue, pageNo, pageSize, searchBeginTime, searchEndTime, sortField, sortOrder, descStr, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 重置租户管理员密码
     * @param {QueryTenantInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TenantApi
     */
    public sysTenantResetPwdPost(body?: QueryTenantInput, options?: any) {
        return TenantApiFp(this.configuration).sysTenantResetPwdPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
