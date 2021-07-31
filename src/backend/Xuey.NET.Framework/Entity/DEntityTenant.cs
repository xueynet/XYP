﻿using Microsoft.EntityFrameworkCore;

namespace Xuey.NET.Framework
{
    /// <summary>
    /// 自定义租户基类实体
    /// </summary>
    public abstract class DEntityTenant : DEntityBase
    {
        /// <summary>
        /// 租户id
        /// </summary>
        [Comment("租户id")]
        public virtual long? TenantId { get; set; }
    }
}