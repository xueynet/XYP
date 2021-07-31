﻿using System.Threading.Tasks;

namespace Xuey.NET.Framework
{
    /// <summary>
    /// 聊天客户端接口定义
    /// </summary>
    public interface IChatClient
    {
        /// <summary>
        /// 强制下线
        /// </summary>
        /// <returns></returns>
        Task ForceExist();
    }
}