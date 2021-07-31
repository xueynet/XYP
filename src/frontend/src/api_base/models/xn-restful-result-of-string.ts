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
/**
 * RESTful风格---XIAONUO返回格式
 * @export
 * @interface XnRestfulResultOfString
 */
export interface XnRestfulResultOfString {
    /**
     * 执行成功
     * @type {boolean}
     * @memberof XnRestfulResultOfString
     */
    success?: any;
    /**
     * 状态码
     * @type {number}
     * @memberof XnRestfulResultOfString
     */
    code?: any | null;
    /**
     * 错误信息
     * @type {ModelObject}
     * @memberof XnRestfulResultOfString
     */
    message?: any | null;
    /**
     * 数据
     * @type {string}
     * @memberof XnRestfulResultOfString
     */
    data?: any | null;
    /**
     * 附加数据
     * @type {ModelObject}
     * @memberof XnRestfulResultOfString
     */
    extras?: any | null;
    /**
     * 时间戳
     * @type {number}
     * @memberof XnRestfulResultOfString
     */
    timestamp?: any;
}
